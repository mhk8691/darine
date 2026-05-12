'use client';
import React, { ReactNode, useState } from 'react';
import Field from '../Field';
import ActionButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
import { signupOtp } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

interface Props {
  children: ReactNode;
}

export default function SignupOtpForm({ children }: Props) {
  const router = useRouter();
  const [mobile, setMobile] = useState('');
  const handleSignup = async () => {
    try {
      const res = await signupOtp(mobile);
      if (res.status === 200) {
        showSnackbar(res.data.message, true);
        router.push(`/login/verify-otp/?phone=${mobile}&type=signup`);
      }
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        showSnackbar(err.response?.data.mobile, false);
      }
    }
  };
  return (
    <>
      <Field value={mobile} setValue={setMobile} label="شماره موبایل" />

      {children}
      <ActionButton title={'ادامه'} isDisable={false} handleSubmit={handleSignup} />
    </>
  );
}
