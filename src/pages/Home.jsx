import React, { Component } from "react";

import { Container, Agn, meta, StyledNavLink } from "../Styles";
import {
  Guggenheim,
  // Mpoetry,
  Flux,
  Accepting,
  Inquiry,
  Questions
} from "../components/Text.jsx";
import {
  GuggImg,
  FluxImg,
  AcceptImg,
  InquiryImg,
  QuestionImg
} from "../components/ImgSet";
import { Entry } from "../components/Entry";

export class Home extends Component {
  render() {
    return (
      <Container display="flex" flexDirection="column">
        <Container>
          <StyledNavLink to="/about" gridColumn="1/4" fontSize="48px">
            Darin Buzon
          </StyledNavLink>
          <Container
            display="flex"
            flexDirection="column"
            gridColumn="-2/-1"
            textAlign="right"
          >
            <a href="mailto:hello@darinbuzon.info" {...meta}>
              Email
            </a>
            <a
              href="https://drive.google.com/file/d/1BN9HKWw5Oz12IhKayrgGgKetCxRTBYVl/view?usp=sharing"
              {...meta}
            >
              Résumé
            </a>
            <a href="https://github.com/dabuzon" {...meta}>
              GitHub
            </a>
          </Container>
        </Container>
        <Agn>
          <Entry sauce={GuggImg} info={Guggenheim} />
          {/* <Entry sauce={Mpoetry} info={Mpoetry} /> */}
          <Entry sauce={FluxImg} info={Flux} />
          <Entry sauce={AcceptImg} info={Accepting} />
          <Entry sauce={InquiryImg} info={Inquiry} />
          <Entry sauce={QuestionImg} info={Questions} />
        </Agn>
        <Container pb="10px" display="flex" flexDirection="column">
          <hr />
          <Container pt="5px">
            <Agn gridColumn="1/4" pt="5px">
              Colophon
            </Agn>
            <Agn gridColumn="4/-2" pt="5px">
              This website is typeset in Helvetica
              <sup class="home">
                <a href="https://en.wikipedia.org/wiki/Helvetica">1</a>
              </sup>{" "}
              Bold, hosted through Now
              <sup class="home">
                <a href="https://zeit.co/now">2</a>
              </sup>{" "}
              by ZEIT
              <sup class="home">
                <a href="https://zeit.co/">3</a>
              </sup>
              , design and developed in React
              <sup class="home">
                <a href="https://reactjs.org/">4</a>
              </sup>{" "}
              by yours truly with its source code
              <sup class="home">
                <a href="https://github.com/dabuzon/darinbuzon.info">5</a>
              </sup>{" "}
              readily available on GitHub. Last updated 19 July 2019.
            </Agn>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default Home;
