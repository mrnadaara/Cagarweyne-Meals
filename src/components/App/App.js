import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap';
import './App.scss';
import HomePage from '../../pages/homepage/homepage';
import MealInfo from '../../pages/meal-info/meal-info';
import Header from '../header/header';

class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/mealInfo" component={MealInfo} />
        </Switch>
      </Router>
    );
  }
}

export default connect(null)(App);
