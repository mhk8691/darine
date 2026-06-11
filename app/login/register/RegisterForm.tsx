'use client';
import { Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Field from '../Field';
import SubmitButton from '../SubmitButton';
import { register } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { useRouter } from 'next/navigation';
import PasswordField from '../PasswordField';
import CustomDatePicker, { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { handleLogout } from '@/app/dashboard/profile/ChangePassword';

export interface RegisterFormType {
  mobile: string;
  national_code: string;
  birth_date?: string;
  first_name: string;
  last_name: string;
  password: string;
}
export default function RegisterForm({ phoneNumber }: { phoneNumber: string }) {
  const [birthDay, setBirthDay] = React.useState<DatePickerValue>(null);
  const [nationalCode, setNationalCode] = useState('');
 const [isLoading,setIsLoading] = useState(false)

  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
 const [referralCode, setReferralCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    const newRegisterForm = {
      mobile: phoneNumber,
      national_code: nationalCode,
      birth_date: birthDay?.date,
      first_name: firstName,
      last_name: lastName,
      password,
      confirm_password:repeatPassword,
      referral_code:referralCode
    };
    try {
      setIsLoading(true)
      const response = await register(newRegisterForm);
      if (response.status === 200 || response.status === 201) {
        showSnackbar(response?.data.message, true);
        router.push('/dashboard');
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }finally{
      setIsLoading(false)
    }
  };
  return (
    <>
      <Grid container spacing={1.5}>
      <form
  onSubmit={(e) => {
    e.preventDefault();
    handleRegister();
  }}
>
  <Grid container spacing={1.5}>
    {/* فیلد مخفی شماره موبایل برای تشخیص Password Manager */}
    <input
      type="tel"
      name="username"
      autoComplete="username"
      value={phoneNumber}
      readOnly
      style={{
        position: 'absolute',
        opacity: 0,
        pointerEvents: 'none',
        height: 0,
        width: 0,
      }}
    />

    <Grid size={12}>
      <Field
      type='number'
        value={nationalCode}
        setValue={setNationalCode}
        label="کد ملی"
      />
    </Grid>

    <Grid size={12}>
      <Stack>
        <CustomDatePicker value={birthDay}  onChange={(val) => setBirthDay(val)} label='تاریخ تولد' isRange={false} style={{
              mt:2,
               '& .MuiInputBase-input': {
          py: 2.5,
          fontSize: '14px',
        },
           '& .MuiOutlinedInput-root': {
          fontSize: {
            xs: 14,
            sm: 16,
          },
          borderRadius:2.5,
        },
        '& .MuiInputLabel-root': {
          color: 'text.muted',
          fontSize: {
            xs: '14px',
            sm: '16px',
          },
        },
        
            }} />
      </Stack>
    </Grid>

    <Grid size={6}>
      <Field
      type='text'
        value={firstName}
        setValue={setFirstName}
        label="نام"
      />
    </Grid>

    <Grid size={6}>
      <Field
      type='text'
        value={lastName}
        setValue={setLastName}
        label="نام خانوادگی"
      />
    </Grid>

    <Grid size={12}>
      <Field
      type='text'
        value={referralCode}
        setValue={setReferralCode}
        label="کد نمایندگی (اختیاری)"
      />
    </Grid>

    <Grid size={12}>
             <PasswordField
        password={password}
        setPassword={setPassword}
        inputProps={{
          name: 'password',
          autoComplete: 'current-password',
        }}
      />
    </Grid>

    <Grid size={12}>
      <PasswordField
        password={repeatPassword}
        setPassword={setRepeatPassword}
        label="تکرار رمز عبور"
      />
    </Grid>
  </Grid>

  <SubmitButton
    title="ثبت نام"
    isLoading={isLoading}
    type="submit"
  />
</form>  
      {/* <SubmitButton title={'ثبت نام'} isLoading={isLoading} handleSubmit={handleRegister} /> */}
      </Grid>

    </>
  );
}
