const { generateScheduleFromJSONFile } = require('./parseSchedule.js')
const { importJSONFile, compose } = require('./util.js')
const { eventsToHtml } = require('./eventsToHtml.js')
const { eventsToMarkdownTable } = require('./eventsToMarkdown.js')
const { toICal } = require('./ical.js')
const { makeCourseOverview } = require('./courseoverview.js')

const outputType = () => process.argv[2]

const configFilePath = () => process.argv[3]

const configFileName = () => configFilePath().replace(/.json/, '')

const toOutput = (type) =>
  type.match(/markdown|md/i) ?  eventsToMarkdownTable
  : type.match(/html/i) ?  eventsToHtml
  : type.match(/ical|calendar|ics/i) ?  toICal(configFileName())
  : type.match(/overview/i) ? compose(makeCourseOverview, toICal(configFileName()))
  : throwErr(`invalid output type ${type}`)

const makeScheduleFromCli = 
  generateScheduleFromJSONFile(configFilePath())
  .then(toOutput(outputType()))
