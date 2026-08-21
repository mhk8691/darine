'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  
  // استفاده از ref برای جلوگیری از Stale Closure در event listener ها
  const phoneNumberRef = useRef(phoneNumber);
  useEffect(() => {
    phoneNumberRef.current = phoneNumber;
  }, [phoneNumber]);

  const handleLoginVerifyOtp = useCallback(async (code?: string) => {
    const finalCode = code ?? verifyCode;

    if (!finalCode || !/^\d{4,6}$/.test(finalCode)) {
      return;
    }

    try {
      setIsLoading(true);

      const res = await verifyLoginOtp(phoneNumberRef.current, finalCode);

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
          router.push(`/login/register/?phone=${phoneNumberRef.current}`);

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
  }, [verifyCode, router]);

  // WebOTP API standard listener
  useEffect(() => {
    const cleanup = autoCompleteCode(
      setVerifyCode,
      (code) => {
        handleLoginVerifyOtp(code);
      }
    );

    return cleanup;
  }, [handleLoginVerifyOtp]);

  // Android PostMessage Listener + Global Callback Fallback
  useEffect(() => {
    const handleAndroidOtp = (event: MessageEvent) => {
      // 1. استخراج داده (داده ممکن است در event.data یا event.ports باشد)
      let rawData = event.data;

      if (!rawData && event.ports && event.ports.length > 0) {
        // در برخی پیاده‌سازی‌های WebMessage
        return;
      }

      // اگر داده به‌صورت JSON ارسال شده باشد آن را parse می‌کنیم
      if (typeof rawData === 'string' && rawData.startsWith('{')) {
        try {
          const parsed = JSON.parse(rawData);
          rawData = parsed.code || parsed.otp || rawData;
        } catch {
          // ignore error
        }
      }

      const otpCode = String(rawData || '').trim();

      if (!/^\d{4,6}$/.test(otpCode)) {
        return;
      }

      setVerifyCode(otpCode);
      handleLoginVerifyOtp(otpCode);
    };

    // اضافه کردن تابع گلوبال جهت تماس مستقیم از سمت Kotlin در صورت عدم دریافت MessageEvent
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
  }, [handleLoginVerifyOtp]);

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