import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Recipe from '../../components/Recipe/Recipe';

afterEach(cleanup);

const recipe = {
  title: 'Sample Title',
  image: 'sample.jpg',
};

describe('Recipe', () => {
  it('matches Recipe snapshot', () => {
    const recipes = renderer.create(<Recipe recipe={recipe} />);
    const tree = recipes.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a title', () => {
    const { queryAllByTestId } = render(
      <Recipe recipe={recipe} />,
    );
    const title = queryAllByTestId('title');
    expect(title[0]).toBeTruthy();
  });

  it('renders an image', () => {
    const { queryAllByTestId } = render(
      <Recipe recipe={recipe} />,
    );
    const image = queryAllByTestId('image');
    expect(image[0]).toBeTruthy();
  });

  it('renders a title correctly', () => {
    const { queryAllByTestId } = render(
      <Recipe recipe={recipe} />,
    );
    const title = queryAllByTestId('title');
    expect(title[0]).not.toBeFalsy();
  });

  it('renders an image correctly', () => {
    const { queryAllByTestId } = render(
      <Recipe recipe={recipe} />,
    );
    const image = queryAllByTestId('image');
    expect(image[0]).not.toBeFalsy();
  });
});
