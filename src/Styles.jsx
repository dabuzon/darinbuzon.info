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

export const Style = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    text-align: justify;
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
  }
}

img {
  width: 100%;
}

span {
  text-decoration: underline;
}

.header {
  font-size: 36px;
}

#root {
  height: 100%;
  font-family: Times, serif;
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

// INLINE STYLES
export const meta = `rel="noopener noreferrer" target='_blank'`;

export const styles = {
  textDecoration: "none",
  color: "black"
};

// RESPONSIVE SIZING
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
