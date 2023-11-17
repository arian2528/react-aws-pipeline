import React from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Button, Grid, IconButton, LinearProgress } from "@mui/material";
import { ProgressBarHeader } from './ProgressBarHeader';
import { formatBytes } from './Utils';

export interface UploadFileProgressBarProps {
  file: File;
  progress: number;
  onDelete: (file: File) => void;
}

const UploadFileProgressBar = ({ file, progress, onDelete }: UploadFileProgressBarProps) => {
    return (
        <React.Fragment>
        
        <Grid container sx={{justify:"space-between", alignItems:"center"}}>
            <Grid item xs={1}><UploadFileIcon color='warning' /></Grid>
            <Grid item xs={10}>
              <Grid item sx={{paddingBottom:1}}>
                <Grid container sx={{justifyContent:"space-between", alignItems:"center", opacity: 0.3}}>
                  <Grid item>{file.name}</Grid>
                  <Grid item>{formatBytes(file.size)}</Grid>
                </Grid>
              </Grid>
              <Grid item><LinearProgress color="warning" variant="determinate" value={progress} /></Grid>
            </Grid>
            <Grid item xs={1} sx={{alignContent: 'left'}}>
              {(progress === 100 && file) &&
              <Button size="small" sx={{fontWeight: 400}} onClick={() => onDelete(file)}>
                <strong>X</strong>
              </Button>
              }
            </Grid>  
        </Grid>
        </React.Fragment>
    );
}

export default UploadFileProgressBar;