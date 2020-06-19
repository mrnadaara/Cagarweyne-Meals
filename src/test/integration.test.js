import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render, screen } from '../setupTests';
import CatalogueList from '../components/catalogue-list/catalogue-list';

it('Renders the connected app with initialState', () => {
  const initialState = {
    mealsList: {
      meals: [
        {
          strMeal: 'Baked salmon with fennel & tomatoes',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
          idMeal: '52959',
        },
      ],
      selectedMeal: {},
      error: '',
    },
    filterList: {
      categories: [],
      areas: [],
      ingredients: [],
      error: '',
    },
  };
  render((
    <Router>
      <Switch>
        <Route exact path="/" component={CatalogueList} />
      </Switch>
    </Router>
  ), { initialState });

  expect(screen.getByText('Baked salmon with fennel & tomatoes')).toBeInTheDocument();
});
