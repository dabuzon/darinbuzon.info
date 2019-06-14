import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import {
  space,
  display,
  height,
  flexDirection,
  justifyContent,
  gridTemplateColumns,
  gridColumn,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  gridGap
} from "styled-system";

import Book from "./assets/font/Book.otf";
import Italic from "./assets/font/Italic.otf";

export const Style = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    text-align: justify;

    @font-face {
    font-family: 'Book';
    src: url(${Book});
  }
}
html, body { 
  margin: 0;
  height: 100%;
}

a {
  color: black;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    font-family: 'Italic';
  }
}

span {
  text-decoration: underline;
}

.header {
  @font-face {
    font-family: 'Italic';
    src: url(${Italic});
  }

  font-size: 36px;
}

#root {
  height: 100%;
  font-family: 'Book', Arial, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
.header {
  font-family: 'Italic';
}

.no {
  font-family: 'Book';
}

}
`;

export const Container = styled.div`
  ${height}
  ${space}
  
  ${display}
  ${flexDirection}
  ${justifyContent}
  ${gridTemplateColumns}
  ${gridColumn}
  ${gridGap}
  ${textAlign}
`;

export const Text = styled.div`
  margin: 0;
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${gridColumn}
  ${textAlign}
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #fe5000;
  }
  ${fontWeight}
  ${fontSize}
  ${gridColumn}
  ${textAlign}
`;

// Inline styles
export const meta = `rel="noopener noreferrer" target='_blank'`;

export const styles = {
  textDecoration: "none",
  color: "black"
};
