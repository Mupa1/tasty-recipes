import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';

import Navbar from '../../components/Navbar/Navbar';

afterEach(cleanup);

it('matches Navbar snapshot', () => {
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('contains Tasty Recipes logo', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
  expect(screen.getByText('Tasty Recipes')).toBeInTheDocument();
});

it('should not render a different logo', () => {
  const { getAllByTestId } = render(
    <Router>
      <Navbar />
    </Router>,
  );
  const result = getAllByTestId('navbar');
  expect(result[0]).not.toHaveTextContent('nothing');
});
