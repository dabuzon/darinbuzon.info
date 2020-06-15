import React from 'react';
import { Router } from '@reach/router';
import Login from '../components/Login';

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/details" component={Details} />
      <Login path="/app/login" />
    </Router>
  </Layout>
);

export default App;
