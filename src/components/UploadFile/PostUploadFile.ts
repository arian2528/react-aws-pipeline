export function PostUploadFile(file: File, setProgress: (percentage: number) => void) {
    const url = 'https://api.cloudinary.com/v1_1/hzxyensd5/image/upload';
    const key = 'docs_upload_example_us_preset';
  
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
      formData.append('file', file);
      formData.append('upload_preset', key);
  
      xhr.send(formData);
    });
  }