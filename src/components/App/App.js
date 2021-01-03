import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RecipeList from '../../containers/RecipeList';
import Navbar from '../Navbar/Navbar';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const App = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={RecipeList} />
        <Route path="/:recipe_id" component={RecipeDetails} />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
