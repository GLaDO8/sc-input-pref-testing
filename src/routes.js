import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Thanks from "./thankYouPage";
import Home from "./App";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/thanks" component={Thanks} />
        </Switch>
      </Router>
    );
  }
}
