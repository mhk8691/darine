'use client'
import React, { useState } from 'react'
import Field from '../Field'
import SendCode from '../SendCode'
import SubmitButton from '../SubmitButton'
import { verifyForgerOtp } from '@/lib/auth'
import { isAxiosError } from 'axios'
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar'
import { useRouter } from 'next/navigation'

export default function VerifyOtpCode({phone}:{phone:string}) {
    const [verifyCode,setVerifyCode] = useState('')
    const router = useRouter()
        const handleLoginVerifyOtp =async ()=>{
            try{
             const res =  await verifyForgerOtp(phone,verifyCode)
              if (res.status === 200){
                showSnackbar(res.data.message,true)
                router.push('/change-password')
        }
               
            }catch(error:unknown){
                if(isAxiosError(error)){
                    showSnackbar(error.response?.data.error,false)
                }
            }
        }
  return (
<>
<Field value={verifyCode} setValue={setVerifyCode} label="کد تایید" />
      <SendCode phoneNumber={phone} />
      <SubmitButton title={'تایید'} handleSubmit={handleLoginVerifyOtp} />
</>
  )
}
