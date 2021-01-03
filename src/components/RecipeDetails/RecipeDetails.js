import React from 'react';
import PropTypes from 'prop-types';
import Interweave from 'interweave';

import styles from './RecipeDetails.module.css';
import apiKey from '../../api/apiKey';

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: null,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const id = match.params.recipe_id;
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey()}`)
      .then(res => res.json())
      .catch(error => error);
    this.setState({
      recipe: response,
    });
  }

  render() {
    const { recipe } = this.state;

    const recipeDetails = recipe ? (
      <div className={styles.detailsContainer}>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <p className="m-0">
          Servings:
          {' '}
          {recipe.servings}
        </p>
        <p className="m-0">
          Ready In
          {' '}
          {recipe.readyInMinutes}
          {' '}
          Minutes
        </p>
        <a className="text-primary" href={recipe.spoonacularSourceUrl} target="blank">Jump to Ingredients & Instructions</a>
        <p>
          <strong>SUMMARY: </strong>
          <Interweave content={recipe.summary} />
        </p>
      </div>
    ) : (
      <div>Loading post...</div>
    );
    return (
      <div className={styles.outerBox}>
        <h1>{recipeDetails}</h1>
      </div>
    );
  }
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipe_id: PropTypes.string,
    }),
  }).isRequired,
};

export default RecipeDetails;
