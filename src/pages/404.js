import React, { Component } from 'react';
import { Link } from 'gatsby';

import { Layout, Head, Hero } from 'components';

export class NotFound extends Component {
  render() {
    return (
      <Layout isFour={true}>
        <Head />
        <h1>This page is intentionally left blank.</h1>
      </Layout>
    );
  }
}

export default NotFound;
