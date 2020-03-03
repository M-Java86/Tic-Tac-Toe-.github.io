const Query = require('./schema')
seedData = require('./seed-data.json')

console.log('On Seed page')

Query.remove({})
  .then(seedData.forEach((question) => {
    Query.create({title: question.title, body: question.body}, (err, query) => {
      err ? console.log(err) : console.log(query)
    })
  }))
  .catch(err => console.log('Error on removing queries!'))
