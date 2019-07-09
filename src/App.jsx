import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import { Style } from "./Styles";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Style />
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
