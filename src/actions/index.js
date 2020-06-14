import { FETCH_MEALS, FETCH_MEALS_ERROR, FETCH_FILTERS_ERROR, FETCH_FILTERS } from './types';

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

const fetchArea = async (query = 'A') => {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    return await result.json();
  } catch (e) {
    throw new Error(e);
  }
};

const fetchIngredients = async (query = 'A') => {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    return await result.json();
  } catch (e) {
    throw new Error(e);
  }
};

const fetchCategory = async (query = 'A') => {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    return await result.json();
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchFilters = () => async dispatch => {
  try {
    const result = await Promise.all([fetchArea(), fetchCategory(), fetchIngredients()]);
    dispatch({
      type: FETCH_FILTERS,
      payload: result,
    });
  } catch (e) {
    dispatch({
      type: FETCH_FILTERS_ERROR,
    });
  }
};
