import * as actions from './filterActionTypes';

export const setFilter = filter => {
  return {
    type: actions.SET_FILTER,
    payload: filter,
  };
};
