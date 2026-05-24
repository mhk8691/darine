import BASE_URL from '@/app/core/BASE_URL';
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios';



export interface ApiResponse<T> {
  message: string;
  data: T;
}


interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}



const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});


let isRefreshing = false;

type FailedQueueItem = {
  resolve: () => void;
  reject: (error: AxiosError) => void;
};

let failedQueue: FailedQueueItem[] = [];

const processQueue = (error?: AxiosError) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve();
    }
  });

  failedQueue = [];
};



api.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as RetryAxiosRequestConfig;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
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
          } catch (error:unknown) {
            if(isAxiosError(error)){
              console.log(error.response?.data.message)
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