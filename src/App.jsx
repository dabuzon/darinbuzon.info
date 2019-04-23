import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import { Style } from "./Styles";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Style />
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
