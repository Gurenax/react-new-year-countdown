import React from 'react'
import { GlobalStyle, Container, InnerContainer } from "./styled";
import Countdown from '../Countdown'

const App = () => {
  const christmasYear = 2023;
  const newYear = 2024;
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <InnerContainer>
          <Countdown
            title={`Christmas Countdown ${christmasYear}`}
            eventDateTime={`25-12-${christmasYear} 00:00:00`}
            messageLine1="Merry"
            messageLine2="Christmas"
            messageLine4={`${christmasYear}!`}
          />

          <Countdown
            title={`New Year Countdown ${newYear}`}
            eventDateTime={`01-01-${newYear} 00:00:00`}
            messageLine1="Happy"
            messageLine2="New"
            messageLine3="Year"
            messageLine4={`${newYear}!`}
          />
        </InnerContainer>
        
        <a href="https://github.com/Gurenax/react-new-year-countdown" style={{display:'block', marginTop: '20px'}}>
          Fork me on Github
        </a>
      </Container>
    </React.Fragment>
  )
}

export default App
