import React from 'react';
import { render, screen } from '@testing-library/react';
import {SideBar} from './SideBar';

test('renders learn react link', () => {
  const items = [{name: `test`, href: `/test`}]
  render(<SideBar items={items} />);
  
  const anchorElements = screen.getAllByRole(`nav`);
  expect(anchorElements[0]).toHaveTextContent('test');
  expect(anchorElements[0]).toHaveAttribute(`href`, `/test`);
});