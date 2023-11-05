import React from 'react';
import { render, screen } from '@testing-library/react';
import BrowseTickets from './BrowseTickets';

describe('BrowseTickets', () => {

    test('renders display Browse tickets', () => {
        render(<BrowseTickets/>);
        const linkElement = screen.getByText(/Browse tickets/i)
        expect(linkElement).toBeInTheDocument();
        
    });
});