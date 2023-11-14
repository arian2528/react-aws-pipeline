import { FormLabel, Typography } from "@mui/material";
import React, { Fragment } from "react";

const ElapseDataChecking = () => {
    const elapsedDataCheckingMockedDefault = 'No Elapsed Dates!';
    
    return (
        <Fragment>
            <FormLabel sx={{color: 'primary.dark', fontWeight: 'fontWeightBold'}} id="elapsed-data-checking">Elapsed Data Checking:</FormLabel>
            <Typography aria-labelledby="elapsed-data-checking" variant="body1" sx={{color: 'secondary.dark', fontWeight: 'fontWeightBold'}}>{elapsedDataCheckingMockedDefault}</Typography>
        </Fragment>
    )
}

export default ElapseDataChecking;