const { importScheduleFile } = require('./scheduleFile.js')
const { withConst, trace, compose } = require('./util.js')
const { hour, minute } = require('./time.js')
const { fromList, toList, mapGen, range, bind } = require('./generator.js')
//const { printSequences } = require('./printNewSchedule.js')

const parseBlock = (blockStr) =>
  parseInt(blockStr.split('.')[2])

const throwBadParse = (d) => {
  throw `could not parse ${d}`
}

const blockToTime = (block) => 
  withConst(block % 4)(b => 
    b === 1 ? hour
    : b === 2 ? 2*hour + 30*minute
    : b === 3 ? 2*hour + 45*minute
    : b === 0 ? 15*minute
    : 0
  )

const makeSeq = (name) => (block) => ({
  name,
  duration: blockToTime(block)
})

const lessonToSeq = (lesson) =>
  mapGen(makeSeq(lesson.name))(
    range(parseBlock(lesson.sequence), lesson.duration || 1)
  )

const convertLessons = (json) => 
  toList(bind(fromList(json.lessons))(
    lessonToSeq
  ))

const convert = (json) =>
  console.log(JSON.stringify(convertLessons(json.lessons), null, 2))

/*
importScheduleFile('./sei22.json')
  .then(
    compose(
      convertLessons,
      printSequences
    )
  );
  */

module.exports = {
  convertLessons
}
