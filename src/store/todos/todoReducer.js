import { v4 as uuidv4 } from 'uuid';

import * as actions from './todoActionTypes';

// const initialState = {
//   todos: [
//     { id: uuidv4(), title: 'Todo item 1', complete: false },
//     { id: uuidv4(), title: 'Todo item 2', complete: true },
//     { id: uuidv4(), title: 'Todo item 3', complete: false },
//   ],
// };

const initialState = { todos: [] };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: uuidv4(), title: action.payload, complete: false },
        ],
      };
    case actions.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo,
        ),
      };
    case actions.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo,
        ),
      };
    case actions.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
