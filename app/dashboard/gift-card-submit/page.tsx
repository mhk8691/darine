'use client'
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Metadata } from 'next';
import BackLink from '../BackLink';
import DesktopImage from './DesktopImage';
import Form from './Form';
import LaptopImage from './LaptopImage';
import { useEffect, useState } from 'react';
import { GiftCardListType } from '@/app/core/Types';
import { getGiftCardList } from '@/lib/giftCard/giftCard';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import {  giftCardStatus } from '../gift-cards/page';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import GiftCardTable from '../gift-cards/GiftCardTable';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
// export const metadata: Metadata = {
//   title: 'دریافت کارت هدیه | دارینه',
//   description: '',
// };
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
    <Grid
      container
      spacing={{
        xs: 4,
        sm: 1,
        lg: 3,
      }}
    >
      {' '}
      <BackLink title="ثبت کد کارت هدیه" />
      <Grid
        size={12}
        bgcolor={'background.default'}
        border={{
          xs: 0,
          sm: 1,
        }}
        borderColor={{
          sm: 'background.paper',
        }}
        borderRadius={2.5}
        direction={'row'}
        alignItems={'center'}
        px={{
          xs: 0,
          sm: 7,
        }}
        py={{
          xs: 0,
          sm: 3,
        }}
        container
        spacing={12}
        pb={{
          xs: 0,
          sm: 8,
        }}
      >
        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >
          <Typography
            variant="h6"
            fontSize={{
              xs: 16,
              sm: 22,
            }}
            sx={{
              color: 'text.title',
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            ثبت کد کارت هدیه
          </Typography>
          <Typography
            variant="h6"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
            sx={{
              color: 'text.secondary',
              mt: {
                xs: 2,
                sm: 1,
                md: 4.5,
              },
            }}
          >
            با وارد کردن شماره سریال کارت هدیه، طلای هدیه‌تان فعال می‌شود. اگر مقدار طلا به حد
            برداشت فیزیکی برسد، می‌توانید آن را به‌صورت شمش یا سکه تحویل بگیرید. در غیر این صورت،
            معادل ریالی آن قابل برداشت است.
          </Typography>
          <LaptopImage />
          <Typography
            variant="h6"
            fontSize={{
              xs: 12,
              sm: 18,
            }}
            sx={{
              mt: {
                xs: 3,
                md: 6,
              },
            }}
          >
            لطفا شماره سریال کارت هدیه را وارد کنید.
          </Typography>
          <Form setGiftCardData={setGetGiftCardList} />
        </Grid>
        <DesktopImage />
      </Grid>
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
