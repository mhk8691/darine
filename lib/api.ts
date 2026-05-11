import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import BASE_URL from '@/app/core/BASE_URL';

export type ApiResponse<T = unknown> = {
  message: string;
  data: T;
};

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.status === 401) {
      console.log(err);
    }
    return Promise.reject(err);
  },
);

export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    instance.get<ApiResponse<T>>(url, config),

  post: <T, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig) =>
    instance.post<ApiResponse<T>>(url, body, config),

  put: <T, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig) =>
    instance.put<ApiResponse<T>>(url, body, config),

  patch: <T, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig) =>
    instance.patch<ApiResponse<T>>(url, body, config),

  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    instance.delete<ApiResponse<T>>(url, config),
};
