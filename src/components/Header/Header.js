import React from 'react';

import './Header.css';

import ReactLogo from '../../assets/react.svg';
import ReduxLogo from '../../assets/redux.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={ReactLogo} alt='React' className='header--logo' />
      <h1 className='header--title'>Todos</h1>
      <img src={ReduxLogo} alt='React' className='header--logo' />
    </header>
  );
};

export default Header;
