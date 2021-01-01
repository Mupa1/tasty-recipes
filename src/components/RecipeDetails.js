import React from 'react';
import PropTypes from 'prop-types';

class RecipeDetails extends React.Component {
  componentDidMount = async () => {
    const { match } = this.props;
    const apiKey = process.env.REACT_APP_API_KEY;
    const id = match.params.recipe_id;
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`)
      .then(res => res.json())
      .catch(error => error);
    console.log(response);
  }

  render() {
    return (
      <div>
        <h1>Recipe details</h1>
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
