'use client';
import React, { ReactNode, useState } from 'react';
import Field from '../Field';
import ActionButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
import { signupOtp } from '@/lib/auth';
import axios from 'axios';
import BASE_URL from '@/app/core/BASE_URL';

interface Props {
  children: ReactNode;
}

export default function SignupOtpForm({ children }: Props) {
  const router = useRouter();
  const [mobile, setMobile] = useState('');
  const handleSignup = async () => {
    try {
      const res = await signupOtp(mobile);
      //   router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Field value={mobile} setValue={setMobile} label="شماره موبایل" />

      {children}
      <ActionButton title={'ادامه'} isDisable={false} handleSubmit={handleSignup} />
    </>
  );
}
