import React, { Component } from 'react';
import Countdown from './components/Countdown'
import './App.css';

class App extends Component {
  state = {
    countdownText: 'Hello'
  }

  render() {
    const { countdownText } = this.state

    return (
      <div className="App">
        <h1>New Year Countdown</h1>
        <Countdown text={countdownText}/>
      </div>
    );
  }
}

export default App;
