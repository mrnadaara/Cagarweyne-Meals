import filterReducer from '../reducers/filter';
import mealsListReducer from '../reducers/mealsList';
import { FETCH_FILTERS, FETCH_MEALS, SELECT_MEAL } from '../actions/types';

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

  it('should handle FETCH_FILTERS', () => {
    const action = {
      type: FETCH_FILTERS,
      payload: {
        categories: ['beef'],
        areas: ['american'],
        ingredients: ['parsley'],
        error: '',
      },
    };
    expect(filterReducer([], action)).toEqual({
      ...action.payload,
      error: '',
    });
  });
});

describe('meals reducer', () => {
  it('should return the initial state', () => {
    expect(mealsListReducer(undefined, {})).toEqual(
      {
        meals: [],
        selectedMeal: {},
        error: '',
      },
    );
  });

  it('should handle FETCH_MEALS', () => {
    const action = {
      type: FETCH_MEALS,
      payload: ['meal objects'],
    };
    expect(mealsListReducer([], action)).toEqual({
      meals: action.payload,
      error: '',
    });
  });

  it('should handle SELECT_MEAL', () => {
    const action = {
      type: SELECT_MEAL,
      payload: { id: 1, name: 'chicken' },
    };
    expect(mealsListReducer([], action)).toEqual({
      selectedMeal: action.payload,
    });
  });
});
