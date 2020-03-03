import React from 'react';
import TodoItem from './TodoItem'
import styled from 'styled-components';
import Board from './img/bulletin.png'

const UserContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding-top: 50px;
`

const Background = styled.div`
background: url(${Board}) center no-repeat;
background-size: cover;
min-width: 100vw;
min-height: 100vh;
z-index: -999;
margin-top: 20px;
`




export class TodoList extends React.Component {
    render() {
        return (
            <div>
                <Background>
                <UserContainer>
                {this.props.list.map((item, index) => {
                    const { author, description } = item
                    return (<TodoItem key={index} author={author} description={description} />)
                })
                }
                </UserContainer>
                </Background>
            </div>
        )


    }

}


export default TodoList;