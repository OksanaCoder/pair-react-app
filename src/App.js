import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Warning from './components/WarningSign';
import Book from './components/SingleBook';
import data from './jsons/history.json';

function App() {
  return (
    <div className="App">
      <Warning text='This is warning button' />
      <Book books={data}/>
    </div>
  );
}

export default App;
