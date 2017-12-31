import React, { Component } from 'react';
import Countdown from './components/Countdown'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>New Year Countdown</h1>
        <Countdown />
      </div>
    );
  }
}

export default App;
