import { Box, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

interface TicketResponsesProps {
    responses?: string[];
}

const TicketResponses = ({responses}: TicketResponsesProps) => {
    
    return (
        <Stack gap={1}>
            <h4>Responses</h4>
            {(responses && responses.length > 0) ?
                responses.map((response, index) => {
                return (
                    <Typography paragraph key={index}>
                        {response}
                    </Typography>
                );
            }) : <Typography paragraph>No responses</Typography>}
        </Stack>    
    );
}

export default TicketResponses;