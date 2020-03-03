import React, { Component } from 'react'
import axios from 'axios'

import IdeasList from './IdeasList'
import ButtomPrimary from './styled_components/ButtonPrimary'

class IdeaPage extends Component {

  // We'll set up the ideas array as an empty array to begin with
  state = {
    ideas: []
  }

  async componentWillMount () {
    const response = await axios.get('/api/ideas') // When the page loads, grab all ideas from the database
    this.setState({ideas: response.data}) // Put these ideas on the state, so they will render
  }

  createIdea = async () => {
    const response = await axios.post(`/api/ideas`) // Ask the server to create a new idea in the database
    const newIdea = response.data // Grab the new idea from the server

    const newIdeas = [...this.state.ideas] // Copy the old ideas list into a new one
    newIdeas.unshift(newIdea) // This will add the new Idea to the beginning of the array
    this.setState({ideas: newIdeas}) // update the state with the new ideas list
  }

  deleteIdea = async (idea) => {
    try {
      await axios.delete(`/api/ideas/${idea._id}`) // Ask the server to delete this idea

      const indexToDelete = this.state.ideas.indexOf(idea) // Determine where in our ideas array it lived
      const newIdeas = [...this.state.ideas] // copy the old ideas list into a new one
      newIdeas.splice(indexToDelete, 1) // remove the idea we deleted from this new array

      // update the state with our new ideas list, so the deleted
      // idea will no longer show up on the screen
      this.setState({ideas: newIdeas})
    } catch (error) {
      console.log(error)
    }
  }

  //We need to pass in multiple arguments here.  The first is the object of the specific idea that is being changed.
  //And the event object is the special event listener object that has information about the value and name
  handleChange = (idea, event) => {
    const updatedIdeas = [...this.state.ideas] //Here we use the spread operator to clone the array

    const ideaToUpdate = updatedIdeas.find((newIdea) => {
      return newIdea._id === idea._id
    })

    //Here we are using bracket syntax instead of dot-notation to transform a specific property
    //More info on bracket syntax here
    //https://medium.com/@prufrock123/js-dot-notation-vs-bracket-notation-797c4e34f01d
    ideaToUpdate[event.target.name] = event.target.value

    // update the state with our updated ideas
    this.setState({ideas: updatedIdeas})
  }

  updateIdea = async (idea) => {
    try {

      await axios.patch(`/api/ideas/${idea._id}`, idea) // ask the server to update the idea in the database

      // We don't need to do anything else here, because the state was already
      // updated by our handleChange method

    } catch (error) {
      console.log(error)
    }
  }

  render () {
    return (
      <div>

        <div>
          <h1>Idea Board</h1>
          <ButtomPrimary onClick={this.createIdea}>New Idea</ButtomPrimary>
        </div>

        <IdeasList ideas={this.state.ideas}
                   handleChange={this.handleChange}
                   updateIdea={this.updateIdea}
                   deleteIdea={this.deleteIdea}/>

      </div>
    )
  }
}

export default IdeaPage
