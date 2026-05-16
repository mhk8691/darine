import Cookies from 'js-cookie';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export const setAccessToken = (token: string) => {
  Cookies.set(ACCESS_TOKEN_KEY, token, {
    expires: 1 / 144,
    // secure: true,
  sameSite: "lax",
  // domain: ".gold.darine.shop",
  });
};

export const getAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN_KEY);
};

export const clearAccessToken = () => {
  Cookies.remove(ACCESS_TOKEN_KEY);
};

export const setRefreshToken = (token: string) => {
  Cookies.set(REFRESH_TOKEN_KEY, token, {
    expires: 7,
    // secure: true,
  sameSite: "lax",
  // domain: ".gold.darine.shop",
  });
};

export const getRefreshToken = () => {
  return Cookies.get(REFRESH_TOKEN_KEY);
};

export const clearRefreshToken = () => {
  Cookies.remove(REFRESH_TOKEN_KEY);
};

export const clearTokens = () => {
  clearAccessToken();
  clearRefreshToken();
};
