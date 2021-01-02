import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Recipe from '../components/Recipe';
import { searchRecipe } from '../actions/index';

class RecipeList extends React.Component {
  async componentDidMount() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=chicken`)
      .then(res => res.json())
      .catch(error => error);
    this.fetchRecipes(response.results);
  }

  fetchRecipes = recipes => {
    const { handleRecipesSearch } = this.props;
    handleRecipesSearch(recipes);
  }

  render() {
    const { recipes } = this.props;

    const recipeList = recipes.length ? (
      recipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/${recipe.id}`}>
            <Recipe recipe={recipe} />
          </Link>
        </div>
      ))
    ) : (
      <div>No recipes Found!</div>
    );

    return (
      <div>
        {recipeList}
      </div>
    );
  }
}

RecipeList.propTypes = {
  handleRecipesSearch: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ recipes: state.recipes });

const mapDispatchToProps = dispatch => ({
  handleRecipesSearch: recipes => {
    dispatch(searchRecipe(recipes));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
