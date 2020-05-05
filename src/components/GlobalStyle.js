import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}
html, body { 
  margin: 0;
  height: 100%;
  font-family: 'Times New Roman', Times, serif;
}

a {
  color: black;
  text-decoration: none;
  &:hover {
    color: #fe5000;
  }
}

p {
  font-size: 24px;
  line-height: 29px;
}

h1 {
  font-weight: normal;
  font-size: 112px;
  line-height: 123px;
}
`;

export default Style;
