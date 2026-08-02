declare global {
  interface Window {
    AndroidBlobDownloader?: {
      getBase64FromBlobData: (
        base64Data: string | ArrayBuffer | null,
        mimeType: string,
        fileName: string
      ) => void;
    };
  }
}

export {};