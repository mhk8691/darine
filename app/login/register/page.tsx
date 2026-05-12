import { Stack, Typography } from '@mui/material';
import BackLink from '@/app/dashboard/BackLink';
import RegisterForm from './RegisterForm';

interface Props {
  searchParams: {
    phone: string; 
  };
}

export default async function page({searchParams}:Props) {
  const {phone} = await searchParams
  return (
    <Stack>
  <BackLink fontSize='30' />
  <Typography
        variant="h6"
        fontWeight={'500'}
        fontSize={{
          xs: 16,
          md: 22,
        }}
        sx={{ color: 'text.title' }}
      >
        اطلاعات کاربری
      </Typography>
     
      <Typography
        variant="body2"
        fontSize={{
          xs: 12,
          md: 16,
        }}
        sx={{ color: 'text.secondary', mt: 3 }}
      >
        اطلاعات زیر را با توجه به صاحب شماره {phone} وارد کنید
      </Typography>
        <RegisterForm phoneNumber={phone} />
   
    </Stack>
  );
}
