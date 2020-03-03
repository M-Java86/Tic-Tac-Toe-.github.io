import React, { Component } from 'react';


//styling in react, without 'styled-components'
//this is called in-line styles
export class Button extends Component{
  render(){
    const buttonStyles = {
      borderRadius: "5px",
      padding: "15px 25px",
      fontSize: "22px",
      textDecoration: "none",
      margin: "20px",
      color: "#fff",
      position: "relative",
      display: "block",
      margin: "20px auto",
      backgroundColor: "#55acee",
      boxShadow: "0px 5px 0px 0px #3C93D5",
     
    };


    return (
      <button style={buttonStyles}>
        Add
      </button>
    )
  }
}

export default Button;