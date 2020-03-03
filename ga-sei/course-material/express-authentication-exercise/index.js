const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
const methodOverride = require('method-override')
const app = express()

const queriesController = require('./controllers/queries')

app.set('port', process.env.PORT || 7777)
app.set('view engine', 'hbs')

app.use('/assets', express.static('public'))
app.use(parser.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.render('home')
})

app.use('/queries', queriesController)

app.listen(app.get('port'), () => {
  console.log('Locked and loaded on ' + app.get('port'))
})
