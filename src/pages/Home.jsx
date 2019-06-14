import React, { Component } from "react";

import { Container } from "../Styles";

import Header from "../components/Header";
import Entry from "../components/Entry";

import Application from "../assets/img/Guggenheim/Application.jpg"
import Questions from "../assets/img/Posters/10Q.jpg"

export class Home extends Component {
  render() {
    return (
      <Container pt="55px" pb="55px">
        <Header />
        <Entry sauce={Application} name="Guggenheim" info="Development and implementation of a comprehensive style guide to address the museum's need for a more accessible web interface for visitors." ppl="In collaboration with and special thanks to Ben Kasum as well as the rest of the Use All Five family."/>
        <Entry name="Machine Poetry" info="An interdiscplinary artistic reaction in subjects of programming, graphic design, and poetry. Senior capstone project in fulfillment of the requirements for the degree of Bachelor of Arts in Design | Media Arts at the University of California, Los Angeles." ppl="In collaboration with and special thanks to Ben Lerchin, Hye Min Cho, Casey Reas, and the whole struggle that was four years of an undergraduate art education."/>
        <Entry sauce={Questions} name="Posters" info="Commissions, assignments, and self-initiated undertakings within the medium of posters. Clients included UCLA Herb Alpert School of Music, Use All Five, and UCLA Design | Media Arts." ppl="In collaboration with and special thanks to Willem Henri Lucas, Troy Kreiner, and most importantly Israel Gutierrez."/>
        <Entry name="Books" info="Responses to assignments, topics, and phenomena, packaged through typographic and editorial approaches." ppl="In collaboration with and special thanks to Willem Henri Lucas, Rebeca Méndez, and as always Israel Gutierrez."/>
      </Container>
    );
  }
}

export default Home;
