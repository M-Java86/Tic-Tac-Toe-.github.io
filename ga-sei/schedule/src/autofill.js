const { fixed, mapWith, trace, flip, reader, compose, withConst, lessThan } = require('./util.js')
const { peeked, constGen, fromList, andThen, foldGen, isDone, next, peek } = require('./generator.js')
const { endTime, startTime, toEndTime, shrinkEvent, makeEvent, isPastEvent } = require('./events.js')
const { timeAsDateStr } = require('./time.js')

//given a peeked generator of planned events and a function to generate the next fill 
//and the current time: return a generator of the next set of events
const fillEvent = (planned) => (f) => (makeEvent, t) =>
  withConst(makeEvent(t))(event =>
    isDone(peek(planned)) ? constGen(event)
    : withConst(startTime(peek(planned)))(plannedStart =>
        isPastEvent(t, peek(planned)) 
        || startTime(event) >= plannedStart ? andThen(constGen(peek(planned)), f()(makeEvent, Math.max(t, endTime(next(planned)))))
      : endTime(event) <= plannedStart ? constGen(event)
      : andThen(
          constGen(shrinkEvent(endTime(event) - plannedStart)(event)),
          constGen(peek(planned)),
          f()(compose(makeEvent, shrinkEvent(plannedStart - startTime(event))),
            endTime(next(planned))
          )
        )
      )
  )

const fillEventWith = (fillWith) =>
  foldGen((f, e) => fillWith(f, endTime(e)))

const fillPlanned =
  compose(
    fillEvent,
    fixed,
    fillEventWith,
    flip,
    f => compose(toEndTime, f)
  )

const autoFillEvents = (f) => (planned) =>
  compose(
    mapWith(compose(makeEvent, g => compose(f, g))),
    fromList,
    flip(reader(
      compose(planned, peeked),
      flip(fillPlanned)
    ))
  )

module.exports = {
  autoFillEvents
}
