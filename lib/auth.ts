import { LoginDtaType } from '@/app/core/Types';
import { api } from './api';
import { setAccessToken, clearAccessToken } from './token';

export const loginPassword = async (phoneNumber: string, password: string) => {
  const res = await api.post<LoginDtaType>('/auth/login-password', { phoneNumber, password });

  setAccessToken(res.data.data.access);

  return res.data;
};
export const loginOtp = async (mobile: string) => {
  const res = await api.post<LoginDtaType>('/accounts/send-otp', { mobile });
  setAccessToken(res.data.data.access);
  return res.data;
};
export const signupOtp = async (mobile: string) => {
  const res = await api.post('/accounts/send-otp', { mobile });

  // setAccessToken(res.data.accessToken);

  return res.data;
};
export const register = async (data: []) => {
  return api.post('/auth/register', data);
};

export const logout = async () => {
  await api.post('/auth/logout');
  clearAccessToken();
};

export const getMe = async () => {
  const res = await api.get('/auth/me');
  return res.data;
};
