const ical = require('ical-generator')
const { reader, trace, withConst } = require('./util.js')
const { startTime, endTime, name } = require('./events.js')
const { consume } = require('./generator.js')
const { timeAsLocaleDate } = require('./time.js')

const toICalEvent = (cal) => (event) =>
  cal.createEvent({ 
    start: timeAsLocaleDate(startTime(event)),
    end: timeAsLocaleDate(endTime(event)),
    summary: name(event),
  })

const toICal = (name) => (events) =>
  withConst(ical({name, floating: true }))(cal => (
    consume(toICalEvent(cal))(events),
    console.log(cal.toString())
  ))

module.exports = {
  toICal
}
