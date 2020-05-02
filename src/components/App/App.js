import React from 'react';

import './App.css';
import GitHubIcon from '../../assets/github.svg';

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
      <a
        href='https://github.com/eranleasure/react-redux-todos'
        className='app--bottom-link'
      >
        <img src={GitHubIcon} alt='github' />
      </a>
    </div>
  );
};

export default App;
