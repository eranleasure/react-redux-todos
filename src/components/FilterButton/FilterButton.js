import React from 'react';
import { connect } from 'react-redux';

import './FilterButton.css';

import { setFilter } from '../../store/filters/filterActions';

const FilterButton = ({ filter, currentFilter, children, setFilter }) => {
  return (
    <button
      type='button'
      onClick={() => setFilter(filter)}
      className={`footer--filter-btn ${
        currentFilter === filter ? 'active' : ''
      }`}
    >
      {children}
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(null, mapDispatchToProps)(FilterButton);
