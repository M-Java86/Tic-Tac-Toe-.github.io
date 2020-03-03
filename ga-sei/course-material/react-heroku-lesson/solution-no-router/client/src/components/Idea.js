import React from 'react'
import styled from 'styled-components'

const IdeaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  background-color: lightblue;
  
  input {
    background-color: transparent;
    border: none;
    margin-bottom: 10px;
    font-size: 18px;
    
    &:focus {
      outline: none;
    }
  }
  
  textarea {
    background-color: transparent;
    border: none;
    height: 100px;
    
    &:focus {
      outline: none;
    }
  }
`

// Notice that our onChange and onBlur events are using some slightly new syntax:
// They are wrapping their callbacks in a higher-level function, so that we can
// pass the `Idea` into the callback function later on when the event is fired
const Idea = (props) => {
  return (
    <IdeaWrapper>

      <input type="text"
             name="title"
             value={props.idea.title}
             onChange={(event) => props.handleChange(props.idea, event)}
             onBlur={() => {props.updateIdea(props.idea)}}/>

      <textarea name="description"
                value={props.idea.description}
                onChange={(event) => props.handleChange(props.idea, event)}
                onBlur={() => {props.updateIdea(props.idea)}}/>

      <button onClick={() => {props.deleteIdea(props.idea)}}>
        Delete Idea
      </button>

    </IdeaWrapper>
  )
}

export default Idea