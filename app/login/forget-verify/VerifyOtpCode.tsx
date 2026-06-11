'use client';
import React, { useEffect, useState } from 'react';
import Field from '../Field';
import SendCode from '../SendCode';
import SubmitButton from '../SubmitButton';
import { fogetPasswordComplete, verifyForgetOtp } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { useRouter } from 'next/navigation';
import CompletePassword from '@/app/dashboard/profile/CompletePassword';
import { autoCompleteCode } from '../autoCompleteCode';
import { handleLogout } from '@/app/dashboard/profile/ChangePassword';

export default function VerifyOtpCode({ phone }: { phone: string }) {
  const router = useRouter()
  const [verifyCode, setVerifyCode] = useState('');
    const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [step ,setStep] = useState(0)
    const [isLoading,setIsLoading] = useState(false)
 
  const handleLoginVerifyOtp = async () => {
    try {
      setIsLoading(true)
      const res = await verifyForgetOtp(phone, verifyCode);
        showSnackbar(res.data.message, true);
        setStep(1)
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message, false);
      }
      
    }finally{
      setIsLoading(false)
    }
  };
  const handleCompleteLogin = async ()=>{
     try {
      const res = await fogetPasswordComplete(phone, verifyCode,password,repeatPassword);
        showSnackbar(res.data.message, true);
        router.push('/login/login-password')
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message, false);
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
   useEffect(()=>{
      autoCompleteCode(setVerifyCode)
    },[])
  return (
    
    <>
     {
      step === 0 ? <>
      <Field type='number' value={verifyCode} setValue={setVerifyCode} label="کد تایید" />
      <SendCode phoneNumber={phone} />
      
      </>:<CompletePassword 
      password={password}
setPassword={setPassword}
repeatPassword={repeatPassword}
setRepeatPassword={setRepeatPassword}
      />
     }
     <SubmitButton title={'تایید'} handleSubmit={handleClick} isLoading={isLoading} />
    </>
  );
}
