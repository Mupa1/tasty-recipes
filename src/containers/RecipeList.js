import React from 'react';
import { Link } from 'react-router-dom';

import Recipe from '../components/Recipe';

class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };
  }

  async componentDidMount() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pasta`)
      .then(res => res.json())
      .catch(error => error);
    this.setState({
      recipes: response.results,
    });
  }

  render() {
    const { recipes } = this.state;

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

export default RecipeList;
