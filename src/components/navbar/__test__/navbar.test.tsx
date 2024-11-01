import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Navbar from '../index';

// Unit test
test('renders Navbar component with links', () => {
  render(<Navbar />);

  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about/i);
  const externalLink = screen.getByText(/external link/i);
  const links = screen.getAllByRole('link');

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(externalLink).toBeInTheDocument();
  expect(links).toHaveLength(3);
});

// Snapshot test
test('matches snapshot', () => {
  render(<Navbar />);

  expect(screen.getByTestId('navbar')).toMatchSnapshot();
});
