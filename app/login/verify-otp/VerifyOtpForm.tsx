'use client';
import React, { useEffect, useState } from 'react';
import Field from '../Field';
import SendCode from '../SendCode';
import { verifyLoginOtp } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { useRouter } from 'next/navigation';
import SubmitButton from '../SubmitButton';
import { autoCompleteCode } from '../autoCompleteCode';

interface Props {
  phoneNumber: string;
}

export default function VerifyOtpForm({ phoneNumber }: Props) {
  const [verifyCode, setVerifyCode] = useState('');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginVerifyOtp = async (code?: string) => {
    const finalCode = code ?? verifyCode;
    try {
      setIsLoading(true);
      const res = await verifyLoginOtp(phoneNumber, finalCode);
      showSnackbar(res.data.message, 'success');
      router.push('/dashboard');
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (error.status === 404 && error.response?.data.message.need_register) {
          router.push(`/login/register/?phone=${phoneNumber}`);
          showSnackbar(error.response?.data.message.message, 'warning');
        } else {
          showSnackbar(error.response?.data.message.message);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cleanup = autoCompleteCode(setVerifyCode, (code) => {
      handleLoginVerifyOtp(code);
    });
    return cleanup;
  }, []);

  return (
    <>
      <Field type='number' value={verifyCode} setValue={setVerifyCode} label="کد تایید" />
      <SendCode phoneNumber={phoneNumber} />
      <SubmitButton title={'تایید'} isLoading={isLoading} handleSubmit={handleLoginVerifyOtp} />
    </>
  );
}