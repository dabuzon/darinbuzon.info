import React, { Component } from "react";

import { Container } from "../Styles";

export class Entry extends Component {
  render() {
    return (
      <Container>
        <Brief name={this.props.name} info={this.props.info} ppl={this.props.ppl}/>
        {/* <Image /> */}
      </Container>
    );
  }
}

const Brief = (props) => {
  return (
    <Container>
      <Container>{props.name}</Container>
      <Container>{props.info}</Container>
      <Container>{props.ppl}</Container>
    </Container>
  );
};

const Image = () => {};

export default Entry;
