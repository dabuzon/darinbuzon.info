import React from 'react';
import { Link, withPrefix } from 'gatsby';

import { Head } from 'components';
import { Layout } from '../components';

const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <div className="container">
        <ul className="first">
          <li>site is down right now</li>
          <li>
            <p>
              <a
                href="https://www.linkedin.com/in/darin-buzon/"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
              ,&nbsp;
              <a href="https://twitter.com/_dabuzon" rel="noopener noreferrer">
                twitter
              </a>
              ,&nbsp;
              <a
                href="https://www.instagram.com/dabuzon/"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </p>
          </li>
          <li>
            here's a <Link to={withPrefix('/DarinBuzon_CV.pdf')}>resume</Link>
          </li>
        </ul>
        <ul className="second">
          <li>still, darin buzon</li>
          <li>is a product designer</li>
          <li>that works with letters</li>
        </ul>
      </div>
    </Layout>
  );
};

export default IndexPage;
