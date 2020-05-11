import React, { Component } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { get as _get } from 'lodash';
import cx from 'classnames';

import styles from './hero.module.scss';

export class Hero extends Component {
  constructor(props) {
    super();
    this.state = {
      index: () => {
        props.location = 'Index' ? true : false;
      },
      hero: () => {
        props.location = 'Index' ? true : false;
      },
      second: false,
    };
  }

  render() {
    let img;
    if (this.props.image) {
      img = (
        <div className={styles.image}>
          <Img className={styles.actualImage} fluid={this.props.image} />
        </div>
      );
      this.state.second = true;
    }
    console.log(this.props.isSecond);
    return (
      <div
        className={cx({
          [styles.index]: this.state.index,
          [styles.hero]: this.state.hero,
        })}
      >
        {img}
        <div
          className={cx({
            [styles.second]: this.state.second,
          })}
        >
          <div>
            <ul>
              <Link className={styles.pills}>{this.props.primaryLabel}</Link>
              {this.props.labels.map((label) => {
                return <Link className={styles.pills}>{label}</Link>;
              })}
            </ul>
            <div className={styles.grid}>
              <h1>{this.props.impactText}</h1>
            </div>
            <div className={styles.grid}>
              <p>{this.props.info}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
