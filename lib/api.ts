import BASE_URL from "@/app/core/BASE_URL";
import axios from "axios";

export const api = axios.create({
  baseURL: BASE_URL,
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