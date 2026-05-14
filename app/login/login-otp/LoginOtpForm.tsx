'use client'
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { loginOtp } from '@/lib/auth';
import { isAxiosError } from 'axios';
import React, { ReactNode, useState } from 'react'
import Field from '../Field';
import SubmitButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
interface Props {
  children: ReactNode;
}

export default function LoginOtpForm({ children }: Props) {
     const router = useRouter();
      const [mobile, setMobile] = useState('');
      const handleLogin = async () => {
        try {
          const res = await loginOtp(mobile);
          if (res.status === 200) {
            showSnackbar(res.data.message, true);
            router.push(`/login/verify-otp/?phone=${mobile}&type=login`);
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
         <SubmitButton title={'ادامه'} isDisable={false} handleSubmit={handleLogin} />
   </>
  )
}
