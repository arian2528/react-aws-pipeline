import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Upload Import', () => {
  render(<App />);
  const linkElement = screen.getByText(`Upload Import`);
  expect(linkElement).toBeInTheDocument();
});
