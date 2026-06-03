'use client'
import Container from '@/app/Components/Containers/Container/Container';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Metadata } from 'next';
import GiftStepper from './GiftStepper';
import Title from './Title';
import BackLink from '../BackLink';
import GiftCardOrder from '../gift-cards/GiftCardOrder';
import { GiftCardListType } from '@/app/core/Types';
import { useEffect, useState } from 'react';
import { getGiftCardList } from '@/lib/giftCard/giftCard';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import GiftCardTable from '../gift-cards/GiftCardTable';
import { giftCardStatus } from '../gift-cards/page';
// export const metadata: Metadata = {
//   title: 'خرید کارت هدیه | دارینه',
//   description: '',
// };
export default  function page() {
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
    <Grid container spacing={3}>
      <BackLink title="سفارش کارت هدیه" />
      <Grid size={12}>
        <Container
          style={{
            pb: {
              xs: 0,
              sm: 8,
            },
            px: {
              xs: 0,
              sm: 4,
            },
            border: {
              xs: 0,
              sm: 1,
            },
            borderColor: {
              sm: 'background.paper',
            },
          }}
        >
          <Title />
          <GiftStepper />
        </Container>
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
