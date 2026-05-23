'use client';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Field from '../Field';
import SubmitButton from '../SubmitButton';
import { register } from '@/lib/auth';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { useRouter } from 'next/navigation';
import PasswordField from '../PasswordField';

export interface RegisterFormType {
  mobile: string;
  national_code: string;
  birth_day: string;
  birth_month: string;
  birth_year: string;
  // cardNumber:string,
  first_name: string;
  last_name: string;
  password: string;
}
export default function RegisterForm({ phoneNumber }: { phoneNumber: string }) {
  const [birthDay, setBirthDay] = useState('');
  const [nationalCode, setNationalCode] = useState('');
 const [isLoading,setIsLoading] = useState(false)
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
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
      birth_day: birthDay,
      birth_month: birthMonth,
      birth_year: birthYear,
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
        router.push('/login/login-password');
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
        <Grid size={12}>
          <Field value={nationalCode} setValue={setNationalCode} label="کد ملی" />
        </Grid>
        <Grid container spacing={2}>
          <Grid size={4}>
            <Field value={birthDay} setValue={setBirthDay} label="روز تولد" />
          </Grid>
          <Grid size={4}>
            <Field value={birthMonth} setValue={setBirthMonth} label="ماه تولد" />
          </Grid>
          <Grid size={4}>
            <Field value={birthYear} setValue={setBirthYear} label="سال تولد" />
          </Grid>
        </Grid>
 
        <Grid size={6}>
          <Field value={firstName} setValue={setFirstName} label="نام" />
        </Grid>{' '}
        <Grid size={6}>
          <Field value={lastName} setValue={setLastName} label="نام خانوادگی" />
        </Grid>
         <Grid size={12}>
          <Field value={referralCode} setValue={setReferralCode} label="کد معرف (اختیاری)" />
        </Grid>
        <Grid size={12}>
          <PasswordField password={password} setPassword={setPassword} label="رمز عبور" />
        </Grid>
         <Grid size={12}>
          <PasswordField password={repeatPassword} setPassword={setRepeatPassword} label="تکرار رمز عبور" />
        </Grid>
      </Grid>

      <SubmitButton title={'ثبت نام'} isLoading={isLoading} handleSubmit={handleRegister} />
    </>
  );
}
