import axios from "axios";  
import { handleTextFileAsBinaryString } from "./Utils";

export const AWSUploadFile = async (file: File, setProgress: (percentage: number) => void) => {

    const API_ENDPOINT = 'https://o0xy3ykrac.execute-api.us-east-1.amazonaws.com/default/get-preSigned-url-for-text-file-upload-service';
    // GET request: presigned URL
    const response = await axios({
      method: "GET",
      url: API_ENDPOINT,
    });
    
    const fileAsBinary = await handleTextFileAsBinaryString(file) as string; 
    // PUT request: upload file to S3
    const result = await fetch(response.data.uploadURL, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'image/jpeg',
        },
        method: "PUT",
        body: fileAsBinary,
    });

    

    // return new Promise<string>((res, rej) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('PUT', response.data.uploadURL, true);
    
    //     xhr.onload = () => {
    //       const resp = JSON.parse(xhr.responseText);
    //       console.log(resp)
    //       res(resp);
    //     };
    //     xhr.onerror = (evt) => rej(evt);
    //     xhr.upload.onprogress = (event) => {
    //       if (event.lengthComputable) {
    //         const percentage = (event.loaded / event.total) * 100;
    //         setProgress(Math.round(percentage));
    //       }
    //     };
  
    //     xhr.send(fileAsBinary);
    //   });
  };