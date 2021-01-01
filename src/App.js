import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RecipeList from './containers/RecipeList';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={RecipeList} />
    </div>
  </BrowserRouter>

);

export default App;
