import * as actions from './filterActionTypes';

const initialState = 'FILTER_ALL';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
