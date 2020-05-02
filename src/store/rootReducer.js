import { combineReducers } from 'redux';

import todoReducer from './todos/todoReducer';
import filterReducer from './filters/filterReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  todoFilter: filterReducer,
});

export default rootReducer;
