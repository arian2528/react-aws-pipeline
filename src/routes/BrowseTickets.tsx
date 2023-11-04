import { Stack } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: '2%',
    gap: '10px',
});

const BrowseTickets = () => {

    return (
        <React.Fragment>
            <Wrapper>
                <Stack gap={6}>
                    <h1>Browse tickets</h1>
                </Stack>
            </Wrapper>
        </React.Fragment>
    )
}

export default BrowseTickets;