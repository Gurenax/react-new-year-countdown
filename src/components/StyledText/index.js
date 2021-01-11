import React from "react";
import { Container } from "./styled";

const StyledText = ({ children, backgroundColour, textColour }) => {
  return (
    <Container backgroundColour={backgroundColour} textColour={textColour}>
      { children }
    </Container>
  )
};

export default StyledText;