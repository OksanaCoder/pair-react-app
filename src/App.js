import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Warning from './components/WarningSign';
import MyBadge from './components/MyBadge'; //alberto
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <Warning text='This is warning button' />
      <MyBadge />
      <BookList />
    </div>
  );
}

export default App;
