import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto");

  body {
    color: #c5986a;
    font-family: Montserrat, sans-serif;
    overflow-x:hidden;
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
