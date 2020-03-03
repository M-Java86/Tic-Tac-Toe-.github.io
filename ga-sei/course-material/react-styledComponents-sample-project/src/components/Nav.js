import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
min-width: 100vw;
min-height: 10vh;
background: linear-gradient(to right, #C4E0E5, #4CA1AF);
align-items:center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

class PageHeader extends Component{
render(){
    return(
    <Nav>
        </Nav>
    )
}
}

export default PageHeader;