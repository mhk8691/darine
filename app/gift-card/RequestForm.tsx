'use client';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button, Grid, Stack, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import Container from '../Components/Containers/Container/Container';
import InputField from '../Components/InputField/InputField';

type FormState = {
  name: string;
  id: string;
  lastName: string;
  phoneNumber: string;
  numberCard: string;
  gold: string;
  description: string;
};

export default function RequestForm() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [form, setForm] = useState<FormState>({
    name: '',
    id: '',
    lastName: '',
    phoneNumber: '',
    numberCard: '',
    gold: '',
    description: '',
  });

  const handleChange = (key: keyof FormState) => (value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const inputList = [
    {
      placeholder: 'نام سازمان سفارش دهنده',
      value: form.name,
      setValue: handleChange('name'),
    },
    {
      placeholder: 'شناسه ملی شرکت',
      value: form.id,
      setValue: handleChange('id'),
    },
    {
      placeholder: 'نام و نام خانوادگی درخواست دهنده',
      value: form.lastName,
      setValue: handleChange('lastName'),
    },
    {
      placeholder: 'شماره همراه',
      value: form.phoneNumber,
      setValue: handleChange('phoneNumber'),
    },
    {
      placeholder: 'تعداد کارت درخواستی',
      value: form.numberCard,
      setValue: handleChange('numberCard'),
    },
    {
      placeholder: 'طلای درخواستی برای هر کارت هدیه',
      value: form.gold,
      setValue: handleChange('gold'),
    },
    {
      placeholder: 'توضیحات تکمیلی',
      value: form.description,
      setValue: handleChange('description'),
    },
  ];

  return (
    <Grid container spacing={{ xs: 3, sm: 9 }}>
      <Grid size={12}>
        <Typography
          variant="h1"
          fontSize={{ xs: 16, sm: 30 }}
          fontWeight={700}
          sx={{ color: 'text.title', textAlign: 'center' }}
        >
          فرم درخواست کارت هدیه سازمانی دارینه
        </Typography>
      </Grid>

      <Grid size={12}>
        <Container
          style={{
            bgcolor: isDarkMode ? 'background.paper' : 'background.default',
            border: 1,
            borderColor: 'background.border',
            px: { xs: 2, sm: 10, md: 5, lg: 14 },
            py: { xs: 2, sm: 5.5 },
            pb: { xs: 6, sm: 5.5 },
          }}
        >
          <Typography variant="h6" fontSize={{ xs: 14, sm: 22 }}>
            با استفاده از فرم زیر درخواست خود را برای ما ارسال کنید.
          </Typography>

          <Stack
            bgcolor={isDarkMode ? '#32281B' : '#FEF4E8'}
            direction="row"
            alignItems="flex-start"
            gap={1}
            p={{ xs: 2, sm: 3 }}
            borderRadius={3}
            mt={3}
          >
            <InfoOutlinedIcon sx={{ color: '#F69622' }} />
            <Typography variant="h6" fontSize={16} sx={{ color: '#F69622' }}>
              در صورت درخواست کارت هدیه سازمانی دارینه، فقط درخواست‌های سازمانی را ثبت کنید. اگر
              کاربر حقیقی هستید، لطفاً از صفحه{' '}
              <Link href="/dashboard/gift-card-menu" style={{ color: '#275CFF' }}>
                خرید کارت هدیه
              </Link>{' '}
              ادامه دهید.
            </Typography>
          </Stack>

          <Grid container spacing={3} mt={5}>
            {inputList.map((item) => (
              <Grid
                size={{
                  xs: 12,
                  md: item.placeholder === 'توضیحات تکمیلی' ? 12 : 6,
                }}
                key={item.placeholder}
              >
                <InputField
                type='number'
                  placeholder={item.placeholder}
                  value={item.value}
                  setValue={item.setValue}
                  style={{
                    width: '100%',
                    bgcolor: 'background.default',
                  }}
                  title={item.placeholder === 'طلای درخواستی برای هر کارت هدیه' ? 'گرم' : ''}
                />
              </Grid>
            ))}

            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: { xs: 12, sm: 18 },
                borderRadius: 2,
                py: 1.5,
                width: { xs: '30%', sm: '45%', md: '30%', lg: '25%' },
                mt: 2,
              }}
            >
              ثبت درخواست
            </Button>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
