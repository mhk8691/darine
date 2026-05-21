'use client';
import CustomModal from '@/app/Components/CustomModal/CustomModal';
import { Close } from '@mui/icons-material';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import ChooseCity from './ChooseCity';
import NewAddress from './NewAddress';
import { giftCardOrder } from '@/lib/giftCard/giftCard';
import { showSnackbar } from '../Snackbar/Snackbar';
import { isAxiosError } from 'axios';


interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
    address:string
setAddress:Dispatch<SetStateAction<string>>
province:string
setProvince:Dispatch<SetStateAction<string>>
city:string
setCity:Dispatch<SetStateAction<string>>
setActiveStep:React.Dispatch<React.SetStateAction<number>>
}
export default function AddAddress({ open, setOpen,setAddress,address,province,setCity,city,setProvince,setActiveStep }: Props) {
  const [step, setStep] = useState(0);

  return (
    <>
      <CustomModal open={open} setOpen={setOpen} modalStyle={{ px: 1.5, pb: 2 }}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mb={2}>
          <Typography variant="body1" fontSize={16} fontWeight={600}>
            {step === 0 && ' انتخاب شهر'}
            {step === 1 && 'آدرس جدید'}
          </Typography>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
            disableRipple
          >
            <Close />
          </IconButton>
        </Stack>
        {step === 0 && <ChooseCity city={city} setCity={setCity} province={province} setProvince={setProvince} />}
        {step === 1 && <NewAddress setAddress={setAddress} address={address} />}

        <Stack direction={'row'} gap={3} mt={3}>
          <Button
            variant="contained"
            color="primary"
            disableRipple
          onClick={() => {
    if (step < 1) {
        setStep((prev) => prev + 1);
    } else {
        setStep(0);
        setActiveStep(2)
        setOpen(false);
    }
}}
            sx={{
              borderRadius: 2,
              py: 1.3,
              fontSize: 16,
              width: step > 0 ? '50%' : '100%',
            }}
          >
            {step === 1 ? 'ثبت آدرس' : 'ادامه'}
          </Button>
          {step > 0 && (
            <Button
              variant="outlined"
              color="inherit"
              disableRipple
              onClick={() => setStep((prev) => prev - 1)}
              sx={{
                borderRadius: 2,
                py: 1.3,
                fontSize: 16,
                width: '50%',
                color: 'text.title',
              }}
            >
              بازگشت
            </Button>
          )}
        </Stack>
      </CustomModal>
    </>
  );
}
