import {
  FETCH_MEALS, FETCH_MEALS_ERROR, FETCH_FILTERS_ERROR, FETCH_FILTERS,
  SELECT_MEAL,
} from './types';

const fetchMealSuccess = payload => (
  {
    type: FETCH_MEALS,
    payload,
  }
);

export const selectMeal = payload => (
  {
    type: SELECT_MEAL,
    payload,
  }
);

const fetchMealError = payload => (
  {
    type: FETCH_MEALS_ERROR,
    payload,
  }
);

const fetchFilterSuccess = payload => (
  {
    type: FETCH_FILTERS,
    payload,
  }
);

const fetchFilterError = payload => (
  {
    type: FETCH_FILTERS_ERROR,
    payload,
  }
);

export const fetchMeals = (query = 'A') => async dispatch => {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await result.json();
    dispatch(fetchMealSuccess(!response.meals ? [] : response.meals));
  } catch (e) {
    dispatch(fetchMealError(e.message));
  }
};

export const fetchMealById = query => async dispatch => {
  try {
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`);
    const response = await result.json();
    dispatch(selectMeal(!response.meals ? [] : response.meals[0]));
  } catch (e) {
    dispatch(fetchMealError(e.message));
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
    dispatch(fetchMealSuccess(!response.meals ? [] : response.meals));
  } catch (e) {
    dispatch(fetchMealError(e.message));
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
    dispatch(fetchFilterSuccess({
      categories: result[2].meals,
      areas: result[1].meals,
      ingredients: result[3].meals,
    }));
    dispatch(fetchMealSuccess(result[0].meals));
  } catch (e) {
    dispatch(fetchFilterError(e.message));
  }
};
