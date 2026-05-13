import axios from 'axios';

import BASE_URL from '@/app/core/BASE_URL';

import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
} from './token';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});


// =========================
// REQUEST INTERCEPTOR
// =========================

api.interceptors.request.use((config) => {
  const access = getAccessToken();

  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }

  return config;
});


// =========================
// REFRESH
// =========================

let isRefreshing = false;

let failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (reason?: any) => void;
}[] = [];

const processQueue = (error?: any) => {
  failedQueue.forEach((p) => {
    if (error) {
      p.reject(error);
    } else {
      p.resolve(true);
    }
  });

  failedQueue = [];
};

const refreshAccessToken = async () => {
  const refresh = getRefreshToken();

  if (!refresh) {
    throw new Error('No refresh token');
  }

  const response = await axios.post(
    `${BASE_URL}/accounts/token/refresh/`,
    {
      refresh,
    },
  );

  const newAccess = response.data.access;

  setAccessToken(newAccess);

  return newAccess;
};


// =========================
// RESPONSE INTERCEPTOR
// =========================

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise(
          (resolve, reject) => {
            failedQueue.push({
              resolve,
              reject,
            });
          },
        ).then(() => api(originalRequest));
      }

      originalRequest._retry = true;

      isRefreshing = true;

      try {
        await refreshAccessToken();

        processQueue();

        return api(originalRequest);
      } catch (err) {
        processQueue(err);

        clearTokens();

        if (typeof window !== 'undefined') {
          window.location.href =
            '/login/login-password';
        }

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default api;