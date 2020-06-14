import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
}

::selection {
	background: rgba(254, 80, 0, 0.15);
}

::-moz-selection {
	background: rgba(254, 80, 0, 0.15);
}

html,
body {
	margin: 0;
	height: 100%;
	font-family: Arial, Helvetica, sans-serif;
	letter-spacing: 0.7px;
	background: black;
}

body > *, #gatsby-focus-wrapper, .container {
	height: 100%;
}

.container {
	padding: 16px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

ul {
	padding: 0 40px;
  list-style-type: none;
}

.second {
	text-align: right;
}

li {
	margin: 22px 0;
	color: white;
}

a {
	color: white;
	text-decoration: none;
	&:hover {
		color: #fe5000;
	}
}
`;

export default Style;
