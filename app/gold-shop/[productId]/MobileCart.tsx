'use client';
import { CartIcon } from '@/app/Components/CustomIcons/CustomIcons';
import priceFormater from '@/app/core/PriceFormater';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import Counter from './Counter';
import { useState } from 'react';

export default function MobileCart() {
  const [count,setCount] = useState(1)
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down('md'));
  if (!isDesktop) return null;
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      bgcolor={'background.default'}
      position={'fixed'}
      bottom={0}
      width={'100%'}
      p={2}
      sx={{ boxShadow: '0 0 20px background.paper' }}
    >
      <Stack direction={'row'} gap={1}>
        <Link href={'/gold-shop-basket'}>
          <Stack bgcolor={'primary.main'} p={1.5} borderRadius={2}>
            <CartIcon color="black" />
          </Stack>
        </Link>
        <Counter count={count} setCount={setCount} />
      </Stack>
      <Stack direction={'column'} gap={1} alignItems={'flex-end'}>
        <Typography variant="body1" sx={{ color: 'text.subtitle', fontSize: 12 }}>
          قیمت
        </Typography>
        <Typography variant="body2" fontSize={16}>
          {priceFormater(25294657)}
          <Box component={'span'} fontSize={12}>
            تومان
          </Box>
        </Typography>
      </Stack>
    </Stack>
  );
}
