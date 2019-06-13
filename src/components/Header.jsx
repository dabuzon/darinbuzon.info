import React, { Component } from "react";

import { Container, StyledNavLink } from "../Styles";

export class Header extends Component {
  render() {
    return (
      <Container>
        <List />
        <Bio />
        <List />
      </Container>
    );
  }
}

const List = () => {};

const Bio = () => {};

export default Header;
