import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Recipe from '../components/Recipe/Recipe';
import { searchRecipe, updateFilter } from '../actions/index';
import RecipeFilter from '../components/RecipeFilter/RecipeFilter';
import apiKey from '../api/apiKey';

class RecipeList extends React.Component {
  async componentDidMount() {
    const { filter } = this.props;
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey()}&query=${filter}`)
      .then(res => res.json())
      .catch(error => error);
    this.fetchRecipes(response.results);
  }

  async componentDidUpdate(prevProps) {
    const { filter } = this.props;
    if (prevProps.filter !== filter) {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey()}&query=${filter}`)
        .then(res => res.json())
        .catch(error => error);
      this.fetchRecipes(response.results);
    }
  }

  fetchRecipes = recipes => {
    const { handleRecipesSearch } = this.props;
    handleRecipesSearch(recipes);
  }

  render() {
    const { recipes, handleFilter, filter } = this.props;

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
      <div className="text-center">
        <RecipeFilter updateFilter={handleFilter} filter={filter} />
        <div className="d-flex flex-wrap justify-content-center">
          {recipeList}
        </div>
      </div>
    );
  }
}

RecipeList.propTypes = {
  handleRecipesSearch: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ recipes: state.recipes, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  handleRecipesSearch: recipes => {
    dispatch(searchRecipe(recipes));
  },
  handleFilter: filter => {
    dispatch(updateFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
