import React, { Component } from 'react';
import Img from 'gatsby-image';
import cx from 'classnames';

import styles from './imagery.module.scss';

export class Imagery extends Component {
  constructor(props) {
    super();
    this.state = {
      sizer: styles[props.size.toLowerCase()],
    };
  }
  render() {
    // Image style assignment works fine currently
    // Could run into issues since it is only returning
    // the expected `full` selector as undefined
    return (
      <div className={styles.container}>
        <div className={styles.imgContain}>
          <Img
            className={cx([this.state.sizer], {
              [styles.firstImage]: this.props.firstImage,
            })}
            fluid={this.props.image}
          />
        </div>
        {this.props.caption ? (
          <div className={styles.capContainer}>
            <p className={styles.caption}>{this.props.caption}</p>
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}

export default Imagery;
