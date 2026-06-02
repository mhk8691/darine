'use client';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { GiftCardListType } from '@/app/core/Types';
import {
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import GiftCardTable from './GiftCardTable';
import { getGiftCardList } from '@/lib/giftCard/giftCard';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';

export default function GiftCardOrder({giftCardData}:{giftCardData?:GiftCardListType[]}) {
  const [giftCardList, setGetGiftCardList] = useState<GiftCardListType[]>([] as GiftCardListType[]);
  const [status,setStatus] = useState('')
  const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  useEffect(() => {
    const getData = async () => {
      try{
        const response = await getGiftCardList(status,dateRange);
        setGetGiftCardList(response || []);
      }catch(error:unknown){
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.message)
        }
      }
    };
    getData();
  }, [status,dateRange]);
  return (
    <Grid size={12}>
      <OrderDetail
        listLength={giftCardData ? giftCardData.length :giftCardList.length}
        title={isDesktop ? 'لیست کارت‌های هدیه شما' : ''}
        toggleItems={[]}
        type="chip"
        emptyMessage="کارت هدیه‌ای توسط شما خریداری نشده است."
        tableHead={['شماره سریال', 'وزن', 'وضعیت', 'تاریخ']}
        dateRange={dateRange}
        setDateRange={setDateRange}
        setStatus={setStatus}
status={status}
        tableBody={
         <GiftCardTable giftCardsList={giftCardData ? giftCardData :giftCardList}/>
        }
      />
    </Grid>
  );
}
