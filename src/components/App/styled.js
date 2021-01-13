import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #000000;
    color: #ffffff;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;

  a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      color: dodgerblue;
    }
  }
`;