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
       const [isLoading,setIsLoading] = useState(false)
  
      const handleLogin = async () => {
        try {
          setIsLoading(true)
          const res = await loginOtp(mobile);
          if (res.status === 200) {
            showSnackbar(res.data.message, 'success');
            router.push(`/login/verify-otp/?phone=${mobile}`);
          }
        } catch (err: unknown) {
          if (isAxiosError(err)) {
            showSnackbar(err.response?.data.mobile);
          }
        }finally{
          setIsLoading(false)
        }
      };
  return (
   <>
   <Field type='number' value={mobile} setValue={setMobile} label="شماره موبایل" />
   
         {children}
         <SubmitButton title={'ادامه'} isLoading={isLoading} handleSubmit={handleLogin} />
   </>
  )
}
