export function formatBytes(bytes: number, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export function handleTextFileAsBinaryString(file: File) {
    return new Promise<string>((res, rej) => {
        const reader = new FileReader();
        reader.onload = (evt) => {
            res(evt.target?.result as string);
        };
        reader.onerror = (evt) => rej(evt);
        reader.readAsBinaryString(file);
    });
}

export function handleTextFileAsArrayBuffer(file: File) {
    return new Promise<ArrayBuffer>((res, rej) => {
        const reader = new FileReader();
        reader.onload = (evt) => {
            res(evt.target?.result as ArrayBuffer);
        };
        reader.onerror = (evt) => rej(evt);
        reader.readAsArrayBuffer(file);
    });
}