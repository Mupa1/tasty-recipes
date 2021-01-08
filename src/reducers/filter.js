import { UPDATE_FILTER } from '../actions/index';

const filterReducer = (state = 'Pizza', action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
