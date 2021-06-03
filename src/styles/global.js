import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }
  body{
    overflow: visible;
  }

  body, input, button {
    font: 14px Open Sans, sans-serif;
    
  }

  button {
    cursor: pointer;
  }
`;