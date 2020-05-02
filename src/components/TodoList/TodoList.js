import React from 'react';
import { connect } from 'react-redux';

import './TodoList.css';
import Todo from '../Todo/Todo';

const getFilteredTodos = (todos, todoFilter) => {
  switch (todoFilter) {
    case 'FILTER_ALL':
      return todos;
    case 'FILTER_COMPLETE':
      return todos.filter(todo => todo.complete);
    case 'FILTER_INCOMPLETE':
      return todos.filter(todo => !todo.complete);
    default:
      return todos;
  }
};

const TodoList = ({ todos, todoFilter }) => {
  const filteredTodos = getFilteredTodos(todos, todoFilter);
  return todos.length ? (
    <ul className='todo-list'>
      {filteredTodos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  ) : (
    <div className='no-todo-list'>
      <h2 className='no-todo-list--title'>You have no todos</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    todoFilter: state.todoFilter,
  };
};

export default connect(mapStateToProps)(TodoList);
