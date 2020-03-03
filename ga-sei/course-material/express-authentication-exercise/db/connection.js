const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/queries', {useMongoClient: true})
mongoose.Promise = Promise

module.exports = mongoose
