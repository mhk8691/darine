'use client';
import React, { ReactNode, useState } from 'react';
import Field from '../Field';
import { Stack } from '@mui/material';
import PasswordField from '../PasswordField';
import ActionButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
import { loginPassword } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

interface Props {
  children: ReactNode;
}

export default function LoginPassForm({ children }: Props) {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
     const response =  await loginPassword(phoneNumber, password);
      router.push('/dashboard');
      showSnackbar(response?.data.message,true);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }
  };
  return (
    <>
      <Field value={phoneNumber} setValue={setPhoneNumber} label="شماره موبایل" />
      <Stack mt={0.5}>
        <PasswordField password={password} setPassword={setPassword} />
      </Stack>
      {children}
      <ActionButton title={'ورود'} isDisable={false} handleSubmit={handleLogin} />
    </>
  );
}
