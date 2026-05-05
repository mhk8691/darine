import { api } from "./api";
import { setAccessToken, clearAccessToken } from "./token";

export const loginPassword = async (phoneNumber: string, password: string) => {
  const res = await api.post("/auth/login-password", { phoneNumber, password });

  setAccessToken(res.data.accessToken);

  return res.data;
};
export const loginOtp = async (phoneNumber: string) => {
  const res = await api.post("/auth/login-otp", { phoneNumber });

  setAccessToken(res.data.accessToken);

  return res.data;
};
export const register = async (data: []) => {
  return api.post("/auth/register", data);
};

export const logout = async () => {
  await api.post("/auth/logout");
  clearAccessToken();
};

export const getMe = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};