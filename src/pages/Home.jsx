import React, { Component } from "react";

import { Container } from "../Styles";

import Header from "../components/Header";
import Entry from "../components/Entry";
import Texts from "../components/Texts";

import Application from "../assets/img/Guggenheim/Application.jpg";
import Questions from "../assets/img/Posters/10Q.jpg";
import MachinePoetry from "../assets/img/Machine Poetry/MachinePoetry.png";
import Books from "../assets/img/Books/Books.png";

export class Home extends Component {
  render() {
    return (
      <Container pt="55px">
        <Header />
        <Entry
          sauce={Application}
          name="Guggenheim"
          info={Texts.guggz[0]}
          ppl={Texts.guggz[1]}
        />
        <Entry
          sauce={MachinePoetry}
          name="Machine Poetry"
          info={Texts.mp[0]}
          ppl={Texts.mp[1]}
        />
        <Entry
          sauce={Questions}
          name="Posters"
          info={Texts.p[0]}
          ppl={Texts.p[1]}
        />
        <Entry
          sauce={Books}
          name="Books"
          info={Texts.b[0]}
          ppl={Texts.b[1]}
        />
        <Container></Container>
      </Container>
    );
  }
}

export default Home;
