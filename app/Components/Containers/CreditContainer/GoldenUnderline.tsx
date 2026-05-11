'use client';
import { Box, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export default function GoldenUnderline({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Box component="span" position="relative" display="inline-block">
      <Box
        width="110%"
        position="absolute"
        height={12}
        bgcolor={isDarkMode ? '#8A751D' : '#FEF2C0'}
        borderRadius="999px"
        bottom={2}
        left={'50%'}
        sx={{ transform: 'translateX(-50%)' }}
        zIndex={0}
      />

      <Box component="span" position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
}
