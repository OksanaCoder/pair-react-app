import React, { Component } from 'react';
import { Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap';
import MyBadge from './MyBadge';
import Book from './SingleBook';

class NavBar extends Component{
    state = {
        search: ''
    }
    changeHandler = (event) => {
        this.setState({
            search: event.target.value
        });
    }
    handleSubmit = (event) => {
       
        alert('Your fave book is: ' + this.state.search);
        event.preventDefault();
    }
    render () {

    
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
    <Form inline onSubmit={this.handleSubmit}>
      <FormControl 
      type="text" 
      placeholder="Search" 
      className="mr-sm-2" 
      value={this.state.search}
      onChange={this.changeHandler}
      />
      <Button variant="outline-info" onClick={this.handleSubmit}>Search</Button>
    </Form>
  </Navbar>

</>
    )
}
}

export default NavBar;