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

            {/* Active dot indicator */}
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
// طرح ۱:


// طرح ۲:
// 'use client';

// import { Box, Stack, Typography, useTheme } from '@mui/material';
// import { usePathname, useRouter } from 'next/navigation';
// import {
//   GoldReceiveIcon,
//   HomeIcon,
//   OrderIcon,
//   ProfileIcon,
//   ReportsIcon,
// } from '../CustomIcons/CustomIcons';

// const appbarItems = [
//   { name: 'گزارش ها', icon: <ReportsIcon />, link: '/dashboard/reports' },
//   { name: 'سفارش', icon: <OrderIcon />, link: '/dashboard/trades' },
//   { name: 'خانه', icon: <HomeIcon />, link: '/dashboard' },
//   { name: 'فیزیکی', icon: <GoldReceiveIcon />, link: '/dashboard/gold-receive' },
//   { name: 'پروفایل', icon: <ProfileIcon />, link: '/dashboard/profile' },
// ];

// export default function MobileAppbar() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const theme = useTheme();

//   const isDark = theme.palette.mode === 'dark';

//   return (
//     <Box
//       sx={{
//         position: 'fixed',
//         bottom: 16,
//         left: '50%',
//         transform: 'translateX(-50%)',
//         width: '92%',
//         borderRadius: 5,
//         zIndex: 1000,

//         backdropFilter: 'blur(16px)',
//         WebkitBackdropFilter: 'blur(16px)',

//         bgcolor: isDark
//           ? 'rgba(20, 20, 20, 0.65)'
//           : 'rgba(255, 255, 255, 0.75)',

//         border: '1px solid',
//         borderColor: isDark
//           ? 'rgba(255,255,255,0.08)'
//           : 'rgba(0,0,0,0.08)',

//         boxShadow: isDark
//           ? '0 10px 30px rgba(0,0,0,0.5)'
//           : '0 10px 30px rgba(0,0,0,0.12)',

//         py: 1,
//       }}
//     >
//       <Stack direction="row" justifyContent="space-around" alignItems="center">
//       {appbarItems.map((item) => {
//   const active = pathname === item.link;

//   return (
//     <Box
//       key={item.link}
//       onClick={() => router.push(item.link)}
//       sx={{
//         cursor: 'pointer',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: 0.4,
//         minWidth: 56,
//       }}
//     >
//       {/* ICON WRAPPER (FIXED SHAPE) */}
//       <Box
//   sx={{
//     width: 42,
//     height: 42,

//     borderRadius: 2,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',

//     transition: 'all 0.25s ease',

//     bgcolor: active
//       ? isDark
//         ? 'rgba(255,255,255,0.10)'
//         : 'rgba(0,0,0,0.06)'
//       : 'transparent',

//     backdropFilter: active ? 'blur(10px)' : 'none',
//     WebkitBackdropFilter: active ? 'blur(10px)' : 'none',

//     border: active
//       ? '1px solid'
//       : '1px solid transparent',

//     borderColor: active
//       ? isDark
//         ? 'rgba(255,255,255,0.15)'
//         : 'rgba(0,0,0,0.12)'
//       : 'transparent',

//     boxShadow: active
//       ? isDark
//         ? '0 8px 20px rgba(0,0,0,0.45)'
//         : '0 8px 18px rgba(0,0,0,0.12)'
//       : 'none',

//     transform: active ? 'translateY(-3px)' : 'translateY(0)',
//   }}
// >
//   {item.icon}
// </Box>

//       {/* LABEL */}
//       <Typography
//         sx={{
//           fontSize: 10,
//           color: active ? 'primary.main' : 'text.secondary',
//           fontWeight: active ? 600 : 400,
//         }}
//       >
//         {item.name}
//       </Typography>

//       {/* DOT INDICATOR */}
//       <Box
//         sx={{
//           width: 4,
//           height: 4,
//           borderRadius: '50%',
//           bgcolor: active ? 'primary.main' : 'transparent',
//           transition: '0.2s',
//         }}
//       />
//     </Box>
//   );
// })}
//       </Stack>
//     </Box>
//   );
// }


// طرح ۳:
// 'use client';
// import { Stack, Typography, useTheme } from '@mui/material';
// import { usePathname, useRouter } from 'next/navigation';
// import {
//   GoldReceiveIcon,
//   HomeIcon,
//   OrderIcon,
//   ProfileIcon,
//   ReportsIcon,
// } from '../CustomIcons/CustomIcons';
// import { useEffect, useState } from 'react';

// const appbarItems = [
//   { name: 'پروفایل', icon: <ProfileIcon />, link: '/dashboard/profile' },
//   { name: 'فیزیکی', icon: <GoldReceiveIcon />, link: '/dashboard/gold-receive' },
//   { name: 'خانه', icon: <HomeIcon />, link: '/dashboard' },
//   { name: 'سفارش', icon: <OrderIcon />, link: '/dashboard/trades' },
//   { name: 'گزارش‌ها', icon: <ReportsIcon />, link: '/dashboard/reports' },
// ];

// export default function MobileAppbar() {
//   const [isActive, setIsActive] = useState('');
//   const router = useRouter();
//   const pathname = usePathname();
//   const theme = useTheme();
//   const isDarkMode = theme.palette.mode === 'dark';

//   useEffect(() => {
//     setIsActive(pathname);
//   }, [pathname]);

//   const gold = '#D4B84A';
//   const darkBg = '#1a1a16';
//   const itemBg = '#252520';
//   const inactiveColor = 'rgba(255,255,255,0.38)';

//   return (
//     <Stack
//       position="fixed"
//       width="100%"
//       zIndex={10}
//       left={0}
//       bottom={0}
//       direction="row"
//       justifyContent="space-around"
//       alignItems="center"
//       sx={{
//         bgcolor: darkBg,
//         borderTop: '0.5px solid rgba(255,255,255,0.07)',
//         py: 1,
//         pb: 'max(12px, env(safe-area-inset-bottom))',
//         px: 1,
//       }}
//     >
//       {appbarItems.map((item) => {
//         const active = isActive === item.link;

//         return (
//           <Stack
//             key={item.name}
//             direction="column"
//             alignItems="center"
//             gap={1}
//             onClick={() => {
//               router.push(item.link);
//               setIsActive(item.link);
//             }}
//             sx={{
//               cursor: 'pointer',
//               WebkitTapHighlightColor: 'transparent',
//               userSelect: 'none',
//               '&:active .icon-wrap': { transform: 'scale(0.90)' },
//             }}
//           >
//             <Stack
//               className="icon-wrap"
//               sx={{
//                 width: 44,
//                 height: 44,
//                 borderRadius: '12px',
//                 bgcolor: active ? 'rgba(212,175,55,0.12)' : itemBg,
//                 border: active
//                   ? '0.5px solid rgba(212,175,55,0.35)'
//                   : '0.5px solid rgba(255,255,255,0.06)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 transition: 'all 0.25s ease',
//                 '& svg': {
//                   width: 22,
//                   height: 22,
//                   color: active ? gold : inactiveColor,
//                   transition: 'color 0.25s ease',
//                 },
//               }}
//             >
//               {item.icon}
//             </Stack>

//             <Typography
//               sx={{
//                 fontSize: '10px',
//                 fontWeight: active ? 500 : 400,
//                 color: active ? gold : inactiveColor,
//                 transition: 'color 0.25s ease',
//                 fontFamily: 'Vazirmatn, IRANSans, Tahoma, sans-serif',
//                 lineHeight: 1,
//               }}
//             >
//               {item.name}
//             </Typography>
//           </Stack>
//         );
//       })}
//     </Stack>
//   );
// }
