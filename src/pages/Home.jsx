import React, { Component } from "react";

import { Container } from "../Styles";
import Header from "../components/Header";
import Entry from "../components/Entry";
import two from "../img/two.jpeg";
import three from "../img/three.jpeg";
import four from "../img/four.jpg"
import five from "../img/five.jpg";
import six from "../img/six.jpg";

export class Home extends Component {
  render() {
    return (
      <Container height="100%">
        <Header />
        <Entry src="../img" title="Accepting / Unaccepting: Object & Power" brief="Accepting / Unaccepting explores power dynamics through the ontology of five construction pieces. Following a aesthetic, referential, and discursive progression, research culminates in the following designed, written, and edited book." />
        <Entry src={two} title="uclaFLUX" brief="Poster series commissioned for the quarterly UCLA Herb Alpert School of Music contemporary chamber ensemble recital" />
        <Entry src={three} title="An Inquiry on Food Waste" brief="Book designed, written, and edited exploring the phenomenon of food waste in the bigger conversation of sustainability"/>
        <Entry src={four} title="Breaking the Rules" brief="Design direction for the annual undergraduate juried exhibition curated by the UCLA Department of Design | Media Arts" />
        <Entry src={five} title="10 Questions" brief="Poster series for the course, 10 Questions, taught quarterly by the UCLA School of Arts & Architecture" />
        <Entry src={six} title="Kubler-Ross Pamphlet" brief="Informational pamphlet on the Kubler-Ross Model, or the 5 stages of grief. Design choices were influenced by overall expression of the phenomenon but also from graphs and other academic assets." />
      </Container>
    );
  }
}

export default Home;
