import React, { Component } from "react";

import { Container, Text } from "../Styles";
import Header from "../components/Header";
import me from "../img/me.jpg"


export class About extends Component {
  render() {
    return (
      <Container height="100%">
        <Header />
        <Container
          display="grid"
          gridTemplateColumns="repeat(4, minmax(auto, 1fr));"
          px={[3, 4]}
          pt={[1, 2]}
          pb={6}
        >
          <Text fontSize="1.75rem" pr={5} pt={4}>
            Designing, <a href="https://github.com/dabuzon" target="_blank">programming</a>, <a href="https://medium.com/@darin.buzon" target="_blank">writing</a>, and wandering sunny Los Angeles.<br/><br/>
            <a href="https://drive.google.com/file/d/1GNuMAzDLz3WFsUhMBiWo5D5FAbbkoEzZ/view?usp=sharing" target="_blank">DB_RESUME_2019.pdf</a>
          </Text>
          <img className="me" src={me} alt="" />
          <Container textAlign="right" gridColumn="-2/-1" pt={4}>
            <a href="mailto:hello@darinbuzon.info">mailto:hello@darinbuzon.info</a><br />
            <a href="tel:+1-909-810-8454">tel:+1-909-810-8454</a>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default About;
