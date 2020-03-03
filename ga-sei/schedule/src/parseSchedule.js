const scheduler = require('./businessHoursSchedule.js')
const sequencer = require('./sequencer.js')
const { importJSONFile, throwErr, trace, mapWith, withConst, compose } = require('./util.js')
const { skip } = require('./events.js')
const { time, fromTimeStr } = require('./time.js')

const makePlannedEvent = ({period, name, duration, start}) => {
  switch(period) {
    case 'weekly':  return scheduler.weeklyEvent(name, fromTimeStr(duration), fromTimeStr(start));
    case 'daily':   return scheduler.dailyEvent(name, fromTimeStr(duration), fromTimeStr(start));
    case 'once':    return scheduler.singleEvent(name, fromTimeStr(duration), time(start));
  }
}

const parseSequence = ({name, duration}) => ({
  name,
  duration: fromTimeStr(duration)
})

const parseApplyOverlay = (data) => {
  switch(data.type) {
    case 'duration' : return sequencer.duration(data.name, fromTimeStr(data.duration));
    case 'replace'  : return sequencer.replace(data.name, data.with);
    case 'swap'     : return sequencer.swap(data.names[0], data.names[1]);
    case 'add'      : return sequencer.add(data.after, parseSequence(data.lesson));
    case 'remove'   : return sequencer.remove(data.name);
    case 'move'     : 
      return data.after ? sequencer.moveAfter(data.after, data.name)
        : data.before ? sequencer.moveBefore(data.before, data.name)
        : throwErr('invalid move overlay. "after": or "before": required')
  }
}

const parsePlannedEvent = (data) =>
  withConst(makePlannedEvent(data))(e =>
    data.skipTimes
    ? skip(data.skipTimes.map(x => time(x)), e) 
    : e
  )

const parsePlannedEvents = mapWith(parsePlannedEvent) 
const parseApplyOverlays = mapWith(parseApplyOverlay)
const parseSequences = mapWith(parseSequence)

const applyOverlays = 
  compose(
    parseApplyOverlays,
    sequencer.applyOverlays
  )

const makeSchedule = (startTime, endTime, planned) =>
  scheduler.makeSchedule(
    time(startTime), 
    time(endTime),
    parsePlannedEvents(planned)
  )

const generateSchedule = ({template, overlays, startDate, endDate, plannedEvents }) =>
  importJSONFile(template)
  .then(compose(
    parseSequences,
    applyOverlays(overlays),
    makeSchedule(startDate, endDate, plannedEvents),
  ))

const generateScheduleFromJSONFile = 
  compose(
    importJSONFile,
    p => p.then(generateSchedule)
  )

module.exports = {
  generateSchedule,
  generateScheduleFromJSONFile
}

