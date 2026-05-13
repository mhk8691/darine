import { RegisterFormType } from '@/app/login/register/RegisterForm';

import api from './api';

import { clearTokens, setAccessToken, setRefreshToken } from './token';

export type User = {
  full_name: string;
  role: string;
  status: string;
};

export const getMe = async (): Promise<User> => {
  const res = await api.get('/accounts/me/');

  return res.data;
};

export const loginPassword = async (mobile: string, password: string) => {
  const res = await api.post('/accounts/login/password/', {
    mobile,
    password,
  });

  const data = res.data;

  setAccessToken(data.access);

  setRefreshToken(data.refresh);

  return data;
};

export const verifyLoginOtp = async (mobile: string, code: string) => {
  const res = await api.post('/accounts/login/otp/', {
    mobile,
    code,
  });

  const data = res.data;

  setAccessToken(data.access);

  setRefreshToken(data.refresh);

  return data;
};

export const verifyForgetOtp = async (mobile: string, code: string, password: string) => {
  const res = await api.post('/accounts/reset-password/confirm/', {
    mobile,
    code,
    new_password: password,
  });

  return res.data;
};

export const loginOtp = async (mobile: string) => {
  return api.post('/accounts/send-otp/', {
    mobile,
  });
};

export const forgetPassword = async (mobile: string) => {
  return api.post('/accounts/reset-password/request/', {
    mobile,
  });
};

export const signupOtp = async (mobile: string) => {
  return api.post('/accounts/send-otp/', {
    mobile,
  });
};

export const verifySignupOtp = async (mobile: string, code: string) => {
  return api.post('/accounts/verify-otp/', {
    mobile,
    code,
  });
};

export const register = async (data: RegisterFormType) => {
  return api.post('/accounts/complete-register/', data);
};

export const changeNumberRequest = async (phoneNumber: string) => {
  return api.post<{ message: string }>('/accounts/change-mobile/request/', {
    new_mobile: phoneNumber,
  });
};
export const changeNumberConfirm = async (phoneNumber: string, code: string) => {
  return api.post<{ message: string }>('/accounts/change-mobile/confirm/', {
    new_mobile: phoneNumber,
    code,
  });
};
export const logout = async () => {
  try {
    await api.post('/auth/logout/');
  } finally {
    clearTokens();
  }
};
