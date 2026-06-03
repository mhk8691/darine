'use client'
import Container from '@/app/Components/Containers/Container/Container';
import { Grid } from '@mui/material';
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
import { getGiftCardData } from '../gift-cards/page';
// export const metadata: Metadata = {
//   title: 'خرید کارت هدیه | دارینه',
//   description: '',
// };
export default  function page() {
    const [giftCardList, setGetGiftCardList] = useState<GiftCardListType[]>([] as GiftCardListType[]);
  

       useEffect(() => {
           const getData = async ()=>{
             const response = await getGiftCardData()
     setGetGiftCardList(response || []) 
           }
           getData()
         }, []);
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
       <GiftCardOrder getData={getGiftCardData} giftCardData={giftCardList} />
      </Grid>
    </Grid>
  );
}
