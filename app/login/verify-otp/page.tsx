import { Stack, Typography } from '@mui/material';
import BackLink from '@/app/dashboard/BackLink';
import VerifyLoginOtpForm from './VerifyLoginOtpForm';

interface Props {
  searchParams: {
    phone: string;
  };
}

export default async function page({ searchParams }: Props) {
  const { phone } = await searchParams;
  return (
    <Stack>
      <Stack direction={'row'} gap={1} alignItems={'center'}>
        <BackLink fontSize="30" />
      <Typography
        variant="h6"
        fontWeight={'500'}
        fontSize={{
          xs: 16,
          md: 22,
        }}
        sx={{ color: 'text.title' }}
      >
        کد تایید
      </Typography>
      </Stack>

      <Typography
        variant="body2"
        fontSize={{
          xs: 12,
          md: 14,
          xl: 16,
        }}
        sx={{ color: 'text.secondary', mt: 3 }}
      >
        کد تایید ارسال شده به شماره موبایل {phone} را وارد کنید.
       
      </Typography>
      <VerifyLoginOtpForm phoneNumber={phone} />
    </Stack>
  );
}
