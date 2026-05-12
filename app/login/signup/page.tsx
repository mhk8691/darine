import { Box, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import SignupOtpForm from './SignupOtpForm';

export default function page() {
  return (
    <Stack>
      <Typography
        variant="h6"
        fontWeight={'700'}
        fontSize={{
          xs: 16,
          md: 22,
        }}
        sx={{ color: 'text.title' }}
      >
        ثبت نام
      </Typography>
      <Typography
        variant="body2"
        fontSize={{
          xs: 12,
          md: 16,
        }}
        sx={{ color: 'text.secondary', mt: 3 }}
      >
        شماره موبایلی که به نام خودتان است را وارد کنید
      </Typography>

      <SignupOtpForm>
        <Typography
          variant="body2"
          sx={{
            mt: {
              xs: 4.5,
              md: 9,
            },
            color: 'text.muted',
          }}
          fontSize={{
            xs: 10,
            md: 12,
          }}
          fontWeight={500}
        >
          ورود شما به منزله قبول‌{' '}
          <Link
            href={'/roules'}
            style={{
              color: '#0091F8',
            }}
          >
            قوانین و مقررات‌
          </Link>{' '}
          طلاسی می‌باشد.
        </Typography>
      </SignupOtpForm>
      <Stack direction={'row'} gap={2} alignItems={'center'} sx={{ width: '100%' }} mt={3}>
        <Divider sx={{ flexGrow: 1 }} />
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            md: 12,
          }}
          sx={{ whiteSpace: 'nowrap', direction: 'row' }}
        >
          حساب کاربری دارید؟
          <Box
            component={'span'}
            sx={{
              color: '#0091F8',
              fontSize: {
                xs: 12,
                md: 14,
              },
              ml: 1,
            }}
          >
            <Link href={'/login/login-password'}>ورود</Link>
          </Box>
        </Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Stack>
    </Stack>
  );
}
