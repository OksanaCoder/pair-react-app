import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Warning from './components/WarningSign';

import Book from './components/SingleBook';
import data from './jsons/history.json';

import MyBadge from './components/MyBadge'; //alberto
import BookList from './components/BookList';


function App() {
  return (
    <div className="App">
      <Warning text='This is warning button' />

      <Book books={data}/>

      <MyBadge />
      <BookList />

    </div>
  );
}

export default App;
