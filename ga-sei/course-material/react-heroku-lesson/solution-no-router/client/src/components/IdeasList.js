import React from 'react'
import Idea from './Idea'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid lightgray;
`

const FlexContainerCentered = styled.div`
  display: flex;
  align-items: center;
`

const FlexRowCentered = FlexContainerCentered.extend`
   flex-direction: row;
   flex-wrap: wrap;
`

const IdeasList = (props) => {

  // We are receiving all of the methods each Idea needs as props
  // inside of this component, so we can pass these directly down again
  // by "spreading" the props into each Idea component (using the "spread
  // operator" or `...`

  // We'll pass the `idea` along as well.
  return (
    <Card>
      <FlexRowCentered>
        {
          props.ideas.map((idea) => {
            return (
              <Idea idea={idea} {...props} key={idea._id}/>
            )
          })
        }
      </FlexRowCentered>
    </Card>
  )
}

export default IdeasList