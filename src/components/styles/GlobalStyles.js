import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 10px;
    font-family: 'Hind', sans-serif;
    margin:0;
  }
  /*#root {
    width:100%;
    height:100vh;
  }*/
`;

export default GlobalStyles;
