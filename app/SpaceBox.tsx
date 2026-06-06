'use client';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function SpaceBox() {
  const pathname = usePathname();
  const isLoginPage = pathname?.startsWith('/login');
  if (isLoginPage) return null;
  return (
    <Box
      height={{
        xs: '4.2rem',
        sm: '4.2rem',
        md: '5rem',
      }}
      bgcolor={{
        sm: 'transparent',
      }}
    />
  );
}
