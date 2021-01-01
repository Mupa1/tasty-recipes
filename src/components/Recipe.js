import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => {
  const { id, title, imgageUrl } = recipe;

  return (
    <>
      <div>{imgageUrl}</div>
      <h3>{title}</h3>
      <p>{id}</p>
    </>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imgageUrl: PropTypes.string,
  }).isRequired,
};

export default Recipe;
