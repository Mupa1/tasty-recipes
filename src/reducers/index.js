import { combineReducers } from 'redux';

import recipesRecuder from './recipes';

const rootReducer = combineReducers({
  recipes: recipesRecuder,
});

export default rootReducer;
