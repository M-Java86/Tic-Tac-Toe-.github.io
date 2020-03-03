const mongoose = require('mongoose')
const { IdeaSchema } = require('../schema')

const Idea = mongoose.model('Idea', IdeaSchema)

module.exports = Idea