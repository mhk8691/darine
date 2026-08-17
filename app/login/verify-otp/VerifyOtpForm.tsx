'use client';

import React, { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import Field from '../Field';
import SendCode from '../SendCode';
import SubmitButton from '../SubmitButton';

import { verifyLoginOtp } from '@/lib/auth';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { autoCompleteCode } from '../autoCompleteCode';

interface Props {
  phoneNumber: string;
}

export default function VerifyOtpForm({ phoneNumber }: Props) {
  const [verifyCode, setVerifyCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLoginVerifyOtp = async (code?: string) => {
    const finalCode = code ?? verifyCode;

    if (!finalCode || !/^\d{4,6}$/.test(finalCode)) {
      return;
    }

    try {
      setIsLoading(true);

      const res = await verifyLoginOtp(phoneNumber, finalCode);

      showSnackbar(res.data.message, 'success');

      if (typeof window !== 'undefined' && window.AndroidBridge) {
        window.AndroidBridge.notifyUserLogin(
          String(res.data.data.user.id)
        );
      }

      router.push('/dashboard');
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (
          error.response?.status === 404 &&
          error.response?.data?.message?.need_register
        ) {
          router.push(`/login/register/?phone=${phoneNumber}`);

          showSnackbar(
            error.response?.data?.message?.message,
            'warning'
          );
        } else {
          showSnackbar(
            error.response?.data?.message?.message ||
              error.response?.data?.message ||
              'خطایی رخ داده است'
          );
        }
      } else {
        showSnackbar('خطایی رخ داده است');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cleanup = autoCompleteCode(
      setVerifyCode,
      (code) => {
        handleLoginVerifyOtp(code);
      }
    );

    return cleanup;
  }, []);

  useEffect(() => {
    const handleAndroidOtp = (event: MessageEvent) => {
      if (
        event.origin !== 'https://gold.darine.shop' &&
        !event.origin.startsWith('android-app://')
      ) {
        return;
      }

      const otpCode = event.data;

      if (
        typeof otpCode !== 'string' ||
        !/^\d{4,6}$/.test(otpCode)
      ) {
        return;
      }

      setVerifyCode(otpCode);

      handleLoginVerifyOtp(otpCode);
    };

    window.addEventListener('message', handleAndroidOtp);

    return () => {
      window.removeEventListener('message', handleAndroidOtp);
    };
  }, []);

  return (
    <>
      <Field
        type="number"
        value={verifyCode}
        setValue={setVerifyCode}
        label="کد تایید"
      />

      <SendCode phoneNumber={phoneNumber} />

      <SubmitButton
        title="تایید"
        isLoading={isLoading}
        handleSubmit={() => handleLoginVerifyOtp()}
      />
    </>
  );
}