import React, { Component } from "react";

import { Container, Text } from "../Styles";

export class Header extends Component {
  render() {
    return (
      <Container>
        <Text fontSize="48px" lineHeight="60px">
          Darin Buzon<br />
          Graphic Design &#38; Programming<br />
          <a href="" className="header">Email</a>, <a href="" className="header">GitHub</a>, <a href="" className="header">Instagram</a>
        </Text>
      </Container>
    );
  }
}

export default Header;
