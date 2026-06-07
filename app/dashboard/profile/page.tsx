'use client'
import Container from '@/app/Components/Containers/Container/Container';
import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import { Grid, Typography } from '@mui/material';
import { Metadata } from 'next';
import Buttons from './Buttons';
import ChangeNumber from './ChangeNumber';
import Profile from './Profile';
import { useCallback, useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { getMe, User } from '@/lib/auth';
// export const metadata: Metadata = {
//   title: 'پروفایل | دارینه',
//   description: '',
// };
export default function page() {
  const [user, setUser] = useState<User | null>(null);
     const fetchUser = useCallback(async () => {
      try {
        const me = await getMe();
        setUser(me);
      } catch (error:unknown) {
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.message)
  
        }
        setUser(null);
      }
    }, []);
      useEffect(()=>{
        fetchUser()
      },[fetchUser])
  return (
    <Grid
      container
      spacing={{
        xs: 3,
        sm: 1,
        lg: 3,
      }}
    >
      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
      >
        <Profile user={user} />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
        order={{
          xs: 3,
          md: 2,
        }}
      >
        <Container
          style={{
            px: {
              xs: 2,
              lg: 4,
            },
            py: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          <Typography
            variant="h6"
            fontSize={{
              xs: 14,
              sm: 22,
            }}
            sx={{ color: 'text.title' }}
          >
           عضویت در خانواده دارینه
          </Typography>
          <Typography
            variant="h6"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
            mt={2.5}
          >
            شما می‌توانید در این بخش، ارسال کد ورود به پنل کاربری دارینه را در حساب تلگرام خود را
            فعال کنید، تا در مواقع اختلال در زیرساخت‌های مخابراتی، بتوانید به راحتی وارد حساب دارینه
            خود شوید.
          </Typography>
          <Buttons />
        </Container>
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
        order={{
          xs: 2,
          md: 3,
        }}
      >
        <Container
          style={{
            px: {
              xs: 0,
              sm: 2.5,
              lg: 4,
            },
            py: {
              xs: 0,
              sm: 3,
            },
            border: {
              xs: 0,
              sm: 1,
            },
            borderColor: {
              sm: 'background.paper',
            },
          }}
        >
          <Typography
            variant="h6"
            fontSize={{
              xs: 16,
              sm: 22,
            }}
            sx={{ color: 'text.title' }}
          >
            تغییر شماره تلفن
          </Typography>
          <ChangeNumber setUser={setUser} />
        </Container>
      </Grid>
    </Grid>
  );
}
