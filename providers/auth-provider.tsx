'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { getMe, logout as logoutRequest, User } from '@/lib/auth';

import { getRefreshToken } from '@/lib/token';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  authenticated: boolean;
  refetchUser: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const refresh = getRefreshToken();

      if (!refresh) {
        setUser(null);
        return;
      }

      const me = await getMe();

      setUser(me);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await logoutRequest();
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        authenticated: !!user,
        refetchUser: fetchUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
};
