import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, 
});

api.interceptors.response.use(
  res => res,
  async err => {
    if (err.response?.status === 401) {
      console.log(err)
    }
    return Promise.reject(err);
  }
);