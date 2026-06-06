'use client';
import { MenuType } from '@/app/core/Types';
import { IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
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
  { id: 3, title: 'آموزش های دارینه', link: '/branches' },
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
            <Stack component={Link} href={'/dashboard'}>
              <Image src={'/images/darineh.png'} width={50} height={50} alt="" />{' '}
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
