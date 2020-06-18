import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap';
import './App.scss';
import HomePage from '../../pages/homepage/homepage';
import MealInfo from '../../pages/meal-info/meal-info';
import Header from '../header/header';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/mealInfo" component={MealInfo} />
    </Switch>
  </Router>
);

export default App;
