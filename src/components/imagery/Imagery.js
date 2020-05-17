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
    console.log(this.props.firstImage);
    // Image style assignment works fine currently
    // Could run into issues since it is only returning
    // the expected `full` selector as undefined
    return (
      <div className={cx({ [styles.firstImage]: this.props.firstImage })}>
        <div className={styles.imgContain}>
          <Img className={this.state.sizer} fluid={this.props.image} />
        </div>
        {this.props.caption ? (
          <div className="gridContainer">
            <p className="caption">{this.props.caption}</p>
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}

export default Imagery;
