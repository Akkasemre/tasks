import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import menu from "./links.json"
import { Link, useLocation } from 'react-router-dom'
import "./links.scss"


const NavBar = () => {
  const {pathname} = useLocation();
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
    <Container>
      <Navbar.Brand href="/">HomeWork</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {menu.map((item,index)=>
            <Nav.Link active={pathname === item.link} eventKey={index} as={Link} to={item.link}>{item.title}</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar