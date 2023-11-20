import { getCloudinaryKey, getCloudinaryUrl } from "./Services/Cloudinary";
import { handleTextFileAsBinaryString } from "./Utils";

export async function PostUploadFile(cloudService: string,  file: File, setProgress: (percentage: number) => void) {
    const url = getCloudinaryUrl();
    const key = getCloudinaryKey();
    let fileAsBinary: string;

    console.log('file', file);

    if (file.type === 'text') { 
      fileAsBinary = await handleTextFileAsBinaryString(file) as string; 
    }
  
    return new Promise<string>((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
  
      xhr.onload = () => {
        const resp = JSON.parse(xhr.responseText);
        res(resp.secure_url);
      };
      xhr.onerror = (evt) => rej(evt);
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentage = (event.loaded / event.total) * 100;
          setProgress(Math.round(percentage));
        }
      };
  
      const formData = new FormData();

      if (file.type === 'image/*') formData.append('resource_type', 'image');
      if (file.type === 'video/*') formData.append('resource_type', 'video');
      if (file.type === 'text') formData.append('resource_type', 'raw');
      if (cloudService === 'cloudinary') formData.append('upload_preset', key);
  

      if (file.type !== 'text') { 
        formData.append('file', file);
      } else {
        formData.append('file', fileAsBinary);
      }

      xhr.send(formData);
    });
  }