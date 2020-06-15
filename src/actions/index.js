import {
  FETCH_MEALS, FETCH_MEALS_ERROR, FETCH_FILTERS_ERROR, FETCH_FILTERS,
} from './types';

export const fetchMeals = (query = 'A') => async dispatch => {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await result.json();
    dispatch({
      type: FETCH_MEALS,
      payload: !response.meals ? [] : response.meals,
    });
  } catch (e) {
    dispatch({
      type: FETCH_MEALS_ERROR,
      payload: e.message,
    });
  }
};

export const fetchByFilter = (query, type) => async dispatch => {
  let filter = '';
  if (type === 'ingredient') {
    filter = 'i';
  } else if (type === 'category') {
    filter = 'c';
  } else if (type === 'country') {
    filter = 'a';
  }
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${filter}=${query}`);
    const response = await result.json();
    dispatch({
      type: FETCH_MEALS,
      payload: !response.meals ? [] : response.meals,
    });
  } catch (e) {
    dispatch({
      type: FETCH_MEALS_ERROR,
      payload: e.message,
    });
  }
};

const fetchAllMeals = async () => {
  try {
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=A');
    return await result.json();
  } catch (e) {
    throw new Error(e);
  }
};

const fetchArea = async () => {
  try {
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    return await result.json();
  } catch (e) {
    throw new Error(e);
  }
};

const fetchIngredients = async () => {
  try {
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    return await result.json();
  } catch (e) {
    throw new Error(e);
  }
};

const fetchCategory = async () => {
  try {
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    return await result.json();
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchFilters = () => async dispatch => {
  try {
    const result = await Promise.all(
      [fetchAllMeals(), fetchArea(), fetchCategory(), fetchIngredients()],
    );
    dispatch({
      type: FETCH_FILTERS,
      payload: {
        categories: result[2].meals,
        areas: result[1].meals,
        ingredients: result[3].meals,
      },
    });
    dispatch({
      type: FETCH_MEALS,
      payload: result[0].meals,
    });
  } catch (e) {
    dispatch({
      type: FETCH_FILTERS_ERROR,
      payload: e.message,
    });
  }
};
