import { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
    font-family: Noto Sans KR;
  }
  a {
    text-decoration: none;
  }
  body {
    margin: 0;
    background-color: #F7F9FD;
  }
`;

export default global;