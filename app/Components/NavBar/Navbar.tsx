'use client';
import { MenuType } from '@/app/core/Types';
import { Box, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ButtonGroupe from './ButtonGroupe';
import SubMenu from './SubMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ModalNavigation from '../AppBar/ModalNavigation';
import DrawerLink from './DrawerLink';
import { usePathname } from 'next/navigation';

const menu: MenuType[] = [
  {
    id: 1,
    title: 'امکانات',
    subMenu: [
      {
        title: 'وام خرید کالا',
        link: '/dashboard/loan',
      },
      {
        title: 'خرید قسطی طلا',
        link: '/dashboard/credit-menu',
      },
      {
        title: 'خرید شمش طلا',
        link: '/gold-shop',
      },
      {
        title: 'کارت هدیه سازمانی',
        link: '/gift-card',
      },
    ],
  },
  {
    id: 2,
    title: 'قیمت طلا',
    subMenu: [
      {
        title: 'قیمت طلا امروز',
        link: '/gold-price',
      },
      {
        title: 'انس جهانی طلا',
        link: '/ons',
      },
      {
        title: 'محاسبه قیمت طلا',
        link: '/calculator',
      },
      {
        title: 'قیمت سکه امروز',
        link: '/coin-price',
      },
   
    ],
  },
  { id: 3, title: 'آموزش های دارینه', link: '/learning' },
  // { id: 4, title: 'مجوز های دارینه', link: '/license' },
  { id: 4 , title: 'همکاری با دارینه', link: '/partners' },
];
export default function Navbar() {
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname.split('/')[1] === 'dashboard';
  const isLoginPage = pathname?.startsWith('/login');
  const isDarkMode = theme.palette.mode == 'dark';
  if (isLoginPage) return null;
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        position="fixed"
        zIndex={'1000'}
        justifyContent="space-between"
        sx={{
          py: {
            xs: 1,
            md: 2,
          },
          px: {
            xs: isDashboard ? 2.5 : 0,
            md: 3,
            lg: 5,
          },
          bgcolor: 'background.default',
          width: '100%',
          boxShadow: {
            xs: isDarkMode ? '0 0 5px #252524' : '0 0 5px #EFEEEC',
            lg: 'none',
          },
        }}
      >
        <Stack direction={'row'} gap={3} alignItems={'center'}>
          <Stack direction={'row'} alignItems={'center'} gap={1}>
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: {
                  md: 'none',
                },
              }}
            >
              <MenuIcon
                fontSize="large"
                sx={{
                  display: {
                    xs: 'block',
                    sm: 'none',
                  },
                }}
              />
            </IconButton> 
   
        <Stack
  component={Link}
  href="/dashboard"
  sx={{
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    perspective: '800px',

    // حلقه گرادیانت چرخان دور لوگو
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: -4,
      borderRadius: '50%',
      background:
        'conic-gradient(from 0deg, transparent, rgba(255,215,0,.9), transparent 30%, transparent 70%, rgba(255,180,0,.7), transparent)',
      opacity: 0,
      animation: 'ringSpin 6s linear infinite, ringFade 6s ease-in-out infinite',
      filter: 'blur(1px)',
    },

    // درخشش پالسی پشت لوگو
    '&::after': {
      content: '""',
      position: 'absolute',
      width: 55,
      height: 55,
      borderRadius: '50%',
      background:
        'radial-gradient(circle, rgba(255,215,0,.6), rgba(255,180,0,.2) 50%, transparent 75%)',
      opacity: 0,
      animation: 'goldGlow 6s ease-in-out infinite',
      filter: 'blur(2px)',
    },

    '& .logo-wrap': {
      position: 'relative',
      width: 50,
      height: 50,
      zIndex: 2,
      borderRadius: '50%',
      overflow: 'hidden',
      animation: 'logoFlip 6s ease-in-out infinite, logoBreathe 3s ease-in-out infinite',
      transformStyle: 'preserve-3d',
    },

    '& .logo-wrap img': {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },

    // شاین که روی خود لوگو می‌لغزه
    '& .shine': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: 3,
      background:
        'linear-gradient(120deg, transparent 30%, rgba(255,255,255,.85), transparent 70%)',
      transform: 'translateX(-150%) rotate(20deg)',
      animation: 'shine 6s ease-in-out infinite',
      pointerEvents: 'none',
    },

    // ذرات اسپارکل
    '& .sparkle': {
      position: 'absolute',
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: '#fff5c2',
      boxShadow: '0 0 6px 2px rgba(255,215,0,.8)',
      opacity: 0,
    },
    '& .sparkle:nth-of-type(1)': { top: 2, left: 8, animation: 'sparkle1 6s ease-in-out infinite' },
    '& .sparkle:nth-of-type(2)': { top: 10, right: 0, animation: 'sparkle2 6s ease-in-out infinite' },
    '& .sparkle:nth-of-type(3)': { bottom: 4, left: 4, animation: 'sparkle3 6s ease-in-out infinite' },

    '@keyframes ringSpin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    '@keyframes ringFade': {
      '0%,70%,100%': { opacity: 0 },
      '80%,90%': { opacity: 1 },
    },
    '@keyframes goldGlow': {
      '0%,70%,100%': { opacity: 0, transform: 'scale(.8)' },
      '80%,90%': { opacity: 1, transform: 'scale(1.3)' },
    },
    '@keyframes logoFlip': {
      '0%,70%': { transform: 'rotateY(0deg)' },
      '80%': { transform: 'rotateY(180deg)' },
      '90%,100%': { transform: 'rotateY(360deg)' },
    },
    '@keyframes logoBreathe': {
      '0%,100%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.05)' },
    },
    '@keyframes shine': {
      '0%,70%': { transform: 'translateX(-150%) rotate(20deg)' },
      '85%': { transform: 'translateX(150%) rotate(20deg)' },
      '100%': { transform: 'translateX(150%) rotate(20deg)' },
    },
    '@keyframes sparkle1': {
      '0%,75%,100%': { opacity: 0, transform: 'scale(.5)' },
      '82%': { opacity: 1, transform: 'scale(1.2)' },
      '88%': { opacity: 0, transform: 'scale(.5)' },
    },
    '@keyframes sparkle2': {
      '0%,78%,100%': { opacity: 0, transform: 'scale(.5)' },
      '85%': { opacity: 1, transform: 'scale(1.2)' },
      '91%': { opacity: 0, transform: 'scale(.5)' },
    },
    '@keyframes sparkle3': {
      '0%,80%,100%': { opacity: 0, transform: 'scale(.5)' },
      '87%': { opacity: 1, transform: 'scale(1.2)' },
      '93%': { opacity: 0, transform: 'scale(.5)' },
    },
  }}
>
  <Box className="logo-wrap">
    <Image src="/images/darineh.png" width={50} height={50} alt="Darineh" />
    <Box component="span" className="shine" />
  </Box>
  <Box component="span" className="sparkle" />
  <Box component="span" className="sparkle" />
  <Box component="span" className="sparkle" />
</Stack>
          </Stack>
          {isUpLg && (
            <Stack direction={'row'} gap={2.5} alignItems={'center'}>
              {menu.map((item) =>
                item.link ? (
                  <Link href={item.link} key={item.id}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: isDarkMode ? 'primary.main' : 'primary.dark',
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                ) : (
                  <SubMenu key={item.id} item={item} />
                ),
              )}
            </Stack>
          )}
        </Stack>
        <ButtonGroupe />
      </Stack>
      {pathname.split('/')[1] === 'dashboard' ? (
        <ModalNavigation open={open} setOpen={setOpen} />
      ) : (
        <DrawerLink open={open} setOpen={setOpen} />
      )}
    </>
  );
}
