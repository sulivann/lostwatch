import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import About from '../containers/About';
import Account from '../containers/Account';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/account" component={Account} />
      </Switch>
    );
  }
}

export default Router;
