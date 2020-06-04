import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Warning from './components/WarningSign';

function App() {
  return (
    <div className="App">
      <Warning text='This is warning button' />
    </div>
  );
}

export default App;
