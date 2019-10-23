import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tooltip from './components/tooltips';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Tooltip 
          defaultText="Hi"
          tooltipsText="I'm here"
          position="top"
        ></Tooltip>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
