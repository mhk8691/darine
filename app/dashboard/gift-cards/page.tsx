'use client'
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Metadata } from 'next';
import BackLink from '../BackLink';
import { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { getGiftCardList } from '@/lib/giftCard/giftCard';
import { GiftCardListType } from '@/app/core/Types';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import GiftCardTable from './GiftCardTable';
// export const metadata: Metadata = {
//   title: 'لیست کارت هدیه | دارینه',
//   description: '',
// };

export const giftCardStatus = [
  { label: 'فعال', value: 'ACTIVE' },
  { label: 'غیرفعال', value: 'INACTIVE' },
 
];

export default function page() {
    const [giftCardList, setGetGiftCardList] = useState<GiftCardListType[]>([] as GiftCardListType[]);
    const [status,setStatus] = useState('')
    const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
   const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    useEffect(() => {
      const getData = async () => {
        try{
          const response = await getGiftCardList(status,dateRange);
          setGetGiftCardList(response)
        }catch(error:unknown){
          if (isAxiosError(error)){
            showSnackbar(error.response?.data.message)
          }
        }
      };
      getData()
    }, [status,dateRange]);
  return (
    <Grid container>
      <BackLink title="لیست کارت های هدیه شما" />
        <Grid size={12}>
      <OrderDetail
      statuses={giftCardStatus}
        listLength={giftCardList?.length}
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
         <GiftCardTable giftCardsList={giftCardList}/>
        }
      />
    </Grid>
    </Grid>
  );
}
