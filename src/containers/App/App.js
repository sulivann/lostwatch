import React, { Component } from 'react';
import { connect } from 'react-redux';

import Router from '../../router';

class App extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps, null,{
  pure: false
})(App);
