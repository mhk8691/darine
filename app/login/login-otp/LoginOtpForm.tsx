'use client'
import React, { ReactNode, useState } from 'react'
import Field from '../Field'
import ActionButton from '../ActionButton'
import { useRouter } from 'next/navigation'
import { loginOtp } from '@/lib/auth'

interface Props{
    children:ReactNode
}

export default function LoginOtpForm({children}:Props) {
    const router = useRouter()
      const [phoneNumber, setPhoneNumber] = useState("");
      const handleLogin = async () => {
    try {
      await loginOtp(phoneNumber);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Field
        value={phoneNumber}
        setValue={setPhoneNumber}
        label="شماره موبایل"
      />
    
      {children}
      <ActionButton title={"ادامه"}  isDisable={false} handleSubmit={handleLogin} />
    </>
  )
}
