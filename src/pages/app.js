import React from 'react';
import { Router } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import PrivateRoute from '../components/privateroute';
import Layout from '../components/layout';
import Login from '../components/Login';
import CaseStudy from '../templates/CaseStudy';

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
          return <PrivateRoute path={`/${edge}`} component={CaseStudy} />;
        })}
        {/* might need to use a prop for Login
        to send to the other components, Form and Login */}
        <Login path="/case-studies/lock" />
      </Router>
    </Layout>
  );
};

export default App;
