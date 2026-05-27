import { Dispatch, SetStateAction } from "react";
interface OTPCredential extends Credential {
  code: string;
}

interface OTPCredentialRequestOptions extends CredentialRequestOptions {
  otp?: {
    transport: string[];
  };
}

export const autoCompleteCode = (setVerifyCode:Dispatch<SetStateAction<string>>) => {
       if ('OTPCredential' in window) {
      const ac = new AbortController();

      const options: OTPCredentialRequestOptions = {
        otp: { transport: ['sms'] },
        signal: ac.signal,
      };

      navigator.credentials
        .get(options)
        .then((credential) => {
          if (credential) {
            const otpCredential = credential as OTPCredential;
            setVerifyCode(otpCredential.code); 
          }
          ac.abort();
        })
        .catch((err: Error) => {
          console.warn('WebOTP API Error:', err.message);
        });

      
      return () => {
        ac.abort();
      };
    }
}