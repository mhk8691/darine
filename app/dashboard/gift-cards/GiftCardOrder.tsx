'use client';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { GiftCardListType } from '@/app/core/Types';
import {
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import GiftCardTable from './GiftCardTable';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
export const statuses = [
  { label: 'فعال', value: 'ACTIVE' },
  { label: 'غیرفعال', value: 'INACTIVE' },
 
];
export default function GiftCardOrder({giftCardData,getData}:{giftCardData:GiftCardListType[],getData: (status?: string | undefined, date?: DatePickerValue | undefined) => Promise<GiftCardListType[] | undefined>}) {
  const [status,setStatus] = useState('')
  const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(()=>{
    getData(status,dateRange)
  },[dateRange,status])
  return (
    <Grid size={12}>
      <OrderDetail
      statuses={statuses}
        listLength={giftCardData?.length}
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
         <GiftCardTable giftCardsList={giftCardData}/>
        }
      />
    </Grid>
  );
}
