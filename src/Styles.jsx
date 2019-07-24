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

a.special {
  text-decoration: underline;
}

img {
  width: 100%;
  grid-column: 4/-1;
}

sup {
  font-size: 24px;
}

sup.home {
  font-size: 16px;
}

span {
  color: #fe5000;
}

#root {
  height: 100%;
  padding: 0px 10px;

  font-family: Helvetica, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: bold;
  font-size: 24px;
}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 20px;

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

// AGNOSTIC CONTAINER
export const Agn = styled.div`
  ${fontSize}
  ${gridColumn}
  ${textAlign}
  ${display}
  ${flexDirection}
  ${justifyContent}
  ${height}
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
