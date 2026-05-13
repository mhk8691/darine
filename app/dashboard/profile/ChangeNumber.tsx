'use client';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import Field from '@/app/login/Field';
import { changeNumberConfirm, changeNumberRequest } from '@/lib/auth';
import { Button, Stack } from '@mui/material';
import { isAxiosError } from 'axios';
import { useState } from 'react';

export default function ChangeNumber() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
    const [step,setStep] = useState(0)
  const handleClick = async ()=>{
    if (step === 0){
      try{
        const response = await changeNumberRequest(phoneNumber)
        showSnackbar(response.data.message,true)
        setStep(1)
      }catch(error:unknown){
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.error)
        }
      }
      
    }
    else if (step === 1){
       try{
        const response = await changeNumberConfirm(phoneNumber,otpCode)
        showSnackbar(response.data.message,true)
          setStep(0)
          setOtpCode('')
          setPhoneNumber('')
      }catch(error:unknown){
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.error)
        }
      }
    }
  
  }

  return (
    <Stack
      direction={'row'}
      gap={1}
      mt={{
        xs: 2,
        sm: 5,
      }}
      width={'100%'}
      alignItems={'center'}
    >
      {
        step === 0 ?      <Field
        placeholder="شماره تلفن جدید"
        setValue={setPhoneNumber}
        value={phoneNumber}
        style={{
          mt:0,
          '& .MuiInputBase-input': {py:2.5},
          width: {
            xs: '70%',
            sm: '80%',
            md: '75%',
          },
        }}
      />:    <Field
        placeholder="کد ارسال شده"
        setValue={setOtpCode}
        value={otpCode
}
        style={{
          mt:0,
          '& .MuiInputBase-input': {py:2.5},
          width: {
            xs: '70%',
            sm: '80%',
            md: '75%',
          },
        }}
      />
      }
 
      
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: {
            xs: 14,
            sm: 16,
          },
          borderRadius: 2,
          width: {
            xs: '30%',
            sm: '20%',
            md: '25%',
          },
          fontWeight: '600',
          py:2
        }}
        onClick={handleClick}
      >
        ارسال کد
      </Button>
    </Stack>
  );
}
