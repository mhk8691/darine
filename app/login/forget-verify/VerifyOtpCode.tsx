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

export default function VerifyOtpCode({ phone }: { phone: string }) {
  const router = useRouter();

  const [verifyCode, setVerifyCode] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginVerifyOtp = async (code?: string) => {
    const finalCode = code ?? verifyCode;

    try {
      setIsLoading(true);

      const res = await verifyForgetOtp(phone, finalCode);

      showSnackbar(res.data.message, 'success');
      setStep(1);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompleteLogin = async () => {
    try {
      setIsLoading(true);

      const res = await fogetPasswordComplete(
        phone,
        verifyCode,
        password,
        repeatPassword
      );

      showSnackbar(res.data.message, 'success');
      router.push('/login/login-password');
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    if (step === 0) {
      await handleLoginVerifyOtp();
    } else {
      await handleCompleteLogin();
    }
  };

  useEffect(() => {
    const cleanup = autoCompleteCode(setVerifyCode, (code) => {
      handleLoginVerifyOtp(code);
    });

    return cleanup;
  }, []);

  return (
    <>
      {step === 0 ? (
        <>
          <Field
            type="number"
            value={verifyCode}
            setValue={setVerifyCode}
            label="کد تایید"
          />
          <SendCode phoneNumber={phone} />
        </>
      ) : (
        <CompletePassword
          password={password}
          setPassword={setPassword}
          repeatPassword={repeatPassword}
          setRepeatPassword={setRepeatPassword}
        />
      )}

      <SubmitButton
        title="تایید"
        handleSubmit={handleClick}
        isLoading={isLoading}
      />
    </>
  );
}