import React, { Component } from 'react'
import Countdown from './components/Countdown'
import './App.css'

import moment from 'moment'

// Formats digits to two digits (e.g. 05)
const formatTimerDigit = digit => {
  return digit > 9 ? digit : '0' + digit
}

// Format the countdownText to include labels and set to blank when value is 0
const formatCountdownTextLabel = (digit, label) => {
  return digit > 0 ? formatTimerDigit(digit) + label : ''
}

class App extends Component {
  state = {
    newYear: '2019',
    countdownText: ''
  }

  timer = newYear => {
    const eventTime = moment(
      `01-01-${newYear} 00:00:00`,
      'DD-MM-YYYY HH:mm:ss'
    ).unix()
    const currentTime = moment().unix()
    const diffTime = eventTime - currentTime
    let duration = moment.duration(diffTime * 1000, 'milliseconds')
    const interval = 1000

    if (diffTime > 0) {
      setInterval(() => {
        duration = moment.duration(
          duration.asMilliseconds() - interval,
          'milliseconds'
        )

        // Format the months/days/hours/mins/secs with labels
        const months = formatCountdownTextLabel(duration.months(), 'mo ')
        const days = formatCountdownTextLabel(duration.days(), 'd ')
        const hours = formatCountdownTextLabel(duration.hours(), 'h ')
        const mins = formatCountdownTextLabel(duration.minutes(), 'm ')
        const secs = formatCountdownTextLabel(duration.seconds(), 's ')

        this.setState({ countdownText: months + days + hours + mins + secs })
      }, interval)
    } else {
      this.setState({ countdownText: 'Happy New Year!' })
    }
  }

  render() {
    const { newYear, countdownText } = this.state

    return (
      <div className="App">
        <h1>New Year Countdown to {newYear}</h1>
        <Countdown text={countdownText} />
        <a href="https://github.com/Gurenax/react-new-year-countdown">
          Fork me on Github
        </a>
      </div>
    )
  }

  componentDidMount() {
    // Get the new year from state
    const { newYear } = this.state
    // Call the timer function
    this.timer(newYear)
  }
}

export default App
