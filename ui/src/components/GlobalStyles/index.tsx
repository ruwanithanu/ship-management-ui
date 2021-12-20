import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
    font-size: 14px;
  }
`
export default GlobalStyle;
