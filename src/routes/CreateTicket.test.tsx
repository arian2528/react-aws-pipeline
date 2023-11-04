import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateTicket from './CreateTicket';

describe('CreateTicket', () => {
    test('renders display Create Ticket', () => {
        render(<CreateTicket/>);
        const linkElement = screen.getByText(/Create Ticket/i)
        expect(linkElement).toBeInTheDocument();
    });
});