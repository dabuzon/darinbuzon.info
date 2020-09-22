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

html {
  visibility: hidden;
}

html.wf-active,
html.wf-inactive {
  visibility: visible;
}

html,
body {
	margin: 0;
	height: 100%;
	font-family: adobe-garamond-pro, serif;
	font-weight: 400;
	font-style: normal;
	letter-spacing: 0;
	color: #2b2b2b;
}

a {
	color: #2b2b2b;
	text-decoration: none;
	&:hover {
		color: #fe5000;
	}
}

p,
a.footlink {
	font-size: 1vw;
	line-height: 1.55vw;
}

h1,
.entry {
	font-weight: normal;
	font-size: 4.5vw;
	letter-spacing: 1px;
	line-height: 4.75vw;
	padding: 30px 0 4vw 0;
}

a.entry {
	grid-column: 1/10;
}

.gridContainer {
	display: grid;
	grid-template-columns: repeat(16, 1fr);
	grid-gap: 40px;
	.caption {
		grid-column: 3/6;
		font-size: 0.7vw;
		color: #999;
		margin-top: 5px;
	}
	.indent {
		grid-column: 2/-1;
	}
	div {
		grid-column: 1/-1;
	}
	.labeledpara {
		grid-column: 7/11;
		.theContent {
			margin-bottom: 35px;
		}
	}
}

.pills {
	display: inline-block;
	padding: 8px 20px;
	border: 1px solid;
	border-color: #2b2b2b;
	border-radius: 100px;
	margin: 0 4px;
	font-family: neue-haas-grotesk-display, sans-serif;
	font-weight: 500;
	font-style: normal;
	letter-spacing: 1px;
}

.pills:first-child {
	margin: 0 4px 0 0;
	background-color: #2b2b2b;
	color: white;
}

@media (max-width: 1440px) {
	.gridContainer .caption {
		font-size: 12px;
	}
	p,
	a.footlink {
		font-size: 16px;
		line-height: 20px;
	}
	h1,
	.entry {
		font-size: 72px;
		line-height: 78px;
	}
	a.entry {
		grid-column: 1/11;
	}
	.pills {
		font-size: 14px;
	}
}

@media (max-width: 1024px) {
	.pills {
		font-size: 10px;
		padding: 6px 16px;
	}
	.gridContainer {
		.labeledpara {
			grid-column: 6/12;
		}
	}
}

@media (max-width: 900px) {
	.gridContainer {
		display: flex;
		flex-direction: column;
		.labeledpara {
			.theContent {
				margin-bottom: 15px;
			}
		}
		.mobileParagraph:first-child {
			padding-bottom: 20px;
		}
		.mobileParagraph {
			padding-bottom: 0;
		}
	}
	h1,
	.entry {
		font-size: 40px;
		line-height: 44px;
		padding: 30px 0 40px 0;
	}
}
`;

export default Style;
