'use client';

import InputField from '@/app/Components/InputField/InputField';
import Loading from '@/app/Components/Loading/Loading';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { GiftCardListType } from '@/app/core/Types';
import { getGiftCardList, giftCardSubmit } from '@/lib/giftCard/giftCard';
import { Stack, Button, useTheme, useMediaQuery } from '@mui/material';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';

export default function Form({setGiftCardData}:{setGiftCardData:Dispatch<SetStateAction<GiftCardListType[]>>}) {
  const [value, setValue] = useState('');
  const [isLoading,setIsLoading] = useState(false)
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const router = useRouter()
  const handleSubmit = async ()=>{
    try{
      setIsLoading(true)
      const response = await giftCardSubmit(value)
      const res = await getGiftCardList()
      setGiftCardData(res)
       showSnackbar(response.message, true);
       setValue('')
    }catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }finally{
    setIsLoading(false)
  }
  }
  return (
    <Stack direction={'column'} gap={1} mt={3.5}>
      <InputField type='text' placeholder="شماره سریال روی کارت هدیه" setValue={setValue} value={value} />
      <Stack direction={'row'} gap={2} mt={1}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: {
              xs: 14,
              sm: 20,
            },
            width: {
              xs: '100%',
              sm: '70%',
            },
            height:60,
            borderRadius: 2,
          }}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? <Loading size={30}/>:'ثبت'}
        </Button>
        {isDesktop && (
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              fontSize: {
                xs: 14,
                sm: 20,
              },
              width: '30%',
              py: 1,
              borderRadius: 2,
            }}
            onClick={()=>router.back()}
          >
            بازگشت
          </Button>
        )}
      </Stack>
    </Stack>
  );
}
