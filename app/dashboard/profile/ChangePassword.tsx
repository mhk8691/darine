'use client';
import CustomModal from '@/app/Components/CustomModal/CustomModal';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import Field from '@/app/login/Field';
import { fogetPasswordComplete, forgetPasswordRequest, logout, verifyForgetOtp } from '@/lib/auth';
import { Close } from '@mui/icons-material';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import { useState } from 'react';
import CompletePassword from './CompletePassword';
import Loading from '@/app/Components/Loading/Loading';
import { useRouter } from 'next/navigation';

export default function ChangePassword() {
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [step, setStep] = useState(0);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isLoading,setIsLoading] = useState(false)
  const router = useRouter()
  const handleClick = async () => {
    if (step === 0) {
      try {
        setIsLoading(true)
        const response = await forgetPasswordRequest(phoneNumber);
        showSnackbar(response.data.message, true);
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          showSnackbar(error.response?.data.message);
        }
      }finally{
        setIsLoading(false)
      }
      setStep(1);
    } else if (step == 1) {
       try {
        setIsLoading(true)
        const response = await verifyForgetOtp(phoneNumber, otpCode);
        showSnackbar(response.data.message, true);
        setStep(3);
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          showSnackbar(error.response?.data.message);
        }
      }finally{
        setIsLoading(false)
      }
      setStep(2);
    } else if (step === 2) {
      try {
        setIsLoading(true)
           const res = await fogetPasswordComplete(phoneNumber, otpCode,password,repeatPassword);
             showSnackbar(res.data.message, true);
             setStep(0);
        setOpen(false)
         } catch (error: unknown) {
           if (isAxiosError(error)) {
             showSnackbar(error.response?.data.message, false);
           }
         }finally{
          setIsLoading(false)
         }
      
    }
    // else{
    //      try {
    //     const response = await fogetPasswordComplete(phoneNumber, otpCode,password,repeatPassword);
    //     showSnackbar(response.data.message, true);
    //     setStep(0);
    //     setOpen(false)
    //   } catch (error: unknown) {
    //     if (isAxiosError(error)) {
    //       showSnackbar(error.response?.data.message);
    //     }
    //   }
    // }
  };
   const handleLogout = async ()=>{
      try{
        const response = await logout()
        showSnackbar(response.message,true)
        router.push('/login/login-password')
      }catch(error:unknown){
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.message)
        }
      }
    }
  return (
    <>
      <Stack direction={'row'} gap={1}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: 14,
          fontWeight: 800,
          py: 0.5,
          px: 2,
          borderRadius: '7px',
         whiteSpace:'nowrap',
         width:'50%',
          mt: 5,
        }}
        onClick={() => setOpen(true)}
      >
        تنظیم یا تغییر رمز ورود
      </Button>
         <Button
        variant="outlined"
        sx={{
          fontSize: 14,
          fontWeight: 800,
          py: 0.5,
          px: 2,
          borderRadius: '7px',
         whiteSpace:'nowrap',
         width:'50%',
          mt: 5,
          color:'red',
          border:'1px solid red'
        }}
        onClick={handleLogout}
      >
       خروج
      </Button>
    </Stack>
      <CustomModal open={open} setOpen={setOpen} modalStyle={{ py: 3, px: 2 }}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="body1" fontSize={16}>
            فراموشی رمز عبور
          </Typography>
          <IconButton onClick={() => {
            setOpen(false)
            setStep(0)
          }}  >
            <Close />
          </IconButton>
        </Stack>
        <Typography variant="body1" fontSize={16} sx={{ my: 3 }}>
          {step === 0
            ? 'به منظور تغییر رمزعبور باید کدی به شماره موبایل شما ارسال شود.'
            : step === 1
              ? `کدتایید ارسال شده به شماره موبایل ${phoneNumber} را وارد کنید`
              : 'رمز عبور جدید را با توجه به شرایط ذکر شده تعیین کنید.'}
        </Typography>
        {step === 0 ? (
          <Field setValue={setPhoneNumber} value={phoneNumber} label="شماره موبایل شما" />
        ) : step === 1 ? (
          <Field setValue={setOtpCode} value={otpCode} label="کد تایید" />
        ) : (
       <CompletePassword password={password} repeatPassword={repeatPassword} setPassword={setPassword} setRepeatPassword={setRepeatPassword} />
        )}

        <Button
          variant="contained"
          color="primary"
           
          sx={{
            height:60,
            fontSize: 22,
            width: '100%',
            borderRadius: 2,
            mt: 6,
            '&:hover': {
              bgcolor: 'primary.main',
            },
          }}
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? <Loading size={30}/>:step < 2 ? 'ادامه' : 'تایید'}
        </Button>
      </CustomModal>
    </>
  );
}
