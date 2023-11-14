import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import React, { Fragment } from "react";

interface ScheduleUsingSocialDistancingOptions {
    value: string;
    label: string;
}

const ScheduleUsingSocialDistancing = () => {

    const scheduleUsingSocialDistancingOptions: ScheduleUsingSocialDistancingOptions[] = [
        {value: 'true', label: 'Yes'},
        {value: 'false', label: 'No'},
    ];

    const [scheduleUsingSocialDistancing, setScheduleUsingSocialDistancing] = React.useState<string>('false');

    return (
        <Fragment>
            <FormControl>
            <FormLabel sx={{color: 'primary.dark', fontWeight: 'fontWeightBold'}} id="schedule-using-social-distancing-radio-buttons-group-label">Split schedule using social distancing?</FormLabel>
            <RadioGroup
                row
                aria-labelledby="schedule-using-social-distancing-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={scheduleUsingSocialDistancing}
                onChange={(event) => setScheduleUsingSocialDistancing(event.target.value)}
                sx={{color: 'primary.dark',  fontWeight: 'fontWeightBold'}}
            >
                {scheduleUsingSocialDistancingOptions && scheduleUsingSocialDistancingOptions.map((option) => (
                    <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
                ))}
            </RadioGroup>
            </FormControl>
        </Fragment>
    )
}

export default ScheduleUsingSocialDistancing;