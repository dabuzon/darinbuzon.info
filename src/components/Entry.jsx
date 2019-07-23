import React, { Component } from "react";

import { Container, Text } from "../Styles";

export class Entry extends Component {
  render() {
    return (
      <Container py="150px">
        <Brief info={this.props.info}/>
        <Image image={this.props.sauce}/>
      </Container>
    );
  }
}

const Brief = props => {
  return <Text gridColumn="1/3">{props.info}</Text>;
};

const Image = props => {
  return <img src={props.image} alt="" />;
};

export default Entry;
