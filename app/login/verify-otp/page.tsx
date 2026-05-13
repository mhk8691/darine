import { Box, Stack, Typography } from '@mui/material';
import BackLink from '@/app/dashboard/BackLink';
import VerifyLoginOtpForm from './VerifyLoginOtpForm';
import VerifySignupOtpForm from './VerifySignupOtpForm';

interface Props {
  searchParams: {
    phone: string;
    type: string;
  };
}

export default async function page({ searchParams }: Props) {
  const { phone, type } = await searchParams;
  return (
    <Stack>
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
        <Box component={'span'} display={'block'} mt={1}>
          کد تایید علاوه بر پیامک در پیامرسان بله نیز ارسال میشود.
        </Box>
      </Typography>
      {type === 'login' ? (
        <VerifyLoginOtpForm phoneNumber={phone} />
      ) : (
        <VerifySignupOtpForm phoneNumber={phone} />
      )}
    </Stack>
  );
}
