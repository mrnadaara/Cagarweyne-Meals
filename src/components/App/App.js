import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap';
import './App.scss';
import HomePage from '../../pages/homepage/homepage';

class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default connect(null)(App);
