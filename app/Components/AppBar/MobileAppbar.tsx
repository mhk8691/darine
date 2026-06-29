'use client';
import { Stack, Typography, useTheme } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import {
  GoldReceiveIcon,
  HomeIcon,
  OrderIcon,
  ProfileIcon,
  ReportsIcon,
} from '../CustomIcons/CustomIcons';
import { useEffect, useState } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

const appbarItems = [
  { name: 'گزارش‌ها', icon: <ReportsIcon />, link: '/dashboard/reports' },
  { name: 'سفارش', icon: <OrderIcon />, link: '/dashboard/trades' },
  { name: 'خانه', icon: <HomeIcon />, link: '/dashboard' },
  { name: 'فیزیکی', icon: <GoldReceiveIcon />, link: '/dashboard/gold-receive' },
  { name: 'پروفایل', icon: <ProfileIcon />, link: '/dashboard/profile' },
];

export default function MobileAppbar() {
  const [isActive, setIsActive] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  const gold = '#D4AF37';
  const goldFaint = 'rgba(212, 175, 55, 0.12)';
  const goldBorder = 'rgba(212, 175, 55, 0.40)';
  const goldGlow = 'rgba(212, 175, 55, 0.22)';
  const goldInnerLight = 'rgba(255, 235, 150, 0.07)';

  const bgColor = isDarkMode
    ? 'rgba(14, 12, 5, 0.88)'
    : 'rgba(250, 246, 235, 0.90)';

  const borderTop = isDarkMode
    ? `0.5px solid rgba(212, 175, 55, 0.18)`
    : `0.5px solid rgba(180, 145, 20, 0.22)`;

  const inactiveIconColor = isDarkMode
    ? 'rgba(255, 255, 255, 0.30)'
    : 'rgba(80, 65, 20, 0.38)';

  const inactiveLabelColor = isDarkMode
    ? 'rgba(255, 255, 255, 0.28)'
    : 'rgba(80, 65, 20, 0.40)';

  const iconBoxActive: SxProps<Theme> = {
    background: `linear-gradient(145deg, ${goldFaint}, rgba(212,175,55,0.04))`,
    border: `0.5px solid ${goldBorder}`,
    borderRadius: '12px',
    boxShadow: `0 2px 14px ${goldGlow}, inset 0 1px 0 ${goldInnerLight}`,
    color: gold,
  };

  const iconBoxBase: SxProps<Theme> = {
    width: 42,
    height: 42,
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
    color: inactiveIconColor,
    border: '0.5px solid transparent',
    '& svg': {
      width: 22,
      height: 22,
      transition: 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  };

  return (
    <Stack
      position="fixed"
      width="100%"
      zIndex={10}
      left={0}
      bottom={0}
      direction="row"
      justifyContent="space-around"
      alignItems="flex-end"
      sx={{
        bgcolor: bgColor,
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        borderTop,
        pt: 1,
        pb: 'max(14px, env(safe-area-inset-bottom))',
        px: 0.5,
      }}
    >
      {appbarItems.map((item) => {
        const active = isActive === item.link;

        return (
          <Stack
            key={item.name}
            direction="column"
            alignItems="center"
            gap={1}
            onClick={() => {
              router.push(item.link);
              setIsActive(item.link);
            }}
            sx={{
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
              userSelect: 'none',
              px: 0.75,
              '&:active .icon-box': {
                transform: 'scale(0.92)',
              },
            }}
          >
            <Stack
              className="icon-box"
              sx={{
                ...iconBoxBase,
                ...(active ? iconBoxActive : {}),
              }}
            >
              {item.icon}
            </Stack>

            {/* Label */}
            <Typography
              sx={{
                fontSize: '10px',
                lineHeight: 1,
                fontWeight: active ? 500 : 400,
                color: active ? gold : inactiveLabelColor,
                transition: 'color 0.25s ease',
                fontFamily: 'Vazirmatn, IRANSans, Tahoma, sans-serif',
              }}
            >
              {item.name}
            </Typography>

            <Stack
              sx={{
                width: active ? 4 : 0,
                height: 4,
                borderRadius: '50%',
                bgcolor: gold,
                boxShadow: active ? `0 0 6px ${gold}` : 'none',
                transition: 'width 0.25s ease, opacity 0.25s ease',
                opacity: active ? 1 : 0,
                mt: '-2px',
              }}
            />
          </Stack>
        );
      })}
    </Stack>
  );
}


