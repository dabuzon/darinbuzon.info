import React, { Component } from "react";

import { Container } from "../Styles";

export class Entry extends Component {
  render() {
    return (
      <Container>
        <Brief />
        <Image />
      </Container>
    );
  }
}

const Brief = () => {
  
};

const Image = () => {};

export default Entry;
