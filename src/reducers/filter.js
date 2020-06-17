import { FETCH_FILTERS, FETCH_FILTERS_ERROR } from '../actions/types';

const INITIAL_STATE = {
  categories: [],
  areas: [],
  ingredients: [],
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FILTERS:
      return {
        ...state,
        ...action.payload,
        error: '',
      };
    case FETCH_FILTERS_ERROR:
      return {
        ...INITIAL_STATE,
        meals: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
