import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, unmountComponentAtNode } from 'react-dom';
import rootReducer from '../../reducers/index';
import RecipesList from '../../containers/RecipeList';
import 'jest-canvas-mock';

const store = createStore(rootReducer);

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const recipesListSample = {
  results: [{
    id: 1059178,
    title: 'sample title',
    image: 'https://spoonacular.com/recipeImages/1059178-312x231.jpg',
  }, {
    id: 2059178,
    title: 'sample title2',
    image: 'https://spoonacular.com/recipeImages/2059178-312x231.jpg',
  }],
};

describe('RecipesList', () => {
  it('adds an image', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(recipesListSample),
    }));
    await act(async () => {
      render(<Provider store={store}><RecipesList /></Provider>, container);
    });
    expect(container.querySelector('img').src).toBe('https://spoonacular.com/recipeImages/1059178-312x231.jpg');
    global.fetch.mockRestore();
  });

  it('adds a title', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(recipesListSample),
    }));
    await act(async () => {
      render(<Provider store={store}><RecipesList /></Provider>, container);
    });
    expect(container.querySelector('a').textContent).toBe('sample title');
    global.fetch.mockRestore();
  });
});
