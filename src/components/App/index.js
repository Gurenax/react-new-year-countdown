import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { GlobalStyle, Container } from "./styled";
import StyledText from "../StyledText";
// import './App.css'


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
  const [isNewYear, setIsNewYear] = useState(false);
  const [monthsText, setMonthsText] = useState('');
  const [daysText, setDaysText] = useState('');
  const [hoursText, setHoursText] = useState('');
  const [minutesText, setMinutesText] = useState('');
  const [secondsText, setSecondsText] = useState('');

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
        setInterval(() => {
          if (duration.asMilliseconds() > 0) {
            duration = moment.duration(
              duration.asMilliseconds() - interval,
              'milliseconds'
            )
  
            // Format the months/days/hours/mins/secs with labels
            setMonthsText(formatCountdownTextLabel(duration.months(), ' months', true));
            setDaysText(formatCountdownTextLabel(duration.days(), ' days', true));
            setHoursText(formatCountdownTextLabel(duration.hours(), ' hours', true));
            setMinutesText(formatCountdownTextLabel(duration.minutes(), ' minutes', true));
            setSecondsText(formatCountdownTextLabel(duration.seconds(), ' seconds', false));
          } else {
            // setCountdownText('Happy New Year!');
            setIsNewYear(true);
          }
        }, interval);
      } else {
        // setCountdownText('Happy New Year!');
        setIsNewYear(true);
      }
    }

    // Call the timer function
    timer(newYear)
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <h1>New Year Countdown to {newYear}</h1>
        {
          !isNewYear ? (
            <React.Fragment>
              <StyledText backgroundColour="black" textColour="#FFFF33">
                {monthsText}
              </StyledText>
              <StyledText backgroundColour="black" textColour="#00FF33">
                {daysText}
              </StyledText>
              <StyledText backgroundColour="black" textColour="#099FFF">
                {hoursText}
              </StyledText>
              <StyledText backgroundColour="black" textColour="#FF00CC">
                {minutesText}
              </StyledText>
              <StyledText backgroundColour="black" textColour="#CC00FF">
                {secondsText}
              </StyledText>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <StyledText backgroundColour="black" textColour="#FFFF33">
                Happy
              </StyledText>
              <StyledText backgroundColour="black" textColour="#FF00CC">
                New
              </StyledText>
              <StyledText backgroundColour="black" textColour="#099FFF">
                Year
              </StyledText>
              <StyledText backgroundColour="black" textColour="#CC00FF">
                {newYear}
              </StyledText>
            </React.Fragment>
          )
        }
        
        <a href="https://github.com/Gurenax/react-new-year-countdown" style={{display:'block', marginTop: '20px'}}>
          Fork me on Github
        </a>
      </Container>
    </React.Fragment>
  )
}

export default App
