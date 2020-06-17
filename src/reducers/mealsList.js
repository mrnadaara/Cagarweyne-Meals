import { FETCH_MEALS, FETCH_MEALS_ERROR, SELECT_MEAL } from '../actions/types';

const INITIAL_STATE = {
  meals: [],
  selectedMeal: {},
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
    case SELECT_MEAL:
      return {
        ...state,
        selectedMeal: action.payload,
      };
    default:
      return state;
  }
};
