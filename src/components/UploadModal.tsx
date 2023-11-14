import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Divider, FormControl, Grid, IconButton, InputLabel, Select, Stack, styled } from '@mui/material';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, green, yellow } from '@mui/material/colors';
import SelectImportName from './SelectImportName';
import ScheduleUsingSocialDistancing from './ScheduleUsingSocialDistancing';
import LocationChecking from './LocationChecking';
import ClientIdentification from './ClientIdentification';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
    textColor: '#0d47a1', 
    fontWeight: '600',
};

const TitleStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    width: '100%',
    marginBottom: '50px',
}

const theme = createTheme({
    palette: {
      primary: {
            main: blue[700],
            light: blue[200],
            dark: blue[900],
            contrastText: '#000000',
        },
      secondary: {
            main: green[500],
            light: green[200],
            dark: green[900],
            contrastText: '#000000',
        },
        warning: {
            main: yellow[500],
            light: yellow[200],
            dark: yellow[900],
            contrastText: '#000000',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
        fontWeightBold: 600,
    },
  });

interface ModalProps {
    open: boolean;
    handleClose: () => void;
}

export const UploadModal = ({open, handleClose}: ModalProps) => {

    return ( 
        <div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                timeout: 500,
            },
            }}
        >
            <Fade in={open}>
                <Box sx={style} fontWeight="fontWeightBold">
                    <ThemeProvider theme={theme}>
                        <IconButton sx={{ fontSize: 20 }} onClick={handleClose}><DisabledByDefaultRoundedIcon sx={{ color: 'primary.dark'}} /></IconButton>
                        <Box sx={TitleStyle}>
                            <Typography color='primary.dark' align='center' variant="h4" component="h2" paddingBottom={1} borderBottom='1px solid rgba(0, 0, 0, .12)' fontWeight='fontWeightBold'>
                                Document upload
                            </Typography>
                        </Box>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={7}>
                                <SelectImportName />
                                <Divider sx={{marginTop: '20px', marginBottom: '20px', width: '50%'}} />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <ScheduleUsingSocialDistancing />
                                <Divider sx={{marginTop: '20px', marginBottom: '20px', width: '70%'}} />
                                <LocationChecking />
                                <Divider sx={{marginTop: '20px', marginBottom: '20px', width: '70%'}} />
                                <ClientIdentification />
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                </Box>
            </Fade>
        </Modal>
        </div>
    )
}