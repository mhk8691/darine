import { RegisterFormType } from '@/app/login/register/RegisterForm';

import api from './api';

import {
  clearTokens,
  setAccessToken,
  setRefreshToken,
} from './token';

export type User = {
  full_name: string;
  role: string;
  status: string;
};


// ======================
// GET USER
// ======================

export const getMe = async (): Promise<User> => {
  const res = await api.get('/accounts/me/');

  return res.data;
};


// ======================
// LOGIN PASSWORD
// ======================

export const loginPassword = async (
  mobile: string,
  password: string,
) => {
  const res = await api.post(
    '/accounts/login/password/',
    {
      mobile,
      password,
    },
  );

  const data = res.data;

  setAccessToken(data.access);

  setRefreshToken(data.refresh);

  return data;
};


// ======================
// LOGIN OTP
// ======================

export const verifyLoginOtp = async (
  mobile: string,
  code: string,
) => {
  const res = await api.post(
    '/accounts/login/otp/',
    {
      mobile,
      code,
    },
  );

  const data = res.data;

  setAccessToken(data.access);

  setRefreshToken(data.refresh);

  return data;
};


// ======================
// FORGET PASSWORD OTP
// ======================

export const verifyForgerOtp = async (
  mobile: string,
  code: string,
) => {
  const res = await api.post(
    '/accounts/reset-password/confirm/',
    {
      mobile,
      code,
    },
  );

  return res.data;
};


// ======================
// OTP
// ======================

export const loginOtp = async (
  mobile: string,
) => {
  return api.post('/accounts/send-otp/', {
    mobile,
  });
};

export const forgetPassword = async (
  mobile: string,
) => {
  return api.post(
    '/accounts/reset-password/request/',
    {
      mobile,
    },
  );
};

export const signupOtp = async (
  mobile: string,
) => {
  return api.post('/accounts/send-otp/', {
    mobile,
  });
};

export const verifySignupOtp = async (
  mobile: string,
  code: string,
) => {
  return api.post('/accounts/verify-otp/', {
    mobile,
    code,
  });
};


// ======================
// REGISTER
// ======================

export const register = async (
  data: RegisterFormType,
) => {
  return api.post(
    '/accounts/complete-register/',
    data,
  );
};


// ======================
// LOGOUT
// ======================

export const logout = async () => {
  try {
    await api.post('/auth/logout/');
  } finally {
    clearTokens();
  }
};