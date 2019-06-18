import React, { Component } from "react";

import { Container } from "../Styles";

export class Entry extends Component {
  render() {
    return (
      <Container>
        <Brief
          name={this.props.name}
          info={this.props.info}
          ppl={this.props.ppl}
        />
        <Image image={this.props.sauce} />
      </Container>
    );
  }
}

const Brief = props => {
  return (
    <Container
      px="55px"
      py="80px"
      display="grid"
      gridTemplateColumns="20% 30% 30%"
      gridGap="10%"
    >
      <Container className="header">{props.name}</Container>
      <Container>{props.info}</Container>
      <Container>{props.ppl}</Container>
    </Container>
  );
};

const Image = props => {
  return <img src={props.image} alt=""/>;
};

export default Entry;
