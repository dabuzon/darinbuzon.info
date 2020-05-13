import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';

import { Layout, SEO, Hero, Head } from 'components';

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
