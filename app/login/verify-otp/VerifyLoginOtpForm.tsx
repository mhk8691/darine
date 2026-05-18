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
  const handleLoginVerifyOtp = async () => {
    try {
      const res = await verifyLoginOtp(phoneNumber, verifyCode);
      showSnackbar(res.data.message)
        router.push('/dashboard');
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message, false);
      }
    }
  };
  return (
    <>
      <Field value={verifyCode} setValue={setVerifyCode} label="کد تایید" />
      <SendCode phoneNumber={phoneNumber} />
      <SubmitButton title={'تایید'} isDisable={false} handleSubmit={handleLoginVerifyOtp} />
    </>
  );
}
