import React, { Component } from 'react';
import { Link, withPrefix } from 'gatsby';
import Img from 'gatsby-image';
import cx from 'classnames';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './hero.module.scss';

export class Hero extends Component {
  render() {
    let img;
    if (this.props.image) {
      img = (
        <Link
          className={styles.image}
          to={`/case-studies/${this.props.caselink}`}
        >
          <Img className={styles.actualImage} fluid={this.props.image} />
        </Link>
      );
    }
    return (
      <div
        className={cx([styles.hero], {
          [styles.border]: this.props.page,
          [styles.firstHero]: this.props.firstHero,
          [styles.caseHero]: this.props.caseHero,
        })}
      >
        {img}
        <div className="gridContainer">
          <div
            className={cx({
              indent: this.props.indent,
            })}
          >
            <ul>
              <div className="pills">{this.props.primaryLabel}</div>
              {this.props.labels
                ? this.props.labels.map((label) => {
                    let link;
                    if (label === 'Resume') {
                      link = withPrefix('/DarinBuzon_CV.pdf');
                    } else if (label === 'Twitter') {
                      link = 'https://twitter.com/_dabuzon';
                    } else if (label === 'LinkedIn') {
                      link = 'https://www.linkedin.com/in/darin-buzon/';
                    }
                    if (this.props.indent || !this.props.isIndex) {
                      return <div className="pills">{label}</div>;
                    } else {
                      return (
                        <a
                          className="pills"
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {label}
                        </a>
                      );
                    }
                  })
                : false}
            </ul>
            <div className={styles.heroGrid}>
              {this.props.indent && this.props.isIndex ? (
                <Link
                  className="entry"
                  to={`/case-studies/${this.props.caselink}`}
                >
                  {this.props.impactText}
                </Link>
              ) : (
                <h1>{this.props.impactText}</h1>
              )}
            </div>
            {this.props.copy ? (
              <div className="gridContainer">
                {documentToReactComponents(this.props.copy)}
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
