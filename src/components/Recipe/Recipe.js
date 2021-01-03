import React from 'react';
import PropTypes from 'prop-types';

import styles from './Recipe.module.css';

const Recipe = ({ recipe }) => {
  const { title, image } = recipe;

  return (
    <div className={styles.recipeContainer}>
      <div className={styles.imgContainer}>
        <img src={image} alt={title} />
      </div>
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
