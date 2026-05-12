import { LoginDtaType } from '@/app/core/Types';
import { api } from './api';
import { setAccessToken, clearAccessToken } from './token';
import { RegisterFormType } from '@/app/login/register/RegisterForm';

export const loginPassword = async (phoneNumber: string, password: string) => {
  const res = await api.post<LoginDtaType>('/auth/login-password', { phoneNumber, password });

  setAccessToken(res.data.data.access);

  return res.data;
};
export const loginOtp = async (mobile: string) => {
  const res = await api.post<{message:string}>('/accounts/send-otp/', { mobile });

  return res;
};
export const signupOtp = async (mobile: string) => {
  const res = await api.post<{
    message:string
  }>('/accounts/send-otp/', { mobile });
  return res;
};
export const verifySignupOtp = async (mobile:string,code:string)=>{
    const res = await api.post<{
    message:string
    mobile:string
  }>('/accounts/verify-otp/', { mobile,code });
  return res;
}
export const verifyLoginOtp = async (mobile:string,code:string)=>{
    const res = await api.post<LoginDtaType>('/accounts/login/otp/', { mobile,code });
    

    setAccessToken(res.data.data.access);
  return res;
}
export const register = async (data: RegisterFormType) => {
  const response = await api.post<{
    message:string
  }>('/accounts/complete-register/', data);
  return response
};

export const logout = async () => {
  await api.post('/auth/logout');
  clearAccessToken();
};

export const getMe = async () => {
  const res = await api.get('/auth/me');
  return res.data;
};
