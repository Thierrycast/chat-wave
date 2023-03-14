import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body{
    width: 100vh;
    width: 100vw;
    font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${theme.textColor};
}
`;

export default GlobalStyle;
