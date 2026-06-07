'use client';
import Container from '@/app/Components/Containers/Container/Container';
import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import { Divider, Grid, Stack, Typography } from '@mui/material';
import ChangePassword from './ChangePassword';
import TitleProfile from './TitleProfile';
import {  User } from '@/lib/auth';
import { formatDate } from '@/app/core/FormatDate';

export default function Profile({user}:{user:User | null}) {
  
  return (
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
      <TitleProfile />

      <Stack
        direction={'row'}
        gap={2}
        alignItems={'center'}
        mt={{
          xs: 0,
          sm: 5,
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
            fill="#DDDDDB"
          ></path>
          <path
            d="M64.8021 56.5424C64.9502 57.1434 64.9549 57.7709 64.8156 58.374C64.6764 58.9771 64.3972 59.539 64.0006 60.0143C61.0678 63.5323 57.3975 66.3626 53.2496 68.3049C49.1017 70.2472 44.5776 71.254 39.9974 71.254C35.4173 71.254 30.8932 70.2472 26.7453 68.3049C22.5974 66.3626 18.9271 63.5323 15.9943 60.0143C15.5977 59.539 15.3185 58.9771 15.1792 58.374C15.04 57.7709 15.0446 57.1434 15.1927 56.5424C16.5539 51.0191 19.7189 46.1077 24.1865 42.5862C24.8529 42.0637 25.6722 41.7743 26.5189 41.7621C27.3656 41.75 28.1929 42.0159 28.874 42.519C31.8427 44.7268 35.7349 46.0643 39.9912 46.0643C44.2474 46.0643 48.1381 44.7268 51.1084 42.519C51.7895 42.0159 52.6168 41.75 53.4635 41.7621C54.3101 41.7743 55.1295 42.0637 55.7959 42.5862C60.2681 46.1058 63.4376 51.0174 64.8021 56.5424Z"
            fill="white"
          ></path>
          <path
            d="M39.9984 40.9031C47.928 40.9031 54.3562 34.4749 54.3562 26.5453C54.3562 18.6157 47.928 12.1875 39.9984 12.1875C32.0688 12.1875 25.6406 18.6157 25.6406 26.5453C25.6406 34.4749 32.0688 40.9031 39.9984 40.9031Z"
            fill="white"
          ></path>
        </svg>
        <Stack>
          <Typography
            variant="h6"
            fontSize={{
              xs: 16,
              sm: 22,
            }}
            fontWeight={600}
            sx={{ color: 'text.title' }}
          >
           {user?.full_name}
          </Typography>
          <Typography
            variant="h6"
            fontSize={{
              xs: 12,
              sm: 18,
            }}
          >
            {user?.mobile}
          </Typography>
        </Stack>
      </Stack>

      <ChangePassword />

      <Stack
        border={1}
        px={2}
        pt={'14px'}
        pb={3}
        borderColor={'background.paper'}
        borderRadius={2}
        mt={2}
      >
        <Stack py={'10px'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            variant="body1"
            sx={{ color: 'text.subtitle' }}
            fontSize={{
              xs: 10,
              sm: 14,
            }}
          >
            تاریخ تولد
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 12,
              sm: 18,
            }}
          >
            {
              user?.birth_date
            }
          </Typography>
        </Stack>
        <Divider />
        <Stack py={'10px'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            variant="body1"
            sx={{ color: 'text.subtitle' }}
            fontSize={{
              xs: 10,
              sm: 14,
            }}
          >
            کدملی
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 12,
              sm: 18,
            }}
          >
            {user?.national_code}
          </Typography>
        </Stack>
        <Divider />
        <Stack py={'10px'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            variant="body1"
            sx={{ color: 'text.subtitle' }}
            fontSize={{
              xs: 10,
              sm: 14,
            }}
          >
            درصد کارمزد خرید
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 12,
              sm: 18,
            }}
          >
            ۱
          </Typography>
        </Stack>
        <Divider />
        <Stack pt={'10px'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            variant="body1"
            sx={{ color: 'text.subtitle' }}
            fontSize={{
              xs: 10,
              sm: 14,
            }}
          >
            درصد کارمزد فروش
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 12,
              sm: 18,
            }}
          >
            ۱
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
