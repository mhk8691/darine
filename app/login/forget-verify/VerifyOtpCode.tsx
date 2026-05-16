'use client';
import React, { useState } from 'react';
import Field from '../Field';
import SendCode from '../SendCode';
import SubmitButton from '../SubmitButton';
import { fogetPasswordComplete, verifyForgetOtp } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { useRouter } from 'next/navigation';
import CompletePassword from '@/app/dashboard/profile/CompletePassword';

export default function VerifyOtpCode({ phone }: { phone: string }) {
  const router = useRouter()
  const [verifyCode, setVerifyCode] = useState('');
    const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [step ,setStep] = useState(0)
  const handleLoginVerifyOtp = async () => {
    try {
      const res = await verifyForgetOtp(phone, verifyCode);
        showSnackbar(res.data.message, true);
        setStep(1)
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.error, false);
      }
    }
  };
  const handleCompleteLogin = async ()=>{
     try {
      const res = await fogetPasswordComplete(phone, verifyCode,password,repeatPassword);
        showSnackbar(res.data.message, true);
        router.push('/login/login-password')
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.error, false);
      }
    }
  }
  const handleClick = async ()=>{
    if (step === 0 ){
     await handleLoginVerifyOtp()
    }
    else{
     await handleCompleteLogin()
    }
  }
  return (
    
    <>
     {
      step === 0 ? <>
      <Field value={verifyCode} setValue={setVerifyCode} label="کد تایید" />
      <SendCode phoneNumber={phone} />
      
      </>:<CompletePassword 
      password={password}
setPassword={setPassword}
repeatPassword={repeatPassword}
setRepeatPassword={setRepeatPassword}
      />
     }
     <SubmitButton title={'تایید'} handleSubmit={handleClick} />
    </>
  );
}
