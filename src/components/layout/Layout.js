import React from 'react';

import GlobalStyle from '../GlobalStyle';

const Layout = (props) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
