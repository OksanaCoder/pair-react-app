import React, { Component } from 'react';
import { Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap';
import MyBadge from './MyBadge';

const NavBar = () => {
    return (
<>
  <Navbar className='nav-bg'>
    <Navbar.Brand href="#home" className="d-flex align-items-center text-white">
        <img src="https://cdn0.iconfinder.com/data/icons/education-148/595/SVG-EDUCATION-11-512.png" className='navLogo'/>
   Wise up
    </Navbar.Brand>
    <Nav className="mr-auto d-flex align-items-center">
      <Nav.Link href="#" className='text-white'>Home</Nav.Link>
      <Nav.Link href="#" className='text-white'>Cart
      <MyBadge />
      </Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

</>
    )
}

export default NavBar;