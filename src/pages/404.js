import React, { Component } from 'react';
import { Link } from 'gatsby';

import { Layout, Hero, Head } from 'components';

export class NotFound extends Component {
  render() {
    return (
      <Layout>
        <Head />
        <h1>Page not found</h1>
        <Link to="/">Head home</Link>
      </Layout>
    );
  }
}

export default NotFound;
