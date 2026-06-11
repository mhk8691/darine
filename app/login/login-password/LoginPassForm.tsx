'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import Field from '../Field';
import PasswordField from '../PasswordField';
import { Stack } from '@mui/material';
import ActionButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
import { loginPassword } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { handleLogout } from '@/app/dashboard/profile/ChangePassword';

interface Props {
  children: ReactNode;
}

export default function LoginPassForm({ children }: Props) {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      const response = await loginPassword(phoneNumber, password);

      showSnackbar(response?.data.message, 'success');
      router.push('/dashboard');
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      autoComplete="on"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <Field
      type='number'
        value={phoneNumber}
        setValue={setPhoneNumber}
        label="شماره موبایل"
        textFieldProps={{
          name:"phone_number",
          autoComplete:"phone_number"
        }}
      />

      <Stack mt={0.5}>
       <PasswordField
  password={password}
  setPassword={setPassword}
  inputProps={{
    name: 'password',
    autoComplete: 'current-password',
  }}
/>
      </Stack>

      {children}

      <ActionButton
        title="ورود"
        isLoading={isLoading}
        type="submit"
      />
    </form>
  );
}