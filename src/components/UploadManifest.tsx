import { FormLabel, Box, Typography, Button, Divider, Theme } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import React, { useCallback, useEffect, useState } from "react";
import { SubmitButton } from "./UploadModal";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { PostUploadFile } from "./UploadFile/PostUploadFile";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import UploadFileProgressBar from "./UploadFile/UploadFileProgressBar";
import styled from 'styled-components'
import { AWSUploadFile } from "./UploadFile/AWSUploadFile";


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: '4px';
    height: '100%';
    width: '100%';
    border: '2px dashed';
    // transform: 'scale(4)';
    borderRadius: '2px';
    marginBottom: '10px';
    `;

const dropzone = {
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

export function UploadManifest () {
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState<File | null>(null);
    const [uploadResourceUrl, setUploadResourceUrl] = useState<string | null>(null);
    const [errorRetrievingImageFromServer, setErrorRetrievingImageFromServer] = useState<boolean>(false);
    
    const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
        if (acceptedFiles.length > 0) {
            console.log(acceptedFiles[0]);
            setProgress(0);
            setFile(acceptedFiles[0]);
            setErrorRetrievingImageFromServer(false);
            setUploadResourceUrl(null);
        }
    }, []);

    async function upload () {
        if (!file) return
        // await AWSUploadFile(file, setProgress);
        const url = await PostUploadFile('cloudinary' ,file, setProgress);
        setUploadResourceUrl(url);
    }

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        // accept: ['image/*', '.pdf'],
        // accept: ['.pdf', '.csv'],
        maxSize: 30000 * 1024, // 30MB
        multiple: false,
    });

    const onDelete = () => {
        setFile(null);
        setProgress(0);
        setErrorRetrievingImageFromServer(false);
        setUploadResourceUrl(null);
    }
    
    const handleImageLoadError = () => {
        setErrorRetrievingImageFromServer(true);
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <FormLabel sx={{color: 'primary.dark', fontWeight: 'fontWeightBold'}} id="upload-manifest">Select a manifest that you'd like to import</FormLabel>
            
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid', borderRadius: 2, marginTop: 1, padding: 1, height: '200px'}}>
                { uploadResourceUrl  && file
                ? errorRetrievingImageFromServer
                    ? <span>Can't retrieve data from server</span>
                    : <img src={`${uploadResourceUrl}?w=248&fit=crop&auto=format`} alt={file.name} loading="lazy" onError={handleImageLoadError}/>
                :
                <React.Fragment>
                <Box sx={dropzone}>
                    <StyledDiv {...getRootProps()}>
                        <input {...getInputProps()} />
                        <TextSnippetIcon  sx={{fontSize: '25px', color: "warning.main"}}/>
                        <Typography variant="body1" sx={{color: 'primary.dark', paddingTop: 1}}>Drag & Drop here or <strong>Browse</strong></Typography>
                    </StyledDiv>
                </Box>
                <SubmitButton variant="contained" type="button" onClick={() => upload()}>Upload Manifest</SubmitButton>
                </React.Fragment>
                }
            </Box>
            <Divider sx={{marginTop: '20px', marginBottom: '20px', width: '100%'}} />
            {file && <UploadFileProgressBar file={file} progress={progress} onDelete={onDelete} />}
            {file && <Divider sx={{marginTop: '20px', marginBottom: '20px', width: '100%'}} />}
        </Box>
    );
}
