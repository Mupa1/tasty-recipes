import React from 'react';
import PropTypes from 'prop-types';

import './RecipeFilter.module.css';

const RecipeFilter = ({ updateFilter, filter }) => {
  const categories = [
    'Chicken',
    'Beef',
    'Pizza',
    'Pasta',
    'Fish',
  ];

  const handleFilterChange = e => {
    updateFilter(e.target.value);
  };

  return (
    <select onChange={handleFilterChange} name="category" defaultValue={filter}>
      {categories.map(category => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
};

RecipeFilter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default RecipeFilter;
