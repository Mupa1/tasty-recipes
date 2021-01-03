import React from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <select onChange={handleFilterChange} name="category" defaultValue={filter}>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

RecipeFilter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default RecipeFilter;
