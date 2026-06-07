'use client';
import React, { ReactNode, useState } from 'react';
import Field from '../Field';
import { useRouter } from 'next/navigation';
import { forgetPasswordRequest } from '@/lib/auth';
import SubmitButton from '../SubmitButton';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { isAxiosError } from 'axios';

interface Props {
  children: ReactNode;
}

export default function ForgetPasswordForm({ children }: Props) {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading,setIsLoading] = useState(false)

  const handleClick = async () => {
    try {
      setIsLoading(true)
      const res = await forgetPasswordRequest(phoneNumber);
      if (res.status === 200) {
        showSnackbar(res.data.message, true);
        router.push(`/login/forget-verify/?phone=${phoneNumber}`);
      }
    } catch (err) {
      if (isAxiosError(err)) {
        showSnackbar(err.response?.data.message);
      }
    }
    finally{
      setIsLoading(false)
    }
  };
  return (
    <>
      <Field value={phoneNumber} setValue={setPhoneNumber} label="شماره موبایل" />
      {children}
      <SubmitButton title={'ادامه'} isLoading={isLoading} handleSubmit={handleClick} />
    </>
  );
}
