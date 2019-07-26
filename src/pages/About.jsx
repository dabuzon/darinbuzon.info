import React, { Component } from "react";

import { Container, Agn, StyledNavLink } from "../Styles";

export class About extends Component {
  render() {
    return (
      <Agn
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Container>
          <Agn fontSize="48px" gridColumn="1/-2">
            Darin Buzon
            <sup>
              <a href="https://drive.google.com/file/d/1BN9HKWw5Oz12IhKayrgGgKetCxRTBYVl/view?usp=sharing">
                1
              </a>
            </sup>{" "}
            is a graphic artist, designing, programming
            <sup>
              <a href="https://github.com/dabuzon">2</a>
            </sup>
            , and writing
            <sup>
              <a href="https://medium.com/@darin.buzon">3</a>
            </sup>{" "}
            in sunny Los Angeles. His practice finds itself primarily within
            public and cultural domains, centering around subjects of the
            contemporary in politics, power, technology, and culture.
            <br />
            <br />
            Clients include the{" "}
            <a href="https://www.guggenheim.org/" className="special">
              Guggenheim Foundation
            </a>
            ,{" "}
            <a href="https://schoolofmusic.ucla.edu/" className="special">
              UCLA Herb Alpert School of Music
            </a>
            ,{" "}
            <a href="https://www.arts.ucla.edu/" className="special">
              UCLA School of Arts and Architecture
            </a>
            .{" "}
          </Agn>
          <Agn gridColumn="-1/-2" textAlign="right">
            <StyledNavLink to="/">Return</StyledNavLink>
          </Agn>
        </Container>
        <Agn fontSize="48px">
          <sup>1</sup>
          <a href="https://drive.google.com/file/d/1BN9HKWw5Oz12IhKayrgGgKetCxRTBYVl/view?usp=sharing">
            Résumé
          </a>
          , <sup>2</sup>
          <a href="https://github.com/dabuzon">GitHub</a>, <sup>3</sup>
          <a href="https://medium.com/@darin.buzon">Medium</a>
        </Agn>
      </Agn>
    );
  }
}

export default About;
