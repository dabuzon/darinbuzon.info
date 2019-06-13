import React, { Component } from "react";

import { Container } from "../Styles";

import Header from "../components/Header";
import Entry from "../components/Entry";

export class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
      </Container>
    );
  }
}

export default Home;
