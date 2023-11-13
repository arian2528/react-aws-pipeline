import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Divider, Grid, IconButton, Stack, styled } from '@mui/material';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, green, yellow } from '@mui/material/colors';

const style = {
    position: 'absolute' as 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
    textColor: '#0d47a1', 
};

const TitleStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
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
                <Box sx={style}>
                    <ThemeProvider theme={theme}>
                        <IconButton sx={{ fontSize: 20 }} onClick={handleClose}><DisabledByDefaultRoundedIcon sx={{ color: blue[900]}} /></IconButton>
                        <Box sx={TitleStyle}>
                            <Typography color='primary.dark' align='center' variant="h4" component="h2" paddingBottom={1} borderBottom='1px solid rgba(0, 0, 0, .12)'>
                                Document upload
                            </Typography>
                        </Box>
                        <Grid container spacing={2} sx={{paddingTop: '10px'}}>
                            <Grid item xs={12} md={7}>
                                <Typography align='center' variant="h6" component="h2">
                                    Left side
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Typography align='center' variant="h6" component="h2">
                                    Right side
                                </Typography>
                            </Grid>
                        </Grid>    
                    </ThemeProvider>
                </Box>
            </Fade>
        </Modal>
        </div>
    )
}