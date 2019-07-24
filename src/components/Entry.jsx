import React, { Component } from "react";

import { Container, Text } from "../Styles";

export class Entry extends Component {
  constructor() {
    super();

    this.onClickF = this.onClickF.bind(this);
    this.onClickB = this.onClickB.bind(this);

    const img0 = require("./img/01_guggenheim/GUGG_1.jpg");
    const img1 = require("./img/02_uclaflux/FLUX_1.jpeg");
    const img2 = require("./img/03_accepting/SOD_1.jpg");
    const img3 = require("./img/04_inquiry/INQUIRY_1.jpeg");
    const img4 = require("./img/06_questions/QUESTIONS_1.jpg");

    this.state = {
      index: 0,
      imgList: [img0, img1, img2, img3, img4]
    }
  }

  onClickF() {
    (this.state.index + 1 === this.state.imgList.length) ? this.setState({ index: 0 }) : this.setState({ index: this.state.index + 1 })
  }

  onClickB() {
    (this.state.index - 1 === -1) ? this.setState({ index: this.state.imgList.length - 1 }) : this.setState({ index: this.state.index - 1 })
  }

  render() {
    return (
      <Container py="150px">
        <Brief info={this.props.info} />
        <img src={this.state.imgList[this.state.index]} onClick={this.onClickF} />
      </Container>
    );
  }
}

const Brief = props => {
  return <Text gridColumn="1/3">{props.info}</Text>;
};

const Image = props => {
  return <img src={props.image} alt="" />;
};

export default Entry;
