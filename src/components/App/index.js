import React from 'react'
import { GlobalStyle, Container } from "./styled";
import Countdown from '../Countdown'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Countdown
          title={'New Year Countdown to 2022'}
          eventDateTime='01-01-2022 00:00:00'
          messageLine1="Happy"
          messageLine2="New"
          messageLine3="Year"
          messageLine4="2022!"
        />
        
        <a href="https://github.com/Gurenax/react-new-year-countdown" style={{display:'block', marginTop: '20px'}}>
          Fork me on Github
        </a>
      </Container>
    </React.Fragment>
  )
}

export default App
