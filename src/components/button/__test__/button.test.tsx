import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Button, { addNumbers } from '../index';

// Unit test
test('renders button with correct label', () => {
  const label = 'Click me';
  const { getByText } = render(<Button label={label} />);
  const button = getByText(label);

  expect(button).toBeInTheDocument();
});

// Snapshot test
test('matches snapshot', () => {
  const label = 'Click me';
  const { asFragment } = render(<Button label={label} />);
  expect(asFragment()).toMatchSnapshot();
});

// Event handling test
test('calls onClick prop when button is clicked', () => {
  const onClickMock = jest.fn();
  const label = 'Click me';
  const { getByText } = render(<Button label={label} onClick={onClickMock} />);
  const button = getByText(label);

  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});

// Unit test for the pure function
test('adds two numbers correctly', () => {
  expect(addNumbers(2, 3)).toBe(5);
  expect(addNumbers(-1, 1)).toBe(0);
  expect(addNumbers(0, 0)).toBe(0);
});
