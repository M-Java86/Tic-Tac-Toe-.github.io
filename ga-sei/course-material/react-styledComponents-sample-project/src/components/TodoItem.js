import React from 'react';
import styled from 'styled-components'

const UserCard = styled.div`
top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 10px;
    width: 30vh;
    height: 30vh;
    background-color: #ffff88;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    z-index: 999;
    
`;

const Holder = styled.div`
border-radius: 50%
height: 20px;
width 20px;
background-color:#d11a2a;
box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`


 class TodoItem extends React.Component {
  render() {
    return (
        <UserCard>
            <Holder>
                </Holder>
      <div>
        <p>{this.props.author}</p>
        <p>{this.props.description}</p>
      </div>
      </UserCard>
    )


  }

}


export default TodoItem;