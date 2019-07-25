import React, { Component } from "react";

import { Container, Text } from "../Styles";

export class Entry extends Component {
  constructor() {
    super();

    this.onClickF = this.onClickF.bind(this);
    this.onClickB = this.onClickB.bind(this);

    this.state = {
      index: 0
    }
  }

  // THIS IS JUST THE LOGIC
  onClickF() {
    (this.state.index + 1 === this.props.sauce.length) ? this.setState({ index: 0 }) : this.setState({ index: this.state.index + 1 })
  }

  onClickB() {
    (this.state.index - 1 === -1) ? this.setState({ index: this.props.sauce.length - 1 }) : this.setState({ index: this.state.index - 1 })
  }

  render() {
    return (
      <Container py="150px">
        <Text gridColumn="1/3">{this.props.info}</Text>
        <img src={this.props.sauce[this.state.index]} onClick={this.onClickF} alt="" />
      </Container>
    );
  }
}

export default Entry;
