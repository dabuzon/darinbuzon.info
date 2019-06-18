import React, { Component } from "react";

import { Container, Text } from "../Styles";

export class Header extends Component {
  render() {
    return (
      <Container px="55px" display="grid" gridTemplateColumns="2% 55% 2%" gridGap="18%">
        <List one={[<a href="mailto:hello@darinbuzon.info" target="_blank" rel="noopener noreferrer">Email</a>]} two={[<a href="https://github.com/dabuzon" target="_blank" rel="noopener noreferrer">GitHub</a>]} three={[<a href="https://www.instagram.com/dabuzon/" target="_blank" rel="noopener noreferrer">Instagram</a>]}/>
        <Text className="header no"><span>Darin Buzon is a graphic artist</span> maintaining a practice primarily within cultural and public spheres of work. Affected by phenomena in the current digital age, he thinks, <a href="https://medium.com/@darin.buzon" target="_blank" rel="noopener noreferrer">writes</a>, criticizes, and creates in subjects centering around the contemporary in politics, power, technology, and culture.</Text>
        <Text>{[<a href="https://drive.google.com/file/d/1BN9HKWw5Oz12IhKayrgGgKetCxRTBYVl/view?usp=sharing">Curriculum vitae</a>]}</Text>
      </Container>
    );
  }
}

const List = (props) => {
  return (
    <Container>
    <Text>{props.one}</Text>
    <Text py="10px">{props.two}</Text>
    <Text>{props.three}</Text>
    </Container>
  )
};

export default Header;
