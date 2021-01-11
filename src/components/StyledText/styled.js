import styled from "styled-components";

export const Container = styled.h2`
  display: block;
  padding: 0;
  margin: 0;
  ${({ backgroundColour }) => `${getColour(backgroundColour, 'background')}`}
  ${({ textColour }) => `${getColour(textColour, 'text')}`}
`;

const getColour = (inputColour, type) => {
  if (!inputColour) {
    return '';
  }
  switch (type) {
    case 'background':
      return `
        background-color: ${inputColour};
      `;
    case 'text':
      return `
        color: ${inputColour};
      `;
    default:
      return '';
  }
}