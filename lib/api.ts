import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';

import BASE_URL from '@/app/core/BASE_URL';

import {
  clearAccessToken,
  getAccessToken,
  setAccessToken,
} from './token';

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});


// =========================
// REQUEST INTERCEPTOR
// =========================

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
);


// =========================
// RESPONSE INTERCEPTOR
// =========================

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (
  error: any,
  token: string | null = null,
) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

instance.interceptors.response.use(
  (res) => res,

  async (error: AxiosError) => {
    const originalRequest: any = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;

            return instance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await axios.post(
          `${BASE_URL}/accounts/token/refresh/`,
          {},
          {
            withCredentials: true,
          },
        );

        const newAccess = res.data.access;

        setAccessToken(newAccess);

        processQueue(null, newAccess);

        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return instance(originalRequest);
      } catch (err) {
        processQueue(err, null);

        clearAccessToken();

        localStorage.removeItem('user');

        window.location.href = '/login';

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default instance;