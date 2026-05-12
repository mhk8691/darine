import { LoginDtaType } from '@/app/core/Types';
import  api  from './api';

import {
  setAccessToken,
  clearAccessToken,
} from './token';

import { RegisterFormType } from '@/app/login/register/RegisterForm';

export type User = {
  full_name: string;
  role: string;
  status: string;
};


// ======================
// OTP
// ======================

export const loginOtp = async (mobile: string) => {
  const res = await api.post<{
    message: string;
  }>('/accounts/send-otp/', {
    mobile,
  });

  return res;
};

export const signupOtp = async (mobile: string) => {
  const res = await api.post<{
    message: string;
  }>('/accounts/send-otp/', {
    mobile,
  });

  return res;
};

export const verifySignupOtp = async (
  mobile: string,
  code: string,
) => {
  const res = await api.post<{
    message: string;
    mobile: string;
  }>('/accounts/verify-otp/', {
    mobile,
    code,
  });

  return res;
};


// ======================
// REGISTER
// ======================

export const register = async (
  data: RegisterFormType,
) => {
  const response = await api.post<{
    message: string;
  }>('/accounts/complete-register/', data);

  return response;
};


// ======================
// LOGIN PASSWORD
// ======================

export const loginPassword = async (
  phoneNumber: string,
  password: string,
) => {
  const res = await api.post<LoginDtaType>(
    '/accounts/login/password/',
    {
      mobile: phoneNumber,
      password,
    },
  );

  const data = res.data;

  // access token فقط داخل memory
  setAccessToken(data.access);

  // user داخل localStorage
  localStorage.setItem(
    'user',
    JSON.stringify({
      full_name: data.full_name,
      role: data.role,
      status: data.status,
    }),
  );

  return res.data;
};


// ======================
// LOGIN OTP
// ======================

export const verifyLoginOtp = async (
  mobile: string,
  code: string,
) => {
  const res = await api.post<LoginDtaType>(
    '/accounts/login/otp/',
    {
      mobile,
      code,
    },
  );

  const data = res.data;

  // access token فقط داخل memory
  setAccessToken(data.access);

  // user داخل localStorage
  localStorage.setItem(
    'user',
    JSON.stringify({
      full_name: data.full_name,
      role: data.role,
      status: data.status,
    }),
  );

  return res;
};


// ======================
// LOGOUT
// ======================

export const logout = async () => {
  try {
    await api.post('/auth/logout');
  } finally {
    clearAccessToken();

    localStorage.removeItem('user');
  }
};


// ======================
// GET USER
// ======================

export const getMe = (): User | null => {
  const user = localStorage.getItem('user');

  if (!user) return null;

  return JSON.parse(user);
};