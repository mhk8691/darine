'use client';
import { keyframes } from '@emotion/react';
import { Box } from '@mui/material';

type CircleType = 'green' | 'red';

const pulse = (colorDark: string, colorLight: string) => keyframes`
  0% {
    transform: scale(1);
    opacity: 0.2;
    background-color: ${colorDark};
  }
  50% {
    opacity: 1;
    background-color: ${colorLight};
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
    background-color: ${colorDark};
  }
`;

const colors: Record<CircleType, { main: string; dark: string; light: string }> = {
  green: {
    main: '#2ECC71',
    dark: '#1B5E20',
    light: '#66BB6A',
  },
  red: {
    main: '#E74C3C',
    dark: '#5C1A16',
    light: '#F1948A',
  },
};

interface CircleAnimationProps {
  type?: CircleType;
}

export default function CircleAnimation({ type = 'green' }: CircleAnimationProps) {
  const theme = colors[type];

  return (
    <Box
      sx={{
        position: 'relative',
        width: 12,
        height: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 12,
          height: 12,
          bgcolor: theme.main,
          borderRadius: '50%',
          zIndex: 2,
        }}
      />

      {/* رینگ پالس */}
      <Box
        sx={{
          position: 'absolute',
          width: 16,
          height: 16,
          borderRadius: '50%',
          bgcolor: theme.dark,
          animation: `${pulse(theme.dark, theme.light)} 2.5s infinite ease-out`,
        }}
      />
    </Box>
  );
}
