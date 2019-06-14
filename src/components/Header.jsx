import React, { Component } from "react";

import { Container, Text } from "../Styles";

export class Header extends Component {
  render() {
    return (
      <Container pr="55px" pl="55px" display="grid" gridTemplateColumns="2% 55% 2%" gridGap="18%">
        <List one={[<a href="mailto:hello@darinbuzon.info">Email</a>]} two="Twitter" three="Instagram"/>
        <Text className="header no"><span>Darin Buzon is a graphic artist</span> maintaining a practice primarily within cultural and public spheres of work. Affected by phenomena in the current digital age, he thinks, <a>writes</a>, criticizes, and creates in subjects centering around the contemporary in politics, power, technology, and culture.</Text>
        <Text>Curriculum vitae</Text>
      </Container>
    );
  }
}

const List = (props) => {
  return (
    <Container>
    <Text>{props.one}</Text>
    <Text>{props.two}</Text>
    <Text>{props.three}</Text>
    </Container>
  )
};

export default Header;
