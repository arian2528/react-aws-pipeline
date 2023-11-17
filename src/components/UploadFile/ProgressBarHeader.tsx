import React from 'react';
import { Grid } from "@mui/material";
import { formatBytes } from './Utils';

export interface ProgressBarHeaderProps {
  file: File;
}

export function ProgressBarHeader({ file }: ProgressBarHeaderProps) {

    return (
        <Grid container sx={{justifyContent:"space-between", alignItems:"center"}}>
            <Grid item>{file.name}</Grid>
            <Grid item>{formatBytes(file.size)}</Grid>
        </Grid>
    );
}