'use client';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import Container from '../Components/Containers/Container/Container';
import InputField from '../Components/InputField/InputField';
import api from '@/lib/api';
import { showSnackbar } from '../Components/Snackbar/Snackbar';
import { isAxiosError } from 'axios';

export default function Form() {
  const [description, setDiscription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const isDarkMode = theme.palette.mode === 'dark';
  const inputList = [
   

    {
      placeholder: 'نام و نام خانوادگی',
      value: fullName,
      setValue: setFullName,
    },
 
    {
      placeholder: 'شماره همراه',
      value: phoneNumber,
      setValue: setPhoneNumber,
    },
    {
      placeholder: 'توضیحات کامل همکاری',
      value: description,
      setValue: setDiscription,
    },

  
  ];
  const handleSubmit = async ()=>{
    const newData = {
      mobile:phoneNumber,
      full_name:fullName,
      description
    }
    try{
      const response = await api.post<{
      message:string
    }>('/accounts/cooperation-request/',newData)
    showSnackbar(response.data.message,'success')
    setDiscription('')
    setFullName('')
    setPhoneNumber('')
    }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)
      }
    }
  }
  return (
    <Grid container spacing={4.5} mt={15.5}>
      <Grid size={12}>
        <Typography
          variant="h1"
          fontSize={{
            xs:22,
            sm:30
          }}
          fontWeight={'700'}
          sx={{ color: 'text.title', textAlign: 'center' }}
        >
          فرم درخواست همکاری با دارینه
        </Typography>
      </Grid>
      <Grid size={12}>
        <Container
          style={{
            background: isDarkMode ? 'rgb(28, 28, 27)' : '#FFFFFF',
            border: 1,
            borderColor: 'background.border',
            p: 4.5,
          }}
        >
          <Typography variant="h6" fontSize={{
            xs:16,
            sm:18,
            md:22
          }}
          textAlign={{
            xs:'center',
            md:'left'
          }}
          >
            با استفاده از فرم زیر درخواست خود را برای ما ارسال کنید. در کمترین زمان شما را راهنمایی
            خواهیم کرد!
          </Typography>

          <Grid size={12} container spacing={3} mt={5}>
            {inputList.map((item) => (
              <Grid size={item.placeholder === 'توضیحات کامل همکاری' ? 12 : {
                xs:12,sm:6
              }} key={item.placeholder}>
                <InputField
                type='text'
                  placeholder={item.placeholder}
                  value={item.value}
                  setValue={item.setValue}
                  
                  multiline={item.placeholder === 'توضیحات کامل همکاری' ? true : false}
                  
                  style={{
                    backgroundColor:'red',
                    width: '100%',
                    borderRadius: 2,
                    bgcolor: 'background.default',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    },
                  '& .MuiInputBase-input': {
                  direction: 'ltr',
                      },
                    
                    
                  }}
                />
              </Grid>
            ))}
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: 18,
                borderRadius: 2,
                py: 1.5,
                width: {
                  xs:'100%',
                  md:'25%'
                },
                mt: 2,
              }}
              onClick={handleSubmit}
            >
              ثبت درخواست
            </Button>
            <Typography variant="body1" fontSize={{xs:16,
              sm:20
            }} sx={{ mt: 3 }}>
              جهت کسب اطلاعات بیشتر لطفا با شماره تلفن{' '}
              <Box component={'span'} color={'#007AFF'} sx={{ textDecoration: 'underline' }}>
                ۰۹۱۹۱۶۰۸۷۷۱
              </Box>{' '}
              تماس حاصل فرمایید. کارشناسان مجموعه دارینه در ۲۴ ساعت شبانه‌روز و ۷ روز هفته آماده
              پاسخ‌گویی به سوالات شما هستند.
            </Typography>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
