import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react'
import BasicTable from '../components/BasicTable';
import styled from 'styled-components';
import TicketDetails from '../components/TicketDetails';
import { StatusE, TicketI } from '../types';
import { ticketsMocks } from '../mocks/ticketsMocks';

const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: '2%',
    gap: '10px',
});

const BrowseTickets = () => {

    const [ticketSelected, setTicketSelected] = React.useState<TicketI | null>(null);
    
    // get the tickets
    const tickets: TicketI[] = ticketsMocks;

    useEffect(() => {
        if (tickets && tickets.length > 0) {
            setTicketSelected(tickets[0]);
        }
    }, [tickets]);
    
    const handleStatusChange = (ticketId: string, status: StatusE) => {
        console.log(ticketId, status);
    }

    const handleSelectTicket = (ticketId: string) => {
        const ticketSelected = tickets.find(ticket => ticket.id === ticketId);
        if (!ticketSelected) return;
        setTicketSelected(ticketSelected);
    }

    return (
        <React.Fragment>
            <Wrapper>
                <Stack gap={6}>
                    <h1>Browse tickets</h1>
                    <Box sx={{ display: 'flex' }}>
                        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} >
                            <BasicTable tickets={tickets} ticketSelected={ticketSelected} handleStatusChange={handleStatusChange} handleSelectTicket={handleSelectTicket}/>
                        </Box>
                        <TicketDetails description={ticketSelected?.description} responses={ticketSelected?.responses}/>
                    </Box>
                </Stack>
            </Wrapper>
        </React.Fragment>
    )
}

export default BrowseTickets;