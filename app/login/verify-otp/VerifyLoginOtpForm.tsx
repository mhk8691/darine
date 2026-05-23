'use client';
import React, { useState } from 'react';
import Field from '../Field';
import SendCode from '../SendCode';
import { verifyLoginOtp } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { useRouter } from 'next/navigation';
import SubmitButton from '../SubmitButton';

interface Props {
  phoneNumber: string;
}

export default function VerifyLoginOtpForm({ phoneNumber }: Props) {
  const [verifyCode, setVerifyCode] = useState('');
  const router = useRouter();
   const [isLoading,setIsLoading] = useState(false)
  const handleLoginVerifyOtp = async () => {
    try {
      setIsLoading(true)
      const res = await verifyLoginOtp(phoneNumber, verifyCode);
      showSnackbar(res.data.message,true)
        router.push('/dashboard');
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message, false);
      }
    }finally{
      setIsLoading(false)
    }
  };
  return (
    <>
      <Field value={verifyCode} setValue={setVerifyCode} label="کد تایید" />
      <SendCode phoneNumber={phoneNumber} />
      <SubmitButton title={'تایید'} isLoading={isLoading} handleSubmit={handleLoginVerifyOtp} />
    </>
  );
}
