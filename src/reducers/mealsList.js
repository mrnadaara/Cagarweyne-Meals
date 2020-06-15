import { FETCH_MEALS, FETCH_MEALS_ERROR } from '../actions/types';

const INITIAL_STATE = {
  meals: [],
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return {
        ...state,
        meals: action.payload,
        error: '',
      };
    case FETCH_MEALS_ERROR:
      return {
        ...INITIAL_STATE,
        error: action.payload,
      };
    default:
      return state;
  }
};
