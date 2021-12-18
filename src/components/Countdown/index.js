import React from "react";
import { Container } from "./styled";
import StyledText from "../StyledText";

const Countdown = ({
  title,
  months,
  days,
  hours,
  minutes,
  seconds,
  isDateTimeMet,
  messageLine1,
  messageLine2,
  messageLine3,
  messageLine4,
}) => (
  <Container>
    <h1>{title}</h1>
    {!isDateTimeMet ? (
      <React.Fragment>
        <StyledText backgroundColour="black" textColour="#FFFF33">
          {months}
        </StyledText>
        <StyledText backgroundColour="black" textColour="#00FF33">
          {days}
        </StyledText>
        <StyledText backgroundColour="black" textColour="#099FFF">
          {hours}
        </StyledText>
        <StyledText backgroundColour="black" textColour="#FF00CC">
          {minutes}
        </StyledText>
        <StyledText backgroundColour="black" textColour="#CC00FF">
          {seconds}
        </StyledText>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <StyledText backgroundColour="black" textColour="#FFFF33">
          {messageLine1}
        </StyledText>
        <StyledText backgroundColour="black" textColour="#FF00CC">
          {messageLine2}
        </StyledText>
        <StyledText backgroundColour="black" textColour="#099FFF">
          {messageLine3}
        </StyledText>
        <StyledText backgroundColour="black" textColour="#CC00FF">
          {messageLine4}
        </StyledText>
      </React.Fragment>
    )}
  </Container>
);

export default Countdown;
