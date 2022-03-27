import {createGlobalStyle} from "styled-components";
import Fatura from "../../assets/fonts/futura.woff2";
import FaturaBlack from "../../assets/fonts/FuturaBold.woff2"

export const GlobalStyle = createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --blue: #1929CB;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    color: black;
  }

  body, input, textarea, select, button {
    font: 500 1rem "Futura";
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  @font-face {
    font-family: 'Futura';
    src: url(${FaturaBlack}) format('woff2');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Futura';
    src: url(${Fatura}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
`