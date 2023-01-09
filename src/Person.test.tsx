import React from 'react';
import { render, screen } from '@testing-library/react';
import {Person} from './Person';

test('renders learn react link', () => {
  render(<Person name={'Jack'} />);
  const linkElement = screen.getByText(/Name: Jack/i);
  expect(linkElement).toBeInTheDocument();
  const divElement = screen.getByRole("contentInfo")
  expect(divElement).toHaveTextContent(`Name: Jack`)
  expect(divElement).toHaveAttribute(`role`, `contentInfo`)
});