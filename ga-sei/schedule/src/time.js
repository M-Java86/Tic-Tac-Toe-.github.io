const { withConst, trace, compose } = require('./util.js')

const time = (...args) => new Date(...args).getTime();

const dayOfWeek = (t) => timeAsDate(t).getUTCDay()*day

const timeOfDay = (t) => withConst(timeAsDate(t))(d =>
  d.getUTCHours()*hour
  + d.getUTCMinutes()*minute
  + d.getUTCMilliseconds() 
)

const second = 1000;
const minute = 60*second;
const hour = 60*minute;
const day = 24*hour;
const week = 7*day;

const sunday    = 0
const monday    = day
const tuesday   = 2*day
const wednesday = 3*day
const thursday  = 4*day
const friday    = 5*day
const saturday   = 6*day

const timeAsDate = (t) => new Date(t)

const isSameDay = (t1, t2) =>
  withConst(timeAsDate(t1))(d1 =>
  withConst(timeAsDate(t2))(d2 =>
    d1.getUTCFullYear() === d2.getUTCFullYear()
    && d1.getUTCMonth() === d2.getUTCMonth()
    && d1.getUTCDate() === d2.getUTCDate()
  ))

const timeAsLocaleDate = (t) => 
  withConst(new Date(t))(d => (
    d.setTime(d.getTime() + d.getTimezoneOffset()*minute),
    d
  ))

const timeAsLocaleDateStr = 
  compose(
    timeAsLocaleDate,
    d => d.toLocaleString()
  )

const timeAsDateStr = 
  compose(
    timeAsDate,
    d => d.toUTCString()
  )

const isWeekend = (t) => 
  withConst(dayOfWeek(t))(d =>
    d === sunday || d === saturday 
  )

const isAfterHours =
  compose(
    timeOfDay,
    t => t < 9*hour || 17*hour <= t
  )

const withOffset = (p) => (diff) =>
  diff + (diff < 0 ? p : 0)

const of = (p) => (t) => (time) => 
  time + withOffset(p)(
      p === week ? (t - (dayOfWeek(time) + timeOfDay(time)))
    : p === day  ? (t - timeOfDay(time))
    : (t - time) % p
  )

const first = withConst

const shiftIf = (p, n) => (t) => p(t) ? t + n : t

const shiftWeekends = shiftIf(isWeekend, 2*day)

const shiftAfterHours = shiftIf(isAfterHours, 16*hour)

const shiftBusinessHours = compose(shiftAfterHours, shiftWeekends)


const fromIntStr = (d) =>
  compose(
    Number.parseInt,
    t => t >= 0 ? d*t : throwErr(`${d} must be a valid int >= 0`)
  )


const fromHourStr = fromIntStr(hour)

const fromMinuteStr = fromIntStr(minute)

const fromWeekdayStr = (str) => 
  ({ 'sunday': sunday,
    'monday': monday,
    'tuesday': tuesday,
    'wednesday': wednesday,
    'thursday': thursday,
    'friday': friday,
    'saturday': saturday,
  })[str.toLowerCase()]

const fromTimeStr = (s) =>
  withConst(s.split(':'))(ts => 
    ts.length == 1 ? time(ts[0])
    : ts[0][0].match(/[smtwf]/) ? fromWeekdayStr(ts[0]) + fromHourStr(ts[1])+fromMinuteStr(ts[2])
    : fromHourStr(ts[0])+fromMinuteStr(ts[1])
  )

module.exports = {
  time,
  day,
  dayOfWeek,
  hour,
  isWeekend,
  minute,
  second,
  timeAsDate,
  timeAsDateStr,
  timeAsLocaleDate,
  timeAsLocaleDateStr,
  shiftWeekends,
  shiftBusinessHours,
  week,
  first,
  of,
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  fromTimeStr,
  isAfterHours,
  isSameDay
}
