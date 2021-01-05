import { combineReducers } from 'redux';

import recipesRecuder from './recipes';
import filterRecuder from './filter';

const rootReducer = combineReducers({
  recipes: recipesRecuder,
  filter: filterRecuder,
});

export default rootReducer;
