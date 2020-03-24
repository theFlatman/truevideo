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


`;
