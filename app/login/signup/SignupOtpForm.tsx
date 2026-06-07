'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import Field from '../Field';
import ActionButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
import { signupOtp } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { handleLogout } from '@/app/dashboard/profile/ChangePassword';

interface Props {
  children: ReactNode;
}

export default function SignupOtpForm({ children }: Props) {
  const router = useRouter();
  const [mobile, setMobile] = useState('');
   const [isLoading,setIsLoading] = useState(false)
  
  const handleSignup = async () => {
    try {
      setIsLoading(true)
      const res = await signupOtp(mobile);
      if (res.status === 200) {
        showSnackbar(res.data.message, true);
        router.push(`/login/verify-otp/?phone=${mobile}&type=signup`);
      }
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        showSnackbar(err.response?.data.mobile, false);
      }
    }finally{
      setIsLoading(false)
    }
  };
  return (
    <>
      <Field value={mobile} setValue={setMobile} label="شماره موبایل" />

      {children}
      <ActionButton title={'ادامه'} isLoading={isLoading} handleSubmit={handleSignup} />
    </>
  );
}
