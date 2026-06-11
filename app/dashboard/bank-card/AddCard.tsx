'use client';
import CustomModal from '@/app/Components/CustomModal/CustomModal';
import { Button, IconButton, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Dispatch, SetStateAction, useState } from 'react';

import Field from '@/app/login/Field';
import { Close } from '@mui/icons-material';
import { addBankCard, getBankCard } from '@/lib/getbankCard/bankCard';
import { BankCardDataType } from '@/app/core/Types';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import Loading from '@/app/Components/Loading/Loading';
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  setBankCardData: Dispatch<SetStateAction<BankCardDataType[]>>;
}
export default function AddCard({ setOpen, setValue, open, value, setBankCardData }: Props) {
  const [isLoading,setIsLoading] = useState(false)
  const handleAddBankCard = async () => {
  try{
    setIsLoading(true)
      const res = await addBankCard(value);
      showSnackbar(res.message,true)
    const response = await getBankCard();
    setBankCardData(response && response?.length > 0 ? response : []);
    setValue('');
    setOpen(false);
  }catch(error:unknown){
    if (isAxiosError(error)){
      showSnackbar(error.response?.data.message)
    }
  }finally{
    setIsLoading(false)
  }
  };
  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      modalStyle={{
        px: 2,
        pb: 2,
      }}
    >
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="body1" fontSize={16}>
          افزودن کارت جدید
        </Typography>
        <IconButton onClick={() => setOpen(false)}  >
          <Close />
        </IconButton>
      </Stack>
      <Typography variant="body1" fontSize={14} sx={{ mt: 3 }}>
        شماره‌ی کارت بانکی خود را وارد کنید
      </Typography>
      <Field type='number' value={value} setValue={setValue} placeholder="شماره کارت جدید" />
      <Button
        variant="contained"
        color="primary"
        sx={{
          height:60,
          fontSize: 16,
          borderRadius: 2,
          width: '100%',
          mt: 8,
          '&.Mui-disabled': {
            bgcolor: 'background.border',
          },
        }}
         
        onClick={handleAddBankCard}
        disabled={isLoading}
      >
        {isLoading ? <Loading size={30} />:'ثبت'}
      </Button>
    </CustomModal>
  );
}
