import filterReducer from '../reducers/filter';
import mealsListReducer from '../reducers/mealsList';
import { FETCH_FILTERS, FETCH_MEALS } from '../actions/types';

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(filterReducer(undefined, {})).toEqual(
      {
        categories: [],
        areas: [],
        ingredients: [],
        error: '',
      },
    );
  });
});
