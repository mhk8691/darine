'use client';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { GiftCardListType } from '@/app/core/Types';
import { getGiftCardList } from '@/lib/reports/getReports';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

export default function GiftCardList() {
  const [giftCards,setGiftCards] = useState<[]>([])
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  useEffect(()=>{
    const getData = async ()=>{
      const response = await getGiftCardList()
      setGiftCards(response || [])
    }
    getData()
  },[])
  return (
    <Grid size={12}>
      <OrderDetail
        title={isDesktop ? 'لیست کارت‌های هدیه شما' : ''}
        toggleItems={[]}
        type="chip"
        emptyMessage="کارت هدیه‌ای توسط شما خریداری نشده است."
      
      />
    </Grid>
  );
}
