'use client'
import { Grid } from '@mui/material';
import { Metadata } from 'next';
import BackLink from '../BackLink';
import GiftCardOrder from './GiftCardOrder';
import { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { getGiftCardList } from '@/lib/giftCard/giftCard';
import { GiftCardListType } from '@/app/core/Types';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
// export const metadata: Metadata = {
//   title: 'لیست کارت هدیه | دارینه',
//   description: '',
// };
export const getGiftCardData = async (status?:string,date?:DatePickerValue) => {
        try{
          const response = await getGiftCardList(status,date);
          return response
        }catch(error:unknown){
          if (isAxiosError(error)){
            showSnackbar(error.response?.data.message)
          }
        }
      };
export default function page() {
    const [giftCardList, setGetGiftCardList] = useState<GiftCardListType[]>([] as GiftCardListType[]);
  
 
    useEffect(() => {
      const getData = async ()=>{
        const response = await getGiftCardData()
setGetGiftCardList(response || []) 
      }
      getData()
    }, []);
  return (
    <Grid container>
      <BackLink title="لیست کارت های هدیه شما" />
      <GiftCardOrder giftCardData={giftCardList} getData={getGiftCardData} />
    </Grid>
  );
}
