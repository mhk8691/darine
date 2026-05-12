'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import instance from '@/lib/api';

import {
  clearAccessToken,
  setAccessToken,
} from '@/lib/token';

import { getMe, User } from '@/lib/auth';

type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<
    React.SetStateAction<User | null>
  >;
  loading: boolean;
};

const AuthContext =
  createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  const initializeAuth = async () => {
    try {
      // اگر refresh cookie معتبر باشد
      // access جدید می‌گیریم
      const res = await instance.post(
        '/accounts/token/refresh/',
      );

      const access = res.data.access;

      setAccessToken(access);

      // user را از localStorage می‌خوانیم
      const storedUser = getMe();

      if (storedUser) {
        setUser(storedUser);
      }
    } catch (error) {
      clearAccessToken();

      localStorage.removeItem('user');

      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside AuthProvider',
    );
  }

  return context;
};