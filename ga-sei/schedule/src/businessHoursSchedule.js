const { joinSchedules } = require('./joinSchedule.js')
const { compose, withConst } = require('./util.js')
const { makeEventsStartingOn, stopOn, makeEvent, filterByEventName, makeSingleEvent } = require('./events.js') 
const { shiftWeekends, shiftBusinessHours, hour, day, first, of, week, saturday } = require('./time.js')
const { autoFillEvents } = require('./autofill.js')

const dailyEvent = (name, duration, time) =>
  makeEventsStartingOn(
    compose(
      first(time)(of(day)),
      shiftBusinessHours,
      makeEvent({name, duration})
    )
  )

const weeklyEvent = (name, duration, startDayTime) =>
  makeEventsStartingOn(
    compose(
      first(startDayTime)(of(week)),
      shiftBusinessHours,
      makeEvent({name, duration})
    )
  )

const notBusinessHoursEvents = 
  joinSchedules([
    makeEventsStartingOn(
      compose(
        first(17*hour)(of(day)),
        shiftWeekends,
        makeEvent({name: 'afterhours', duration: 16*hour })
      )
    ),
    makeEventsStartingOn(
      compose(
        first(saturday+9*hour)(of(week)),
        makeEvent({name: 'afterhours', duration: 2*day})
      )
    )
  ])

const singleEvent = (name, duration, start) =>
  makeSingleEvent({name, duration, start})

const makeSchedule = (start, end, planned) =>
  compose(
    autoFillEvents(x => x)(joinSchedules([notBusinessHoursEvents, ...planned])),
    withConst(start),
    stopOn(end),
    filterByEventName('afterhours')
  )

module.exports = {
  makeSchedule,
  weeklyEvent,
  dailyEvent,
  singleEvent
}
