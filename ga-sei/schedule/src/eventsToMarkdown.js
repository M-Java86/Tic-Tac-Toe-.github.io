const { mapGen, print, andThen, constGen } = require('./generator.js')
const { timeAsLocaleDateStr } = require('./time.js')
const { compose } = require('./util.js')

const toMarkdownRows = mapGen(({eventData: {name}, start, end}) =>
  `${name} | ${timeAsLocaleDateStr(start)} | ${timeAsLocaleDateStr(end)}`
)

const toMarkdownTable = (es) =>
  andThen(
    constGen(`Name | Start | End\n--- | --- | ---`),
    toMarkdownRows(es)
  )

const eventsToMarkdownTable = compose(toMarkdownTable, print)

module.exports = {
  eventsToMarkdownTable
}
