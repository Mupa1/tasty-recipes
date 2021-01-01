import React from 'react';
import dotenv from 'dotenv';

dotenv.config();

class RecipeList extends React.Component {
  async componentDidMount() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pasta`)
      .then(res => res.json())
      .catch(error => error);
    console.log(response);
  }

  render() {
    return (
      <h1>New recipe</h1>
    );
  }
}

export default RecipeList;
