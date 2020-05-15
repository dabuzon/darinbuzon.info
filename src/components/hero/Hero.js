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
        <Link className={styles.image} to={`/${this.props.caselink}`}>
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
                    let link;
                    if (label === 'Email') {
                      link = 'mailto:hello@darinbuzon.info';
                    } else if (label === 'Resume') {
                      link = 'sanctuary.computer';
                    } else if (label === 'Twitter') {
                      link = 'https://twitter.com/_dabuzon';
                    } else if (label === 'Instagram') {
                      link = 'https://www.instagram.com/dabuzon/';
                    }
                    if (this.props.indent) {
                      return <div className={styles.pills}>{label}</div>;
                    } else {
                      return (
                        <a className={styles.pills} href={link} target="_blank">
                          {label}
                        </a>
                      );
                    }
                  })
                : false}
            </ul>
            <div className={styles.grid}>
              {this.props.indent ? (
                <Link className={styles.entry} to={`/${this.props.caselink}`}>
                  {this.props.impactText}
                </Link>
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
