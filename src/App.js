import React, { useState, useEffect } from 'react'
import Countdown from './components/Countdown'
import './App.css'

import moment from 'moment'

// Formats digits to two digits (e.g. 05)
const formatTimerDigit = digit => {
  return digit > 9 ? digit : '0' + digit
}

// Format the countdownText to include labels and set to blank when value is 0 (strict)
// When strict is true, set the value to blank when digit is 0
const formatCountdownTextLabel = (digit, label, strict) => {
  if( strict ) return digit > 0 ? formatTimerDigit(digit) + label : ''
  else return formatTimerDigit(digit) + label
}

const App = () => {
  const newYear = '2022';
  const [countdownText, setCountdownText] = useState('');

  useEffect(() => {
    const timer = newYear => {
      const eventTime = moment(
        `01-01-${newYear} 00:00:00`,
        'DD-MM-YYYY HH:mm:ss'
      ).unix()
      const currentTime = moment().unix()
      const diffTime = eventTime - currentTime
      let duration = moment.duration(diffTime * 1000, 'milliseconds')
      const interval = 1000
  
      if (diffTime > 0) {
        const id = setInterval(() => {
          if (duration.asMilliseconds() > 0) {
            duration = moment.duration(
              duration.asMilliseconds() - interval,
              'milliseconds'
            )
  
            // Format the months/days/hours/mins/secs with labels
            const months = formatCountdownTextLabel(duration.months(), 'mo ', true)
            const days = formatCountdownTextLabel(duration.days(), 'd ', true)
            const hours = formatCountdownTextLabel(duration.hours(), 'h ', true)
            const mins = formatCountdownTextLabel(duration.minutes(), 'm ', true)
            const secs = formatCountdownTextLabel(duration.seconds(), 's ', false)
  
            setCountdownText(months + days + hours + mins + secs);
          } else {
            setCountdownText('Happy New Year!');
          }
        }, interval);
      } else {
        setCountdownText('Happy New Year!');
      }
    }

    // Call the timer function
    timer(newYear)
  }, []);

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

export default App
