const { compose, mapOver, mapWith, flip, suspend, reader, withConst } = require('./util.js')
const { peeked, cycle, inOrder, peek, takeWhilePeeked, runConstantly } = require('./generator.js')
const { endTime } = require('./events.js')

const orderByStart = (a,b) => Math.sign(a.start - b.start)

const stopOnPeeked = (endTime) =>
  takeWhilePeeked(x => x.start <= endTime)

const startPeekedEventsOn =
  flip(compose(
    withConst,
    f => compose(f, peeked),
    mapWith
  ))

const getLatestTime =
  compose(
    mapWith(compose(peek, endTime)),
    ets => Math.max(...ets)
  )

const tickUntil = (gs) =>
  compose(
    stopOnPeeked,
    mapOver(gs),
    cycle,
    inOrder(orderByStart)
  )

const joinSchedules = (events) =>
  compose(
    startPeekedEventsOn(events),
    suspend(reader(
      getLatestTime, 
      tickUntil
    )),
    runConstantly,
  )

module.exports = {
  joinSchedules
}
