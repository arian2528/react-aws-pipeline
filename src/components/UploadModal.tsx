import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, ButtonProps, Divider, FormControl, Grid, IconButton, InputLabel, Select, Stack, styled } from '@mui/material';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, green, yellow, orange } from '@mui/material/colors';
import SelectImportName from './SelectImportName';
import ScheduleUsingSocialDistancing from './ScheduleUsingSocialDistancing';
import LocationChecking from './LocationChecking';
import ClientIdentification from './ClientIdentification';
import ElapseDataChecking from './ElapseDataChecking';
import ToleranceWindow from './ToleranceWindow';
import {UploadManifest} from './UploadManifest';
import theme from '../styles/theme';

const modal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
    textColor: '#0d47a1', 
    fontWeight: '600',
    padding: '10px 10px'
};

const container = {
    padding: '0 80px 20px'
}

const title = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    width: '100%',
    marginBottom: '50px',
}

interface ModalProps {
    open: boolean;
    handleClose: () => void;
}

export const SubmitButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'white',
    backgroundColor: blue[900],
    '&:hover': {
        backgroundColor: blue[700],
    },
    fontWeight: '600',
    textTransform: 'none',
    width: '200px',
}));

const CancelButton = styled(Button)<ButtonProps>(({ theme }) => ({
    fontWeight: '600',
    textTransform: 'none',
    borderWidth: '3px',
    width: '200px',
}));

export const UploadModal = ({open, handleClose}: ModalProps) => {

    const [importFIleCorrect, setImportFileCorrect] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setImportFileCorrect(true);
        }, 5000);
    }, []);

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
                <Box sx={modal} fontWeight="fontWeightBold">
                    <ThemeProvider theme={theme}>
                    <Stack direction="column" spacing={1} justifyContent='flex-end'>
                        <Box>
                        <IconButton sx={{ color: 'primary.dark' }} onClick={handleClose}><DisabledByDefaultRoundedIcon sx={{ fontSize: '3rem' }} /></IconButton>
                        <Box sx={container}>
                        <Box sx={title}>
                            <Typography color='primary.dark' align='center' variant="h4" component="h2" paddingBottom={1} borderBottom='1px solid rgba(0, 0, 0, .12)' fontWeight='fontWeightBold'>
                                Document upload
                            </Typography>
                        </Box>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={7}>
                                <SelectImportName />
                                <Divider sx={{marginTop: '20px', marginBottom: '20px', width: '50%'}} />
                                <UploadManifest />
                                <ElapseDataChecking />
                                <Divider sx={{marginTop: '20px', marginBottom: '20px', width: '50%'}} />
                                <ToleranceWindow />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <ScheduleUsingSocialDistancing />
                                <Divider sx={{marginTop: '20px', marginBottom: '20px', width: '70%'}} />
                                <LocationChecking />
                                <Divider sx={{marginTop: '20px', marginBottom: '20px', width: '70%'}} />
                                <ClientIdentification />
                            </Grid>
                        </Grid>
                        <Box sx={{...title, marginBottom: '20px'}}>
                            { importFIleCorrect &&
                            <Typography color='primary.dark' align='center' variant="h6" component="h6" paddingTop={4} fontWeight='fontWeightBold'>
                                Data in the import file is correct. Please press Continue to import.
                            </Typography>
                            }
                        </Box>
                        <Stack direction="row" spacing={2} justifyContent='center'>
                            <SubmitButton variant="contained">Continue Import</SubmitButton>
                            <CancelButton variant="outlined" color='warning'>Cancel</CancelButton>
                        </Stack>
                        </Box>
                        </Box>
                    </Stack>
                    </ThemeProvider>
                </Box>
            </Fade>
        </Modal>
        </div>
    )
}