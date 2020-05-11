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
    };
  }

  render() {
    let img;
    if (this.props.image) {
      img = <Img fluid={this.props.image} />;
    }

    console.log(this.props.image);
    return (
      <div
        className={cx({
          [styles.index]: this.state.index,
          [styles.hero]: this.state.hero,
        })}
      >
        {img}
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
    );
  }
}

export default Hero;
