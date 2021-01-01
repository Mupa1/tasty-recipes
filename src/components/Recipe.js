import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => {
  const { title, image } = recipe;

  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Recipe;
