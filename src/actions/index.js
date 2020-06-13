import { FETCH_MEALS, FETCH_MEALS_ERROR } from './types';

export const fetchMeals = (query = 'A') => async dispatch => {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await result.json();
    dispatch({
      type: FETCH_MEALS,
      payload: response.meals,
    });
  } catch (e) {
    dispatch({
      type: FETCH_MEALS_ERROR,
    });
  }
};

export const fetchCategories = (query = '') => dispatch => {
  dispatch({
    type: FETCH_MEALS,
    payload: query,
  });
};
