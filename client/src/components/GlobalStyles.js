import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    color: #c5986a;
    font-family: Montserrat, sans-serif;
    overflow-x:hidden;
    height: 100%;
    width: 100vw;
    margin: 0px;
  }

  button {
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    background-color: transparent;
    color: #636363;
    border: 1px solid #c5986a;
    padding: 5px 10px 5px 10px;
    margin: 5px;
    font-size: 16px;
  }

  input {
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    background-color: transparent;
    color: #636363;
    border: 1px solid #c5986a;
    padding: 5px 10px 5px 10px;
    margin: 5px;
    font-size: 16px;
  }

`;
