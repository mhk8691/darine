import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { ArrowLeftIcon } from '@/app/Components/CustomIcons/CustomIcons';
import VerifyOtp from './VerifyOtp';

interface Props {
  searchParams: {
    phone: string; 
  };
}

export default async function page({searchParams}:Props) {
  const { phone } = await searchParams;
  console.log('=>>',phone)
  return (
    <Stack>
        <Link href={'/login/signup'}>
<Stack direction={'row'} alignItems={'center'} gap={1}>
  <ArrowLeftIcon/>
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
        </Link>
    
   

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
        <VerifyOtp phoneNumber={phone} />
    
    </Stack>
  );
}
