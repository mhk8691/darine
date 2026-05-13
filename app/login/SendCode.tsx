import { Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { EditIcon } from '../Components/CustomIcons/CustomIcons';
import { signupOtp } from '@/lib/auth';

export default function SendCode({ phoneNumber }: { phoneNumber: string }) {
  const [time, setTime] = useState<number>(120);

  useEffect(() => {
    if (time <= 0) return;

    const interval: NodeJS.Timeout = setInterval(() => {
      setTime((prev: number) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      mt={{
        xs: 3,
        md: 6,
      }}
      mb={{
        xs: 0,
        md: 4,
      }}
    >
      {time != 0 ? (
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 16,
          }}
          sx={{ color: 'text.subtitle' }}
        >
          {formatTime(time)}
        </Typography>
      ) : (
        <Button
          variant="text"
          color="success"
          disableRipple
          onClick={() => {
            signupOtp(phoneNumber);
            setTime(120);
          }}
          sx={{
            '&:hover': {
              bgcolor: 'background.default',
            },
            fontSize: {
              xs: 12,
              md: 16,
            },
          }}
        >
          ارسال مجدد کد
        </Button>
      )}

      <Link href={'/login/forget'}>
        <Stack direction={'row'} gap={1} alignItems={'center'}>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              sm: 14,
            }}
          >
            اصلاح شماره موبایل
          </Typography>
          <EditIcon />
        </Stack>
      </Link>
    </Stack>
  );
}
