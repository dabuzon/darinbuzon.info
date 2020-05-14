import React, { Component } from 'react';
import Img from 'gatsby-image';
import cx from 'classnames';

import styles from './imagery.module.scss';

export class Imagery extends Component {
  render() {
    return (
      <React.Fragment>
        <Img
          className={cx([`styles.${this.props.size.toLowerCase()}`], {
            [styles.firstImage]: this.props.firstImage,
          })}
          fluid={this.props.image}
        />
        {this.props.caption ? (
          <p className={styles.caption}>{this.props.caption}</p>
        ) : (
          false
        )}
      </React.Fragment>
    );
  }
}

export default Imagery;
