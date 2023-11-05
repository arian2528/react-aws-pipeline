import { Box, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

interface TicketDescriptionProps {
    description?: string;
}

const TicketDescription = ({description}: TicketDescriptionProps) => {    
    return (
        <Stack gap={1}>
            <h4>Description</h4>
            <Typography paragraph>
                {description ? description : 'No description'}
            </Typography>
        </Stack>
    );
}

export default TicketDescription;