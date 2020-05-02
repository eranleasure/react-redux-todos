import React from 'react';
import { connect } from 'react-redux';

import './Footer.css';

import FilterButton from '../FilterButton/FilterButton';

const getRemainingTodoCount = todos => {
  return todos.filter(todo => !todo.complete).length;
};

const Footer = ({ todos, todoFilter }) => {
  const remainingTodoCount = getRemainingTodoCount(todos);

  return todos.length ? (
    <footer className='footer'>
      <div className='footer--todo-count'>
        {remainingTodoCount} {remainingTodoCount === 1 ? 'todo' : 'todos'} left
      </div>
      <div className='footer--filters'>
        <FilterButton filter='FILTER_ALL' currentFilter={todoFilter}>
          All
        </FilterButton>
        <FilterButton filter='FILTER_COMPLETE' currentFilter={todoFilter}>
          Complete
        </FilterButton>
        <FilterButton filter='FILTER_INCOMPLETE' currentFilter={todoFilter}>
          Incomplete
        </FilterButton>
      </div>
    </footer>
  ) : null;
};

const mapStateToProps = state => ({
  todos: state.todos.todos,
  todoFilter: state.todoFilter,
});

export default connect(mapStateToProps)(Footer);
