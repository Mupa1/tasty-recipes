import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RecipeList from './containers/RecipeList';
import Navbar from './components/Navbar';
import RecipeDetails from './components/RecipeDetails';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={RecipeList} />
        <Route path="/:recipe_id" component={RecipeDetails} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default App;
