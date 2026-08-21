'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
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

  // استفاده از ref برای جلوگیری از Stale Closure در Listenerها
  const phoneRef = useRef(phone);
  useEffect(() => {
    phoneRef.current = phone;
  }, [phone]);

  const handleLoginVerifyOtp = useCallback(
    async (code?: string) => {
      const finalCode = code ?? verifyCode;

      if (!finalCode || !/^\d{4,6}$/.test(finalCode)) {
        return;
      }

      try {
        setIsLoading(true);

        const res = await verifyForgetOtp(phoneRef.current, finalCode);

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
    },
    [verifyCode]
  );

  const handleCompleteLogin = async () => {
    try {
      setIsLoading(true);

      const res = await fogetPasswordComplete(
        phoneRef.current,
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

  // دریافت خودکار OTP از SMS (مرورگر استاندارد)
  useEffect(() => {
    if (step !== 0) return;

    const cleanup = autoCompleteCode(setVerifyCode, (code) => {
      handleLoginVerifyOtp(code);
    });

    return cleanup;
  }, [step, handleLoginVerifyOtp]);

  // دریافت OTP از Android WebView
  useEffect(() => {
    if (step !== 0) return;

    const handleAndroidOtp = (event: MessageEvent) => {
      let rawData = event.data;

      // اگر داده به صورت JSON ارسال شده باشد آن را پارس می‌کنیم
      if (typeof rawData === 'string' && rawData.startsWith('{')) {
        try {
          const parsed = JSON.parse(rawData);
          rawData = parsed.code || parsed.otp || rawData;
        } catch {
          // ignore error
        }
      }

      const otpCode = String(rawData || '').trim();

      // بررسی معتبر بودن OTP
      if (!/^\d{4,6}$/.test(otpCode)) {
        return;
      }

      setVerifyCode(otpCode);
      handleLoginVerifyOtp(otpCode);
    };

    // اضافه کردن تابع گلوبال جهت فراخوانی مستقیم از سمت Kotlin با evaluateJavascript
    window.onReceiveAndroidOtp = (code: string) => {
      const cleanCode = String(code).trim();
      if (/^\d{4,6}$/.test(cleanCode)) {
        setVerifyCode(cleanCode);
        handleLoginVerifyOtp(cleanCode);
      }
    };

    window.addEventListener('message', handleAndroidOtp);

    return () => {
      window.removeEventListener('message', handleAndroidOtp);
      delete window.onReceiveAndroidOtp;
    };
  }, [step, handleLoginVerifyOtp]);

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