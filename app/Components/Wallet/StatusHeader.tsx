'use client';

import { usePathname } from 'next/navigation';
import { useAssets } from '@/app/AssetsProvider';
import priceFormater from '@/app/core/PriceFormater';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function StatusHeader() {
  const pathname = usePathname();

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { assets } = useAssets();

  const whiteList = [
    '/about-us',
    '/application',
    '/branches',
    '/calculator',
    '/coin-price',
    '/faq',
    '/gift-card',
    '/gold-price',
    '/gold-shop',
    '/gold-shop-basket',
    '/license',
    '/partners',
    '/rules',
  ];

const isLoginPage = pathname.startsWith('/login');

const showOnAllSizes = whiteList.includes(pathname);

const shouldShow = !isLoginPage && (isMobile || showOnAllSizes);

  return (
    <>
      {shouldShow && (
        <Stack
          direction="row"
          justifyContent="space-between"
          bgcolor={isDarkMode ? '#393936' : '#FEF2C0'}
          p={{
            xs:1.5,sm:2
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: 'text.title' }}
            fontSize={{ xs: 12, lg: 14, xl: 16 }}
          >
            قیمت لحظه ای طلا ۱۸ عیار(گرمی):
          </Typography>

          <Typography
            variant="body1"
            fontSize={{ xs: 12, lg: 14, xl: 16 }}
          >
            {priceFormater(assets.current_gold_price)} تومان
          </Typography>
        </Stack>
      )}

      <Box pb={{ xs: 3, sm: 0 }} />
    </>
  );
}