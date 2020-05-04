import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}
html, body { 
  margin: 0;
  height: 100%;
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
`;

export default Style;
