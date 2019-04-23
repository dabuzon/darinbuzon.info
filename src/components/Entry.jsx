import React, { Component } from "react";

import { Container, Text } from "../Styles";

export class Entry extends Component {
  render() {
    return (
      <Container
        display="grid"
        gridTemplateColumns="repeat(6, minmax(auto, 1fr));"
        px={[3, 4]}
        py={[3, 4]}>
        <Container gridColumn="1/2">
          <Text fontWeight="bold" fontSize="1.75rem">{this.props.title}</Text>
          <Text fontSize="1rem" pr={5} pt={2}>{this.props.brief}</Text>
        </Container>
        <img src={this.props.src} />
      </Container>
    );
  }
}

export default Entry;
