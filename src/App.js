import React, { Component } from 'react';
import Countdown from './components/Countdown'
import './App.css';

import moment from 'moment'

// const countdownTimer = () => {
  

// }

class App extends Component {
  state = {
    countdownText: 'Hello'
  }


  timer = () => {
    const eventTime = moment('01-01-2018 00:00:00', 'DD-MM-YYYY HH:mm:ss').unix()
    const currentTime = moment().unix()
    const diffTime = eventTime - currentTime
    let duration = moment.duration( diffTime * 1000, 'milliseconds' )
    const interval = 1000

    if( diffTime > 0 ) {

      setInterval( () => {
        duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds')
        this.setState({ countdownText: duration.hours() + ":" + duration.minutes() + ":" + duration.seconds() })
      }, interval)
    }
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

  componentDidMount() {
    this.timer()
  }
}

export default App;
