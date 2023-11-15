import { FormLabel, Typography } from "@mui/material"
import React, { Fragment } from "react"

const LocationChecking = () => {
    const locationCheckingMockedDefault = 'All Available!';
    
    return (
        <Fragment>
            <FormLabel sx={{color: 'primary.dark', fontWeight: 'fontWeightBold'}} id="location-checking">Location Checking:</FormLabel>
            <Typography aria-labelledby="location-checking" variant="body1" sx={{color: 'secondary.dark', fontWeight: 'fontWeightBold', paddingTop: 1}}>{locationCheckingMockedDefault}</Typography>
        </Fragment>
    )
}

export default LocationChecking;