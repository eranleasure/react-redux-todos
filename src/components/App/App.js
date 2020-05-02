import React from 'react';

import './App.css';

import Header from '../Header/Header';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <NewTodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
