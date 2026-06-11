'use client';
import Loading from '@/app/Components/Loading/Loading';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import Field from '@/app/login/Field';
import { changeNumberConfirm, changeNumberRequest, getMe, User } from '@/lib/auth';
import { Button, Stack } from '@mui/material';
import { isAxiosError } from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';

export default function ChangeNumber({setUser}:{setUser:Dispatch<SetStateAction<User | null>>}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [step, setStep] = useState(0);
  const [isLoading,setIsLoading] = useState(false)
  const handleClick = async () => {
    if (step === 0) {
      try {
        setIsLoading(true)
        const response = await changeNumberRequest(phoneNumber);
        showSnackbar(response.data.message, 'success');
        setStep(1);
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          showSnackbar(error.response?.data.message);
        }
      }finally{
        setIsLoading(false)
      }
    } else if (step === 1) {
      try {
        setIsLoading(true)
        const response = await changeNumberConfirm(phoneNumber, otpCode);
        const res = await getMe()
        setUser(res)
        showSnackbar(response.data.message, 'success');
        setStep(0);
        setOtpCode('');
        setPhoneNumber('');
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          showSnackbar(error.response?.data.message);
        }
      }finally{
        setIsLoading(false)
      }
    }
  };

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
      {step === 0 ? (
        <Field
        type='number'
          placeholder="شماره تلفن جدید"
          setValue={setPhoneNumber}
          value={phoneNumber}
          style={{
            mt: 0,
            '& .MuiInputBase-input': { py: 2.5 },
            width: {
              xs: '70%',
              sm: '80%',
              md: '75%',
            },
          }}
        />
      ) : (
        <Field
        type='number'
          placeholder="کد ارسال شده"
          setValue={setOtpCode}
          value={otpCode}
          style={{
            mt: 0,
            '& .MuiInputBase-input': { py: 2.5 },
            width: {
              xs: '70%',
              sm: '80%',
              md: '75%',
            },
          }}
        />
      )}

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
          height:60
        }}
        onClick={handleClick}
        disabled={isLoading}
      >
       {isLoading ? <Loading size={30}/>:'ارسال کد'}
      </Button>
    </Stack>
  );
}
