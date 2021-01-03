import { SEARCH_RECIPE } from '../actions/index';

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_RECIPE:
      return action.payload;
    default:
      return [...state];
  }
};

export default recipesReducer;
