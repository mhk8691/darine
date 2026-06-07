import { RegisterFormType } from '@/app/login/register/RegisterForm';
import api, { ApiResponse } from './api';

export type User = {
  full_name: string;

  "id":number,"mobile":string,"first_name":string,"last_name":string,"national_code":string,"birth_date":string,
};




export const changeNumberRequest = async (phoneNumber: string) => {
  return api.post<{ message: string }>("/accounts/change-mobile/request/", {
    new_mobile: phoneNumber,
  });
};
export const changeNumberConfirm = async (
  phoneNumber: string,
  code: string,
) => {
  return api.post<{ message: string }>("/accounts/change-mobile/confirm/", {
    new_mobile: phoneNumber,
    code,
  });
};

export const loginOtp = async (mobile: string) => {
  const res = await api.post<{
    message: string;
  }>('/accounts/send-otp/', {
    mobile,
  });

  return res;
};

export const forgetPasswordRequest = async (mobile: string) => {
  const res = await api.post<{
    message: string;
  }>('/accounts/reset-password/request/', {
    mobile,
  });

  return res;
};

export const fogetPasswordComplete = async (mobile: string,
  code: string,
  password: string,
  confirm_password: string) =>{
      const res = await api.post<{
    message: string;
  }>('/accounts/reset-password/complete/', {
    mobile,
    code,
    password,confirm_password
  });

  return res;
  }

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
export const verifyForgetOtp = async (
  mobile: string,
  code: string,
) => {
  const res = await api.post<{message:string}>(
    '/accounts/reset-password/verify/',
    {
      mobile,
      code,
    },
  );
  return res;
};





export const register = async (
  data: RegisterFormType,
) => {
  const response = await api.post<{
    message: string;
  }>('/accounts/complete-register/', data);

  return response;
};





export const loginPassword = async (
  mobile: string,
  password: string,
) => {
  const res = await api.post<{
    message:string
  }>(
    '/accounts/login/password/',
    {
      mobile,
      password,
    },
  );

  return res;
};





export const verifyLoginOtp = async (
  mobile: string,
  code: string,
) => {
  const res = await api.post<{message:string}>(
    '/accounts/login/otp/',
    {
      mobile,
      code,
    },
  );

  return res;
};





export const logout = async () => {
  const response = await api.post<{message:string}>('/accounts/logout/');
  return response
};





export const getMe = async (): Promise<User> => {
  const res = await api.get<ApiResponse<User>>('/accounts/profile/');
  return res.data.data;
};