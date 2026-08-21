
'use client';

import { Box, Stack, Typography, useTheme } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import {
  GoldReceiveIcon,
  HomeIcon,
  OrderIcon,
  ProfileIcon,
  ReportsIcon,
} from '../CustomIcons/CustomIcons';

const appbarItems = [
  { name: 'گزارش ها', icon: <ReportsIcon />, link: '/dashboard/reports' },
  { name: 'سفارش', icon: <OrderIcon />, link: '/dashboard/trades' },
  { name: 'خانه', icon: <HomeIcon />, link: '/dashboard' },
  { name: 'فیزیکی', icon: <GoldReceiveIcon />, link: '/dashboard/gold-receive' },
  { name: 'پروفایل', icon: <ProfileIcon />, link: '/dashboard/profile' },
];

export default function MobileAppbar() {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();

  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '92%',
        borderRadius: 5,
        zIndex: 1000,

        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',

        bgcolor: isDark
          ? 'rgba(20, 20, 20, 0.65)'
          : 'rgba(255, 255, 255, 0.75)',

        border: '1px solid',
        borderColor: isDark
          ? 'rgba(255,255,255,0.08)'
          : 'rgba(0,0,0,0.08)',

        boxShadow: isDark
          ? '0 10px 30px rgba(0,0,0,0.5)'
          : '0 10px 30px rgba(0,0,0,0.12)',

        py: 1,
      }}
    >
      <Stack direction="row" justifyContent="space-around" alignItems="center">
      {appbarItems.map((item) => {
  const active = pathname === item.link;

  return (
    <Box
      key={item.link}
      onClick={() => router.push(item.link)}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.4,
        minWidth: 56,
      }}
    >
      {/* ICON WRAPPER (FIXED SHAPE) */}
      <Box
  sx={{
    width: 42,
    height: 42,

    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    transition: 'all 0.25s ease',

    bgcolor: active
      ? isDark
        ? 'rgba(255,255,255,0.10)'
        : 'rgba(0,0,0,0.06)'
      : 'transparent',

    backdropFilter: active ? 'blur(10px)' : 'none',
    WebkitBackdropFilter: active ? 'blur(10px)' : 'none',

    border: active
      ? '1px solid'
      : '1px solid transparent',

    borderColor: active
      ? isDark
        ? 'rgba(255,255,255,0.15)'
        : 'rgba(0,0,0,0.12)'
      : 'transparent',

    boxShadow: active
      ? isDark
        ? '0 8px 20px rgba(0,0,0,0.45)'
        : '0 8px 18px rgba(0,0,0,0.12)'
      : 'none',

    transform: active ? 'translateY(-3px)' : 'translateY(0)',
  }}
>
  {item.icon}
</Box>

      {/* LABEL */}
      <Typography
        sx={{
          fontSize: 10,
          color: active ? 'primary.main' : 'text.secondary',
          fontWeight: active ? 600 : 400,
        }}
      >
        {item.name}
      </Typography>

      {/* DOT INDICATOR */}
      <Box
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: active ? 'primary.main' : 'transparent',
          transition: '0.2s',
        }}
      />
    </Box>
  );
})}
      </Stack>
    </Box>
  );
}
