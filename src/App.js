import React, { Component } from 'react';
import Countdown from './components/Countdown'
import './App.css';

import moment from 'moment'

// Formats digits to two digits (e.g. 05)
const formatTimerDigit = (digit) => {
  return digit > 9 ? digit : '0' + digit
}

class App extends Component {
  state = {
    countdownText: 'Hello'
  }


  timer = endTime => {
    const eventTime = moment(endTime, 'DD-MM-YYYY HH:mm:ss').unix()
    const currentTime = moment().unix()
    const diffTime = eventTime - currentTime
    let duration = moment.duration( diffTime * 1000, 'milliseconds' )
    const interval = 1000

    if( diffTime > 0 ) {
      setInterval( () => {
        duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds')
        const hours = formatTimerDigit(duration.hours())
        const mins = formatTimerDigit(duration.minutes())
        const secs = formatTimerDigit(duration.seconds())
        
        this.setState({ countdownText: hours + ":" + mins + ":" + secs })
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
    // Call the timer function
    this.timer('01-01-2018 00:00:00')
  }
}

export default App;
