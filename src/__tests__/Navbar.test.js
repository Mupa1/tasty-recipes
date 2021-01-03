import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Navbar from '../components/Navbar/Navbar';

it('Navbar component renders correctly', () => {
  const tree = renderer
    .create(<Navbar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Navbar', () => {
  test('contains Tasty Recipes logo', () => {
    render(<Navbar />);
    expect(screen.getByText('Tasty Recipes')).toBeInTheDocument();
  });
});
