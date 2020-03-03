const express = require('express')
const Idea = require('../db/models/Idea')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find({}) // Find all of the ideas from the database
    res.json(ideas) // send the ideas back to the client
  } catch (error) {
    console.log(error)
    res.sendStatus(500) // If there is any error, tell the client something went wrong on the server
  }
})

router.post('/', async (req, res) => {
  try {
    const newIdea = await Idea.create({}) // create a new Idea, let Mongoose give the default values
    res.json(newIdea) // Send this new idea back to the client
  } catch (error) {
    console.log(error)
    res.sendStatus(500) // If there is any error, tell the client something went wrong on the server
  }
})

router.delete('/:ideaId', async (req, res) => {
  try {
    await Idea.findByIdAndRemove(req.params.ideaId) // Delete the idea from the database
    res.sendStatus(200) // Send back a status of 200 to tell the client that the delete was successful
  } catch (error) {
    console.log(error)
    res.sendStatus(500) // If there is any error, tell the client something went wrong on the server
  }
})

router.patch('/:ideaId', async (req, res) => {
  try {

    // Update the idea in the database
    const updatedIdea =
      await Idea.findByIdAndUpdate(req.params.ideaId, req.body, {new: true})

    res.json(updatedIdea) // Send the updated idea back to the client
  } catch (error) {
    console.log(error)
    res.sendStatus(500) // If there is any error, tell the client something went wrong on the server
  }
})

module.exports = router