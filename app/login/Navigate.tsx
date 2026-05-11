'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Navigate() {
  const router = useRouter();
  router.push('/login/login-password');
  return <></>;
}
