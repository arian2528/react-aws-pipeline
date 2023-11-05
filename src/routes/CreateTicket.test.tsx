import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateTicket from './CreateTicket';

describe('CreateTicket', () => {
    test('renders display Create Ticket', () => {
        render(<CreateTicket/>);
        const linkElement = screen.getByText(/Create Ticket/i)
        expect(linkElement).toBeInTheDocument();
    });

    test('renders button Submit Ticket in form', () => {
        render(<CreateTicket/>);
        const linkElement = screen.queryByTestId('buttonSubmit')
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('type', 'submit');
        expect(linkElement).toHaveTextContent('Submit Ticket');
    });

});