import React, { Component } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import cx from 'classnames';

import styles from './hero.module.scss';

export class Hero extends Component {
  render() {
    let img;
    if (this.props.image) {
      img = (
        <Link className={styles.image}>
          <Img className={styles.actualImage} fluid={this.props.image} />
        </Link>
      );
    }
    return (
      <div
        className={cx([styles.hero], {
          [styles.border]: this.props.location,
        })}
      >
        {img}
        <div
          className={cx({
            [styles.indent]: this.props.indent,
          })}
        >
          <div>
            <ul>
              <div className={styles.pills}>{this.props.primaryLabel}</div>
              {this.props.labels
                ? this.props.labels.map((label) => {
                    return <Link className={styles.pills}>{label}</Link>;
                  })
                : false}
            </ul>
            <div className={styles.grid}>
              {this.props.location ? (
                <Link className={styles.entry}>{this.props.impactText}</Link>
              ) : (
                <h1>{this.props.impactText}</h1>
              )}
            </div>
            {this.props.info ? (
              <div className={styles.grid}>
                <p>{this.props.info}</p>
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
