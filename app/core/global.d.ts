declare global {
  interface Window {
    AndroidBridge?: {
      getBase64FromBlobData: (
        base64Data: string | ArrayBuffer | null,
        mimeType: string,
        fileName: string
      ) => void;
      notifyUserLogin: (userId?: string) => void;
      notifyUserLogout: () => void;
    };
  }
}

export {};