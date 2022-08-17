import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  root, *, html, body {
    --preto: #0a0708;
    --cinza-escuro: #333333;
    --cinza: #676765;
    --verde-claro: #9acf42;
    --verde: #53b350;
    --cinza-claro #c3c5c9;
    --bege: #f7f5f6;
    border: 0;
    color: #0a0708;
    font-family: 'Blinker', sans-serif;
    margin: 0;
    max-width: 100%; 
    padding: 0;
	  vertical-align: baseline;
    width: 100vw;
  }

  header {
    background: --preto;
  }
`;

export const Header = styled.header`
  background-color: var(--preto);
  opacity: 80%;
  position: fixed;
  z-index: 999;
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 60px;
  padding-left: 20px;
  width: 40px;
`;
