import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: #FFB6C1;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  display: block;
  margin: 0 auto;
  &:hover{
    background-color: #6FC6FF
  }
`;

const Delete = styled(Button)`
background-color: #d11a2a;
margin: 20px auto;
`



class ClickMe extends Component{
  render(){
    return (
        <div>
      <Button>
        Add Sticky
      </Button>
      <Delete>
          Remove
      </Delete>
      </div>
    )
  }
}
export default ClickMe;