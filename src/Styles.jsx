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
  textAlign
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
img {
  grid-column: 2/-3;
  width: 100%;
}
#root {
  height: 100%;
  font-family: Arial, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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