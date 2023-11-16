import { FormLabel, Box, Typography, Button } from "@mui/material";
import React from "react";
import { SubmitButton } from "./UploadModal";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const dropAreaStyles = {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // position:'relative',
    margin: '4px',
    height: '100%',
    width: '100%',
    display: 'flex',
    border: 'dashed 1px',
    // transform: 'scale(4)',
    borderRadius: '2px',
    marginBottom: '10px',
}

const UploadManifest = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <FormLabel sx={{color: 'primary.dark', fontWeight: 'fontWeightBold'}} id="upload-manifest">Select a manifest that you'd like to import</FormLabel>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid', borderRadius: 2, marginTop: 1, padding: 1, height: '200px'}}>
                <Box sx={dropAreaStyles}>
                    <TextSnippetIcon  sx={{fontSize: '25px', color: "warning.main"}}/>
                    <Typography variant="body1" sx={{color: 'primary.dark', paddingTop: 1}}>Drag & Drop here or <strong>Browse</strong></Typography>
                 </Box>
                 <SubmitButton variant="contained">Upload Manifest</SubmitButton>
            </Box>        
        </Box>
    );
}

export default UploadManifest;