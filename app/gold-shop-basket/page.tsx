import { Container, Divider, Stack, Typography } from '@mui/material';
import { Metadata } from 'next';
import Cart from './Cart';
export const metadata: Metadata = {
  title: 'خرید شمش طلا 18 و 24 عیار آنلاین و قیمت روز | دارینه',
  description: '',
};
export default function page() {
  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={{
          xs: 'center',
          sm: 'space-between',
        }}
        bgcolor={'#393936'}
        py={1.5}
        px={4}
        spacing={0}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={0.5}
          width={{
            xs: '100%',
            md: 'auto',
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: 'text.title' }}
            fontSize={{
              xs: 10,
              lg: 14,
              xl: 16,
            }}
          >
            قیمت لحظه ای طلا ۱۸ عیار(گرمی):
          </Typography>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              lg: 14,
              xl: 16,
            }}
          >
            17,799,000 تومان
          </Typography>
        </Stack>

        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          alignItems={'center'}
          gap={0.5}
          justifyContent={'space-between'}
          width={{
            xs: '50%',
            md: 'auto',
          }}
          display={{
            xs: 'none',
            md: 'flex',
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: 'text.title' }}
            fontSize={{
              xs: 10,
              lg: 14,
              xl: 16,
            }}
          >
            امروز:
          </Typography>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              lg: 14,
              xl: 16,
            }}
          >
            پنجشنبه ۱۰ اردیبهشت ۱۴۰۵ - ۱۹:۲۹:۳۰
          </Typography>
        </Stack>
      </Stack>
      <Container
        maxWidth={'xl'}
        sx={{
          mt: 5,
          px: {
            xs: '16px !important',
            md: '24px !important',
            lg: '40px !important',
          },
        }}
      >
        <Cart />
      </Container>
      <Divider sx={{ mt: 11.5 }} />
    </>
  );
}
