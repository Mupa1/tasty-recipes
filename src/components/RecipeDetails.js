import React from 'react';
import PropTypes from 'prop-types';
import Interweave from 'interweave';

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: null,
    };
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const apiKey = process.env.REACT_APP_API_KEY;
    const id = match.params.recipe_id;
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`)
      .then(res => res.json())
      .catch(error => error);
    this.setState({
      recipe: response,
    });
  }

  render() {
    const { recipe } = this.state;

    const recipeDetails = recipe ? (
      <div className="text-center">
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <p>
          Servings:
          {' '}
          {recipe.servings}
        </p>
        <p>
          Ready In
          {' '}
          {recipe.readyInMinutes}
          {' '}
          Minutes
        </p>
        <a href={recipe.spoonacularSourceUrl} target="blank">Jump to Ingredients & instructions</a>
        <p><Interweave content={recipe.summary} /></p>
      </div>
    ) : (
      <div>Loading post...</div>
    );
    return (
      <div>
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
