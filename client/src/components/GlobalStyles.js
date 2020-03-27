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
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px;
    width: 100%;
  }

  button {
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    background-color: transparent;
    color: #636363;
    border: 1px solid #c5986a;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
  }

  input {
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    background-color: transparent;
    color: #636363;
    border: 1px solid #c5986a;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
  }

`;
