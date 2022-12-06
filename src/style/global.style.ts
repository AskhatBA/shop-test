import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.Montserrat};
    background: ${(props) => props.theme.palette.background};
  }
  
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }

  input, textarea, button {
    outline: transparent;
    background: transparent;
    border: none;
    resize: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
