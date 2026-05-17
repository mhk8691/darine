import BASE_URL from '@/app/core/BASE_URL';
import axios from 'axios';

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, 
});

let isRefreshing = false;
let failedQueue: any[] = [];

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

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => api(originalRequest));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await api.post('/accounts/token/refresh/');
        processQueue();
        return api(originalRequest);
      } catch (err) {
        processQueue(err);
        if (typeof window !== 'undefined') {
          await api.post('/accounts/logout/');
          window.location.href = '/login/login-password';
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