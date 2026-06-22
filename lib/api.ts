import BASE_URL from '@/app/core/BASE_URL';
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios';

import {
  showNetworkError,
  resetNetworkError,
  showServerError,
  resetServerError,
} from '@/app/Components/Snackbar/Snackbar';

interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'X-Client-Type': 'gold',
  },
});

let isRefreshing = false;

type FailedQueueItem = {
  resolve: () => void;
  reject: (error: AxiosError) => void;
};

let failedQueue: FailedQueueItem[] = [];

const processQueue = (error?: AxiosError) => {
  failedQueue.forEach((p) => {
    if (error) p.reject(error);
    else p.resolve();
  });

  failedQueue = [];
};

api.interceptors.response.use(
  (response) => {
    // reset همه خطاهای global وقتی موفق شد
    resetNetworkError();
    resetServerError();

    return response;
  },

  async (error: AxiosError) => {
    const originalRequest = error.config as RetryAxiosRequestConfig;

    const isRefreshCall =
      originalRequest?.url?.includes('/accounts/token/refresh/');

    // ------------------------
    // NETWORK ERROR
    // ------------------------
    if (!error.response && !isRefreshCall) {
      showNetworkError();
      return Promise.reject(error);
    }

    // ------------------------
    // SERVER ERROR (500+)
    // ------------------------
    if (error.response && error.response.status >= 500) {
      showServerError();
      return Promise.reject(error);
    }

    // ------------------------
    // 401 REFRESH TOKEN
    // ------------------------
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      typeof window !== 'undefined' &&
      !window.location.pathname.startsWith('/login')
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: () => resolve(api(originalRequest)),
            reject,
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await api.post('/accounts/token/refresh/');

        processQueue();
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError as AxiosError);

        if (typeof window !== 'undefined') {
          try {
            await api.post('/accounts/logout/');
          } catch (err) {
            if (isAxiosError(err)) {
              console.log(err.response?.data?.message);
            }
          }

          window.location.href = '/login/login-password';
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default api;