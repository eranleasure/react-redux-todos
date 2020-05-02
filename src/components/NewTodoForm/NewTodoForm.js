import React, { useState } from 'react';
import { connect } from 'react-redux';

import './NewTodoForm.css';

import { addTodo } from '../../store/todos/todoActions';

const NewTodoForm = ({ addTodo }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleChange = e => {
    setNewTodoTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (newTodoTitle.trim()) {
      addTodo(newTodoTitle);
    }
    setNewTodoTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className='new-todo-form'>
      <input
        type='text'
        placeholder='Enter todo...'
        className='new-todo-form--field'
        value={newTodoTitle}
        onChange={handleChange}
      />
      <button type='submit' className='new-todo-form--btn'>
        Add Todo
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodo: newTodoTItle => dispatch(addTodo(newTodoTItle)),
});

export default connect(null, mapDispatchToProps)(NewTodoForm);
