import React, { Component } from "react";

import { Container } from "../Styles";
import Header from "../components/Header";

export class Home extends Component {
  render() {
    return (
      <Container pt="40px" pl="55px">
        <Header />
      </Container>
    );
  }
}

export default Home;
