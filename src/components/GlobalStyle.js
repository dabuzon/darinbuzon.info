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
  font-size: 0.95vw;
  line-height: 1.15vw;
}

h1 {
  font-weight: normal;
  font-size: 4.5vw;
  line-height: 4.5vw;
}
`;

export default Style;
