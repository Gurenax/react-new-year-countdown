import React from 'react'
import { GlobalStyle, Container, InnerContainer } from "./styled";
import Countdown from '../Countdown'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <InnerContainer>
          <Countdown
            title='Christmas Countdown 2023'
            eventDateTime='25-12-2022 00:00:00'
            messageLine1="Merry"
            messageLine2="Christmas"
            messageLine4="2022!"
          />

          <Countdown
            title='New Year Countdown 2023'
            eventDateTime='01-01-2023 00:00:00'
            messageLine1="Happy"
            messageLine2="New"
            messageLine3="Year"
            messageLine4="2023!"
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
