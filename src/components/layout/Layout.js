import React, { Component } from 'react';
import { Link } from 'gatsby';

import GlobalStyle from '../GlobalStyle';
import styles from './layout.module.scss';

export class Layout extends Component {
  constructor(props) {
    super();
    this.state = {
      title: props.title,
      pathReturn: props.pathReturn,
    };
  }

  render() {
    console.log(this.state.title);
    return (
      <React.Fragment>
        <GlobalStyle />
        <div className={styles.container}>
          <header>
            <p>
              <Link>{this.props.title}</Link>
            </p>
            <p>
              <Link>{this.props.pathReturn}</Link>
            </p>
          </header>
          {this.props.children}
          {/* <footer>
            <Link>{}</Link>
            <Link></Link>
          </footer> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
