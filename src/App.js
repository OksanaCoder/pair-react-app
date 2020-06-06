import React,  { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Warning from './components/WarningSign';

import Book from './components/SingleBook';
import history from './jsons/history.json';
import fantasy from './jsons/fantasy.json';
import romance from './jsons/romance.json';
import horror from './jsons/horror.json';
import scifi from './jsons/scifi.json';
import { Dropdown } from 'react-bootstrap';
// import MyBadge from './components/MyBadge';
import Comment from './components/Comment';
import NavBar from './components/Navbar';
import CarouselMain from './components/Carousel';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: null
    }

  }


  render() {
 
    

  return (
    <div className="App">
      <NavBar />
      <CarouselMain />
    
  
      <div className ='container'>
      <Dropdown className='drop-select m-4 text-left'>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
         
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => this.setState({genre: 'history'})}>history</Dropdown.Item>
          <Dropdown.Item onClick={() => this.setState({genre: 'fantasy'})}>fantasy</Dropdown.Item>
          <Dropdown.Item onClick={() => this.setState({genre: 'romance'})}>romance</Dropdown.Item>
          <Dropdown.Item onClick={() => this.setState({genre: 'horror'})}>horror</Dropdown.Item>
          <Dropdown.Item onClick={() => this.setState({genre: 'scifi'})}>scifi</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
      {this.state.genre === null && (
        <div>
      <Book books={history.slice(0,6)} />
      <Book books={fantasy.slice(0,6)}/>
      <Book books={romance.slice(0,6)}/>
      <Book books={horror.slice(0,6)}/>
      <Book books={scifi.slice(0,6)}/> 
      </div>
      )
  }
  {
    this.state.genre === 'history' && (<Book books={history.slice(0,4)} />   )
    
  }

  
  {
    this.state.genre === 'fantasy' && (<Book books={fantasy.slice(0,4)} />)
  }
  {
    this.state.genre === 'romance' && (<Book books={romance.slice(0,4)} />)
  }
  {
    this.state.genre === 'horror' && (<Book books={horror.slice(0,4)} />)
  }
  {
    this.state.genre === 'scifi' && (<Book books={scifi.slice(0,4)} />)
  }
  <Comment />
  <Footer />
    </div>
  )
  }
}

export default App;
