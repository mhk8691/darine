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
import AddIcon from '@mui/icons-material/Add';
export const handleLogout = async () => {
  try {
    if (typeof window !== 'undefined' && window.AndroidBridge) {
      window.AndroidBridge.notifyUserLogout();

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    const response = await logout();

    showSnackbar(response.data.message, 'success');

    return response;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};
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
        showSnackbar(response.data.message, 'success');
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
        showSnackbar(response.data.message, 'success');
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
             showSnackbar(res.data.message, 'success');
             setStep(0);
        setOpen(false)
         } catch (error: unknown) {
           if (isAxiosError(error)) {
             showSnackbar(error.response?.data.message);
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

  return (
    <>
      <Stack direction={'row'} gap={1}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: 14,
          fontWeight: 800,
          py: 1,
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
          py: 1,
          px: 2,
          borderRadius: '7px',
         whiteSpace:'nowrap',
         width:'50%',
          mt: 5,
          color:'red',
          border:'1px solid red'
        }}
        onClick={async ()=>{
          const res = await handleLogout()
          if (res?.status === 200 || res?.status === 201){
            router.push('/login/login-password')
          }
        }}
      >
       خروج
      </Button>
    </Stack>
          <Button
        variant="outlined"
        color='secondary'
        startIcon={<AddIcon/>}
        sx={{
          fontSize: 14,
          fontWeight: 800,
          py: 1,
          px: 2,
          borderRadius: '7px',
         whiteSpace:'nowrap',
         width:'100%',
          mt: 2,
        }}
        onClick={()=>router.push('/dashboard/tickets')}
      >
       ثبت تیکت
      </Button>
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
          <Field type='number' setValue={setPhoneNumber} value={phoneNumber} label="شماره موبایل شما" />
        ) : step === 1 ? (
          <Field type='number' setValue={setOtpCode} value={otpCode} label="کد تایید" />
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
