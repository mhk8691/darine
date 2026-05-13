'use client';
import CustomModal from '@/app/Components/CustomModal/CustomModal';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import Field from '@/app/login/Field';
import PasswordField from '@/app/login/PasswordField';
import { forgetPassword, verifyForgetOtp } from '@/lib/auth';
import { Close, InfoOutlined } from '@mui/icons-material';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import { useState } from 'react';

export default function ChangePassword() {
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [step,setStep] = useState(0)
const [password,setPassword] = useState('')
const [repeatPassword,setRepeatPassword] = useState('')
  const handleClick = async ()=>{
    if (step === 0){
      try{
        const response = await forgetPassword(phoneNumber)
        showSnackbar(response.data.message,true)
      }catch(error:unknown){
        if(isAxiosError(error)){
          showSnackbar(error.response?.data.error)
        }
      }
      setStep(1)
    }else if (step ==1){
      
      
      setStep(2)
    }
    else if (step ===2){
      try{
        const response = await verifyForgetOtp(phoneNumber,otpCode,password)
        showSnackbar(response.data.message,true)
      }catch(error:unknown){
        if(isAxiosError(error)){
          showSnackbar(error.response?.data.error)
        }
      }
      setStep(0)
      setOpen(false)
    }
  }
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: 14,
          fontWeight: 800,
          py: 0.5,
          px: 2,
          borderRadius: '7px',
          color: 'black',
          width: 'fit-content',
          mt: 5,
        }}
        onClick={() => setOpen(true)}
      >
        تنظیم یا تغییر رمز ورود
      </Button>
      <CustomModal open={open} setOpen={setOpen} modalStyle={{ py: 3, px: 2 }}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="body1" fontSize={16}>
            فراموشی رمز عبور
          </Typography>
          <IconButton onClick={() => setOpen(false)} disableRipple>
            <Close />
          </IconButton>
        </Stack>
        <Typography variant="body1" fontSize={16} sx={{ my: 3 }}>
          {
            step === 0 ? 'به منظور تغییر رمزعبور باید کدی به شماره موبایل شما ارسال شود.' : step === 1 ? `کدتایید ارسال شده به شماره موبایل ${phoneNumber} را وارد کنید`:'رمز عبور جدید را با توجه به شرایط ذکر شده تعیین کنید.'
          }
         
         
        </Typography>
        {
          step === 0 ? (<Field setValue={setPhoneNumber} value={phoneNumber} label="شماره موبایل شما" />)
          :step === 1?<Field setValue={setOtpCode} value={otpCode} label="کد تایید" />:(
            <>
            <PasswordField password={password} setPassword={setPassword} />
        <PasswordField password={repeatPassword} setPassword={setRepeatPassword} label="تایید رمز عبور" />
        
        <Stack direction={"column"} gap={.5} mt={4}>
          <Stack direction={"row"} gap={1}>
            <InfoOutlined sx={{ color: "text.muted" }} />
            <Typography variant="body2" fontSize={14} sx={{ color: "text.muted" }}>
              رمز عبور باید بین 6 تا 24 حرف باشد
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <InfoOutlined sx={{ color: "text.muted" }} />
            <Typography variant="body2" fontSize={14} sx={{ color: "text.muted" }}>
              رمز باید شامل اعداد باشد
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <InfoOutlined sx={{ color: "text.muted" }} />
            <Typography variant="body2" fontSize={14} sx={{ color: "text.muted" }}>
              رمز باید شامل حروف بزرگتر و کوچکتر باشد
            </Typography>
          </Stack>
        </Stack>
            </>
          )
        }
        
        
        
        
        
        <Button
          variant="contained"
          color="primary"
          disableRipple
          sx={{
            py: 1.3,
            fontSize: 22,
            width: '100%',
            borderRadius: 2,
            mt: 6,
            '&:hover': {
              bgcolor: 'primary.main',
            },
          }}
          onClick={handleClick}
        >
         {
          step <2 ? 'ادامه':'تایید'
         }
        </Button>
      </CustomModal>
    </>
  );
}
