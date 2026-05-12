'use client'
import React, { useState } from 'react'
import Field from '../Field'
import SendCode from '../SendCode'
import {  verifySignupOtp } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { useRouter } from 'next/navigation';
import SubmitButton from '../SubmitButton';

interface Props{
    phoneNumber:string
}

export default function VerifySignupOtpForm({phoneNumber}:Props) {
  const [verifyCode, setVerifyCode] = useState('');
  const router = useRouter()
    const handleVerifyOtp =async ()=>{
        try{
            const response = await verifySignupOtp(phoneNumber,verifyCode)
            router.push(`/dashboard`);
            if (response.status === 200){
                showSnackbar(response.data.message,true)
                router.push(`/login/register/?phone=${phoneNumber}`);
            }
        }catch(error:unknown){
            if(isAxiosError(error)){
                showSnackbar(error.response?.data.message,false)
            }
        }
    }
  return (
   <>
     <Field value={verifyCode} setValue={setVerifyCode} label="کد تایید" />
      <SendCode phoneNumber={phoneNumber} />
      <SubmitButton title={'تایید'} isDisable={false} handleSubmit={handleVerifyOtp}  />
   </>
  )
}
