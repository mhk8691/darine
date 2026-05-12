'use client'
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import { Box, Grid } from '@mui/material';
import { Metadata } from 'next';
import ChartContainer from './ChartContainer';
import PriceAlert from './PriceAlert';
import BackLink from '../BackLink';
import { useEffect, useState } from 'react';
import { PriceAlertsDataType } from '@/app/core/Types';
import { getPriceAlerts } from '@/lib/priceAlert/priceAlert';
// export const metadata: Metadata = {
//   title: 'آلارم قیمت | دارینه',
//   description: '',
// };
export default function page() {
  const [priceAlerts,setPriceAlerts]= useState<[]>([])
  useEffect(()=>{
    const getData = async ()=>{
      const response = await getPriceAlerts()
      setPriceAlerts(response || [])
    }
    getData()
  },[setPriceAlerts,priceAlerts])
  return (
    <Grid
      container
      spacing={{
        xs: 0,
        sm: 1,
        lg: 3,
      }}
      display={'flex'}
    >
      <BackLink title="آلارم قیمت" />

      <Grid
        size={12}
        display={{
          xs: 'none',
          sm: 'block',
        }}
      >
        <WalletHeader />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 4.9,
        }}
        height={'100%'}
      >
        <Box sx={{ height: '100%' }}>
          <PriceAlert />
        </Box>
      </Grid>
      <ChartContainer />
      <Grid size={12}>
        <OrderDetail
          type="chip"
          emptyMessage="آلارمی برای شما به ثبت نرسیده است"
          title="لیست آلارم‌های اخیر"
          toggleItems={[]}
        />
      </Grid>
    </Grid>
  );
}
