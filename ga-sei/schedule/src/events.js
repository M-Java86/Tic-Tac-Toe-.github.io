const { trace, compose, asConst, lessThan, withConst } = require('./util.js')
const { merge, isDone, andThen, fix, repeat, constGen, takeWhile, skipIf } = require('./generator.js')
const { timeOfDay } = require('./time.js')

const makeEvent = (eventData) => (t = 0) =>
  ({eventData, 
    start: t,
    end: eventData.duration+t
  })

const endTime = ({end = 0} = {end: 0}) => end

const startTime = ({start = 0} = {start: 0}) => start

const eventData = ({eventData} = {name: 'unknown', duration: 0}) => eventData

const duration = 
  compose(
    eventData,
    ({duration = 0}) => duration
  )

const name = 
  compose(
    eventData,
    ({name = 'unknown'}) => name
  )

const isPastEvent = (t, event) => startTime(event) <= t

const isOnEvent = (t) => (event) => 
  startTime(event) <= t && t <= endTime(event)

const toEndTime = (t) => ({end: t})

const makeSingleEvent = ({name, duration, start}) => 
  asConst(constGen(
    makeEvent({ name, duration })(start)
  ))

const makeEventsStartingOn = (f) =>
  compose(
    toEndTime,
    fix(compose(endTime,f))
  )

const stopOn = (endTime) => 
  takeWhile(compose(startTime, lessThan(endTime)))

const shrinkEvent = (n) => (e) => 
  withConst(duration(e))(d =>
    d <= n ? throwErr(`event duration for ${name(e)} (${d}) must be greater than ${n}`)
    : withConst({...eventData(e)})(eventData => (
        eventData.duration = d - n,
        makeEvent(eventData)(startTime(e))
      ))
  )

const skipWhenOn = 
  compose(
    isOnEvent,
    skipIf
  )

const skip = (times, events) => 
  compose(events, ...times.map(skipWhenOn))

const filterByEventName = (n) => skipIf(e => name(e) === n)

const mergeEventTimes = (e1, e2) =>
  ({ eventData: eventData(e1),
     start: Math.min(startTime(e1), startTime(e2)),
     end:   Math.max(endTime(e1), endTime(e2))
  })

const mergeEvents = (p) =>
  merge(p, mergeEventTimes)

module.exports = {
  makeEvent,
  endTime,
  startTime,
  eventData,
  duration,
  name,
  makeEventsStartingOn,
  toEndTime,
  makeSingleEvent,
  stopOn,
  shrinkEvent,
  skipWhenOn,
  isPastEvent,
  isOnEvent,
  skipWhenOn,
  skip,
  filterByEventName,
  mergeEventTimes,
  mergeEvents
}
