const { filter } = require('./generator.js')
const { name, mergeEvents, startTime, endTime } = require('./events.js')
const { trace, compose, or, reader, withConst } = require('./util.js')
const { isSameDay } = require('./time.js')

const startsWithProject = (s) => s.split('-').shift().toLowerCase() === 'project'

const endsInPresentations = (s) => s.split('-').pop().toLowerCase() === 'presentations'

const nameIsOutcomes = (s) => s.toLowerCase() === 'outcomes'

const isProject = 
  compose(
    name,
    startsWithProject
  )

const isPresentation = 
  compose(
    name,
    endsInPresentations
  )

const isOutcomes = 
  compose(
    name,
    nameIsOutcomes
  )

const isOverview = 
  reader(
    isProject,
    compose(isPresentation, or),
    compose(isOutcomes, or)
  )

const makeCourseOverview = 
  compose(
    filter(isOverview),
    mergeEvents((e1, e2) => 
      name(e1) === name(e2)
      && isSameDay(endTime(e1), startTime(e2))
    )
  )

module.exports = {
  makeCourseOverview
}
