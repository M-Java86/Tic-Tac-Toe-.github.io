const express = require('express')
const router = express.Router()
const Query = require('../db/schema')

// GET /queries
router.get('/', (req, res) => {
  Query.find({})
    .catch(err => console.log('Error in query index'))
    .then(queries => res.render('queries/index', {queries}))
})

//GET /queries/new
router.get('/new', (req, res) => {
  res.render('queries/new')
})

// POST /queries
router.post('/', (req, res) => {
  Query.create({title: req.body.title, body: req.body.body})
    .catch(err => console.log('Error in query post'))
    .then(() => res.redirect('/queries'))
})

// GET /queries/:title
router.get('/:id', (req, res) => {
  Query.findOne({_id: req.params.id})
    .catch(err => console.log('Error searching for query'))
    .then(query => res.render('queries/show', {query}))
})

// GET /queries/edit/:title
router.get('/edit/:id', (req, res) => {
  Query.findOne({_id: req.params.id})
    .catch(err => console.log('Error searching for query on edit page'))
    .then(query => res.render('queries/edit', {query}))
})

// PUT /queries/:title
router.put('/:id', (req, res) => {
  Query.findOneAndUpdate(
    {_id: req.params.id},
    {title: req.body.title, body: req.body.body},
    {new: true})
    .catch(err => console.log(err))
    .then(query => res.redirect(`/queries/${query.id}`))
})

router.delete('/:id', (req, res) => {
  Query.findOneAndRemove({_id: req.params.id})
    .catch(err => console.log('error on deletion'))
    .then(() => {
      res.redirect('/queries')
    })
})

module.exports = router
