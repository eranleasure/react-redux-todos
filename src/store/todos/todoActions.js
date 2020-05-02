import * as actions from './todoActionTypes';

export const addTodo = todoTitle => {
  return {
    type: actions.ADD_TODO,
    payload: todoTitle,
  };
};

export const toggleTodo = todoId => {
  return {
    type: actions.TOGGLE_TODO,
    payload: todoId,
  };
};

export const updateTodo = todo => {
  return {
    type: actions.UPDATE_TODO,
    payload: todo,
  };
};

export const deleteTodo = todoId => {
  return {
    type: actions.DELETE_TODO,
    payload: todoId,
  };
};
