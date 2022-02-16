import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
padding: 0;
margin: 0;
}

body {
  padding: 20px;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

`;

export default GlobalStyle;
