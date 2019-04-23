import React, { Component } from "react";

import { Container, StyledNavLink } from "../Styles";

export class Header extends Component {
  render() {
    return (
      <Container
        display="grid"
        gridTemplateColumns="repeat(6, minmax(auto, 1fr));"
        px={[3, 4]}
        pt={[1, 2]}
        pb={6}
      >
        <StyledNavLink to="/" fontSize="1.75rem">DARIN BUZON</StyledNavLink>
        <StyledNavLink fontSize="1.75rem">ABOUT</StyledNavLink>
        <StyledNavLink fontSize="1.75rem" gridColumn="-1/-2" textAlign="right">CONTACT</StyledNavLink>
      </Container>
    );
  }
}

export default Header;
