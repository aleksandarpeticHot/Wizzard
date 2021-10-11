import React from "react"
import styled from 'styled-components'

const StyledNavbar = styled.div`
top: 0;
height: 75px;
background-color: rgb(204, 213, 219);
overflow: hidden;
display: flex;
`

const Navbar = (props) => {

  return <StyledNavbar>
    {props.children}
  </StyledNavbar>
}
export default Navbar