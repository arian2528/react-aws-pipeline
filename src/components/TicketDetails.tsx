import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import TicketDescription from "./TicketDescription";
import TicketResponses from "./TicketResponses";

interface TicketDetailsProps {
    description?: string;
    responses?: string[];
}

const TicketDetails = ({description, responses}: TicketDetailsProps) => {
    
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            
        >
            <TicketDescription description={description}/>
            <TicketResponses responses={responses}/>
        </Box>
    );
}

export default TicketDetails;