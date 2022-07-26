import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  root, *, html, body {
    border: 0;
    margin: 0;
    max-width:100%; 
    padding: 0;
    font: inherit;
	  vertical-align: baseline;
    width: 100vw;
  }
`