const mongoose = require('./connection')

const querySchema = new mongoose.Schema({
  title: String,
  body: String
})

Query = mongoose.model('Query', querySchema)

module.exports = Query
