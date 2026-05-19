import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import ForgetPasswordForm from './ForgetPasswordForm';

export default function page() {
  return (
    <Stack>
      <Typography
        variant="h6"
        fontWeight={'500'}
        fontSize={{
          xs: 16,
          md: 22,
        }}
        sx={{ color: 'text.title' }}
      >
        فراموشی رمز عبور
      </Typography>
      <Typography
        variant="body2"
        fontSize={{
          xs: 12,
          sm: 16,
        }}
        sx={{ color: 'text.secondary', mt: 3 }}
      >
        شماره موبایل خود را وارد کنید
      </Typography>

      <ForgetPasswordForm>
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
      </ForgetPasswordForm>
    </Stack>
  );
}
