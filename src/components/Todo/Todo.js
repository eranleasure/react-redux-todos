import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import './Todo.css';

import {
  toggleTodo,
  updateTodo,
  deleteTodo,
} from '../../store/todos/todoActions';

import EditIcon from '../../assets/edit.svg';
import DeleteIcon from '../../assets/trash.svg';
import SaveIcon from '../../assets/save.svg';
import CancelIcon from '../../assets/cancel.svg';

const Todo = ({ todo, toggleTodo, updateTodo, deleteTodo }) => {
  const [editing, setEditing] = useState(false);
  const [cachedTodo, setCachedTodo] = useState({});
  const [todoInEdit, setTodoInEdit] = useState({});
  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const handleEdit = e => {
    e.preventDefault();
    setEditing(true);
    setCachedTodo(todo);
    setTodoInEdit(todo);
  };

  const handleCancel = e => {
    e.preventDefault();
    setTodoInEdit(cachedTodo);
    setEditing(false);
  };

  const handleChange = e => {
    setTodoInEdit({ ...todo, title: e.target.value });
  };

  const handleSave = e => {
    e.preventDefault();
    updateTodo(todoInEdit);
    setEditing(false);
  };

  const handleDelete = e => {
    e.preventDefault();
    deleteTodo(todo.id);
  };

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <li className='todo'>
      {editing ? (
        <form onSubmit={handleSave} className='todo--form'>
          <div className='todo--fields editing'>
            <input
              type='text'
              className='todo--edit-title'
              ref={inputRef}
              value={todoInEdit.title}
              onChange={handleChange}
            />
          </div>
          <div className='todo--btn-group'>
            <button className='todo--btn' type='submit'>
              <img className='todo--btn-img' src={SaveIcon} alt='Save' />
            </button>
            <button className='todo--btn' onClick={handleCancel} type='button'>
              <img className='todo--btn-img' src={CancelIcon} alt='Cancel' />
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className='todo--fields'>
            <input
              type='checkbox'
              id={`todo-${todo.id}`}
              className='todo--checkbox'
              checked={todo.complete}
              onChange={handleToggle}
            />
            <label htmlFor={`todo-${todo.id}`} className='todo--label'>
              {todo.title}
            </label>
          </div>
          <div className='todo--btn-group'>
            <button className='todo--btn' onClick={handleEdit} type='button'>
              <img className='todo--btn-img' src={EditIcon} alt='Edit' />
            </button>
            <button className='todo--btn' onClick={handleDelete} type='button'>
              <img className='todo--btn-img' src={DeleteIcon} alt='Delete' />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: todoId => dispatch(toggleTodo(todoId)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  deleteTodo: todoId => dispatch(deleteTodo(todoId)),
});

export default connect(null, mapDispatchToProps)(Todo);
