'use client';
import { IconButton, Stack, Typography, useTheme } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import {
  GoldReceiveIcon,
  HomeIcon,
  OrderIcon,
  ProfileIcon,
  ReportsIcon,
} from '../CustomIcons/CustomIcons';
import { useEffect, useState } from 'react';

const appbarItems = [
  { name: 'گزارش ها', icon: <ReportsIcon />, link: '/dashboard/reports' },
  { name: 'سفارش', icon: <OrderIcon />, link: '/dashboard/trades' },
  { name: 'خانه', icon: <HomeIcon />, link: '/dashboard' },
  { name: 'فیزیکی', icon: <GoldReceiveIcon />, link: '/dashboard/gold-receive' },
  { name: 'پروفایل', icon: <ProfileIcon />, link: '/dashboard/profile' },
];

export default function MobileAppbar() {
  const [isActive,setIsActive] = useState('')
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  useEffect(()=>{
    setIsActive(pathname)
  },[])
  // useEffect(()=>{
  //   alert(isActive)
  // },[isActive])
  return (
    <Stack
      position="fixed"
      width="100%"
      zIndex={10}
      left={0}
      bottom={0}
      bgcolor={isDarkMode ? 'rgb(59, 59, 55, .9)' : '#FFFFFF'}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      py={1}
    >
      {appbarItems.map((item) => {

        return (
          <Stack
            key={item.name}
            direction="column"
            alignItems="center"
            component="div"
            gap={0.5}
            onClick={() => {
              router.push(item.link)
              setIsActive(item.link)
            }}
            sx={{ position: 'relative', cursor: 'pointer' }}
          >
            <IconButton
              sx={{
                position: 'relative',
                p: 0.75,
                transition: 'all 0.3s ease',
                boxShadow: isActive === item.link ? '0px 4px 12px rgba(0, 0, 0, 0.3)' : 'none',
                zIndex: isActive === item.link ? 2 : 1,
                color:isActive === item.link ? 'primary.main' : 'white'
              }}
            >
              {item.icon}
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                color: isActive === item.link ? 'primary.main' : 'text.subtitle',
                fontSize: 10,
              }}
            >
              {item.name}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}