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
            works with letters in Brooklyn, New York. Currently product
            designing at{" "}
            <a href="https://www.sanctuary.computer/" className="special">
              Sanctuary Computer
            </a>
            , formerly design interning at{" "}
            <a href="https://useallfive.com/" className="special">
              Use All Five
            </a>
            .
            <br />
            <br />
            His practice
            <sup>
              <a href="https://www.are.na/darin-buzon/">2</a>
            </sup>{" "}
            finds itself across disciplines of art, design, programming
            <sup>
              <a href="https://github.com/dabuzon">3</a>
            </sup>
            , and writing
            <sup>
              <a href="https://medium.com/@darin.buzon">4</a>
            </sup>
            , centering around subjects of the contemporary in politics, power,
            technology, and culture.
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
          <a href="https://www.are.na/darin-buzon/">Are.na</a>, <sup>3</sup>
          <a href="https://github.com/dabuzon">GitHub</a>, <sup>4</sup>
          <a href="https://medium.com/@darin.buzon">Medium</a>
        </Agn>
      </Agn>
    );
  }
}

export default About;
