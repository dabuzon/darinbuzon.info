import React from 'react';

import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
// naming is arbitrary
import layoutStyle from './layout.module.scss';

const Layout = (props) => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
