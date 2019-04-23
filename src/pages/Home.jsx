import React, { Component } from "react";

import { Container } from "../Styles";
import Header from "../components/Header";
import Entry from "../components/Entry";
import two from "../img/two.jpeg";
import three from "../img/three.jpeg";
import four from "../img/four.jpg"
import five from "../img/five.jpg";
import seven from "../img/seven.jpg";

export class Home extends Component {
  render() {
    return (
      <Container height="100%">
        <Header position="absolute" />
        <Entry src="../img" title="Accepting / Unaccepting: Object & Power" brief="Through research, information graphics, and writing, Accepting / Unaccepting explores power dynamics through the ontology of objects specifically through a combination of five construction pieces. Starting from an aesthetic lens, the objects are connected in referential value progressing towards a discursive language that culminates in the following designed, written, and edited book." />
        <Entry src={two} title="uclaFLUX" brief="Poster series commissioned for the quarterly UCLA Herb Alpert School of Music contemporary chamber ensemble recital" />
        <Entry src={three} title="An Inquiry on Food Waste" brief="Book designed, written, and edited exploring the phenomenon of food waste in the bigger conversation of sustainability"/>
        <Entry src={four} title="Breaking the Rules" brief="Design direction for the annual undergraduate juried exhibition curated by the UCLA Department of Design | Media Arts" />
        <Entry src={five} title="10 Questions" brief="Poster series for the course, 10 Questions, taught quarterly by the UCLA School of Arts & Architecture" />
        <Entry src="../img" title="AIGA UCLA" brief="Website design and development for the AIGA UCLA student organization. While some of the design takes directly from the AIGA brand identity, other aspects including marquee and novel presentation provide a unique identity for the UCLA student organization separate from the national organization." />
        <Entry src={seven} title="Kubler-Ross Pamphlet" brief="Informational pamphlet on the Kubler-Ross Model, or the 5 stages of grief. Design choices were influenced by overall expression of the phenomenon but also from graphs and other academic assets." />
      </Container>
    );
  }
}

export default Home;
