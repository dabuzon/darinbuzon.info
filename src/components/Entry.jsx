import React, { Component } from "react";

import { Container } from "../Styles";

export class Entry extends Component {
  render() {
    return (
      <Container>
        <Brief brief={this.props.text} />
        {/* <Image /> */}
      </Container>
    );
  }
}

export const Brief = (props) => {
  return <Container>{props.brief}</Container>;
};

const Image = () => {};

export default Entry;
