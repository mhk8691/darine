'use client';
import React, { ReactNode, useState } from 'react';
import Field from '../Field';
import ActionButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
import { loginOtp } from '@/lib/auth';
import SubmitButton from '../SubmitButton';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { isAxiosError } from 'axios';

interface Props {
  children: ReactNode;
}

export default function LoginOtpForm({ children }: Props) {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleLogin = async () => {
    try {
      const res = await loginOtp(phoneNumber);
      if (res.status === 200) {
              showSnackbar(res.data.message, true);
              router.push(`/login/verify-otp/?phone=${phoneNumber}&type=login`);
            }
    } catch (err) {
      if (isAxiosError(err)){
        showSnackbar(err.response?.data.message)
      }
    }
  };
  return (
    <>
      <Field value={phoneNumber} setValue={setPhoneNumber} label="شماره موبایل" />

      {children}
      <SubmitButton title={'ادامه'} isDisable={false} handleSubmit={handleLogin} />
    </>
  );
}
