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
          <strong>
            Servings:
            {' '}
            {recipe.servings}
          </strong>
        </p>
        <p className="m-0">
          <strong>
            Ready In
            {' '}
            {recipe.readyInMinutes}
            {' '}
            Minutes
          </strong>
        </p>
        <h5><u>INGREDIENTS</u></h5>
        <ul className="p-0">
          {recipe.extendedIngredients.map(ingredients => (
            <li className="p-0 m-0" key={ingredients.id}>{ingredients.originalString}</li>
          ))}
        </ul>
        <h5><u>INSTRUCTIONS</u></h5>
        <p><Interweave content={recipe.instructions} /></p>
        <h5><u>SUMMARY</u></h5>
        <p><Interweave content={recipe.summary} /></p>
      </div>
    ) : (
      <div className="text-center">Loading post...</div>
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
