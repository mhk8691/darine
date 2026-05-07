'use client'
import React, { ReactNode, useState } from 'react'
import Field from '../Field'
import { Stack } from '@mui/material'
import PasswordField from '../PasswordField'
import ActionButton from '../SubmitButton'
import { useRouter } from 'next/navigation'
import { loginPassword } from '@/lib/auth'

interface Props{
    children:ReactNode
}

export default function LoginPassForm({children}:Props) {
    const router = useRouter()
      const [phoneNumber, setPhoneNumber] = useState("");
      const [password, setPassword] = useState("");
      const handleLogin = async () => {
    try {
      await loginPassword(phoneNumber, password);
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
      <Stack mt={0.5}>
        <PasswordField password={password} setPassword={setPassword} />
      </Stack>
      {children}
      <ActionButton title={"ادامه"}  isDisable={false} handleSubmit={handleLogin} />
    </>
  )
}
