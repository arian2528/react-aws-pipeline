import React, { Fragment } from "react"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Divider, FormControlLabel, FormLabel, Grid, Stack, Switch, SwitchProps, Typography, styled } from "@mui/material"

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 52,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: '2px 10px',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' 
          ? '#177ddc'
          : '#0d47a1',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const ToleranceWindow = () => {
    return (
        <Fragment>
            <FormLabel sx={{color: 'primary.dark', fontWeight: 'fontWeightBold'}} id="tolerance-window">Tolerance Window:</FormLabel>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, height: '20px' }}>
                <Stack direction="row" spacing={2} alignItems="center" height='20px'>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IOSSwitch sx={{ m: 1 }} defaultChecked onClick={() => console.log()}/>
                    <Typography color='primary.dark'>Toggle ON</Typography>
                  </Stack>
                  <Divider orientation="vertical" variant="middle" sx={{background: 'black'}} flexItem />
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AccessTimeIcon sx={{color: 'primary.dark', height: '2em'}} />
                    <Typography color='primary.dark'>Select Tolerance Level</Typography>
                  </Stack>
                </Stack>
              </Box>

        </Fragment>
    )
}

export default ToleranceWindow;