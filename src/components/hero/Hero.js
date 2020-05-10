import React, { Component } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import cx from 'classnames';

import styles from './hero.module.scss';

export class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: () => {
        props.location = 'Index' ? true : false;
      },
      hero: () => {
        props.location = 'Index' ? true : false;
      },
      image: () => {
        props.image = null ? true : false;
      },
    };
  }

  render() {
    return (
      <div
        className={cx({
          [styles.index]: this.state.index,
          [styles.hero]: this.state.hero,
        })}
      >
        {this.state.image ? <Img fluid={this.props.image.fluid} /> : null}
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
