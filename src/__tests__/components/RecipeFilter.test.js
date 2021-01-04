import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import RecipeFilter from '../../components/RecipeFilter/RecipeFilter';

afterEach(cleanup);

it('matches RecipeFilter snapshot', () => {
  const tree = renderer
    .create(<RecipeFilter updateFilter={() => 'mock'} filter="Pizza" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a select input', () => {
  const { queryAllByTestId } = render(
    <RecipeFilter updateFilter={() => 'mock'} filter="Pizza" />,
  );
  const result = queryAllByTestId('categories');
  expect(result).toBeTruthy();
  expect(result[0]).toHaveTextContent('Pizza');
});
