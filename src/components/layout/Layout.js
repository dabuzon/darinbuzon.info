import React from 'react';

import GlobalStyle from '../GlobalStyle';
import styles from './layout.module.scss';

import Header from '../header';
import Footer from '../footer';

const Layout = (props) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className={styles.container}>
        <Header />
        {props.children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
