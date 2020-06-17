import { combineReducers } from 'redux';
import mealsList from './mealsList';
import filterList from './filter';

export default combineReducers({
  mealsList,
  filterList,
});
