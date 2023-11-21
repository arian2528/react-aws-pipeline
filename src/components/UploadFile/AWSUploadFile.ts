import AWS from 'aws-sdk'

const S3_BUCKET: string = process.env.REACT_APP_WS_BUCKET_NAME || '';
const REGION: string = process.env.REACT_APP_AWS_REGION || '';

const creds: {accessKeyId: string, secretAccessKey: string} = {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY || '',
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY || ''
}

AWS.config.update(creds)

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

export const AWSUploadFile = async (file: File, setProgress: (percentage: number) => void) => {
    const params: {
        ACL: string;
        Body: File;
        Bucket: string;
        Key: string;
    } = {
        ACL: 'public-read',
        Body: file,
        Bucket: S3_BUCKET,
        Key: file.name,
    }

    myBucket.putObject(params)
        .on('httpUploadProgress', (evt) => {
            setProgress(Math.round((evt.loaded / evt.total) * 100))
        })
        .on('httpDone', (evt) => {
            console.log(evt)
        })
        .send((err) => {
            if (err) console.log(err)
        })
}