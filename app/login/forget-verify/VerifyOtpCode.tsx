'use client';

import React, { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import Field from '../Field';
import SendCode from '../SendCode';
import SubmitButton from '../SubmitButton';

import { fogetPasswordComplete, verifyForgetOtp } from '@/lib/auth';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import CompletePassword from '@/app/dashboard/profile/CompletePassword';
import { autoCompleteCode } from '../autoCompleteCode';

interface Props {
  phone: string;
}

export default function VerifyOtpCode({ phone }: Props) {
  const router = useRouter();

  const [verifyCode, setVerifyCode] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginVerifyOtp = async (code?: string) => {
    const finalCode = code ?? verifyCode;

    if (!finalCode || !/^\d{4,6}$/.test(finalCode)) {
      return;
    }

    try {
      setIsLoading(true);

      const res = await verifyForgetOtp(phone, finalCode);

      showSnackbar(res.data.message, 'success');

      setStep(1);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(
          error.response?.data?.message?.message ||
            error.response?.data?.message ||
            'کد تایید صحیح نیست'
        );
      } else {
        showSnackbar('خطایی رخ داده است');
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
        showSnackbar(
          error.response?.data?.message?.message ||
            error.response?.data?.message ||
            'خطایی رخ داده است'
        );
      } else {
        showSnackbar('خطایی رخ داده است');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    if (step === 0) {
      await handleLoginVerifyOtp();
      return;
    }

    await handleCompleteLogin();
  };

  // دریافت خودکار OTP از SMS
  useEffect(() => {
    if (step !== 0) return;

    const cleanup = autoCompleteCode(
      setVerifyCode,
      (code) => {
        handleLoginVerifyOtp(code);
      }
    );

    return cleanup;
  }, [step]);

  // دریافت OTP از Android WebView
  useEffect(() => {
    if (step !== 0) return;

    const handleAndroidOtp = (event: MessageEvent) => {
      // فقط پیام‌های مورد اعتماد را قبول کن
      if (
        event.origin !== 'https://gold.darine.shop' &&
        !event.origin.startsWith('android-app://')
      ) {
        return;
      }

      const otpCode = event.data;

      // OTP باید فقط عدد و بین 4 تا 6 رقم باشد
      if (
        typeof otpCode !== 'string' ||
        !/^\d{4,6}$/.test(otpCode)
      ) {
        return;
      }

      // قرار دادن OTP داخل input
      setVerifyCode(otpCode);

      // تایید خودکار OTP
      handleLoginVerifyOtp(otpCode);
    };

    window.addEventListener('message', handleAndroidOtp);

    return () => {
      window.removeEventListener('message', handleAndroidOtp);
    };
  }, [step]);

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