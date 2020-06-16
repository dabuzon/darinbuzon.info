import React from 'react';
import { Router } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import PrivateRoute from '../components/privateroute';
import Layout from '../components/layout';
import Login from '../components/Login';

const App = () => {
  const data = useStaticQuery(graphql`
    query {
      cases: allContentfulPageCaseStudy {
        nodes {
          slug
        }
      }
    }
  `);

  return (
    <Layout>
      <Router>
        {data.cases.nodes.map((edge) => {
          return <PrivateRoute path={`/${edge}`} />;
        })}
        <Login path="/app/login" />
      </Router>
    </Layout>
  );
};

export default App;
