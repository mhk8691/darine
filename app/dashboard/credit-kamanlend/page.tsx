import CreditContainer from '@/app/Components/Containers/CreditContainer/CreditContainer';
import GoldenUnderline from '@/app/Components/Containers/CreditContainer/GoldenUnderline';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'خرید اعتباری با کمانلند | دارینه',
  description: '',
};
export default function page() {
  return (
    <Grid container>
      <Grid size={12}>
        <CreditContainer
          description="با استفاده از سرویس خرید اقساطی دارینه، می‌توانید بدون نیاز به پرداخت نقدی، طلا بخرید."
          title={
            <Typography
              variant="h6"
              fontSize={{
                xs: 16,
                sm: 22,
              }}
            >
              خرید اعتباری با
              <Box component={'span'} color={'#007DFA'}>
                {' '}
                کمانلند
              </Box>
            </Typography>
          }
          options={[
            'خرید آنی طلا بدون نیاز به پرداخت نقدی',
            'امکان نقدکردن طلای خریداری شده در لحظه',
            'تحویل فیزیکی به‌صورت شمش در هر زمان',
          ]}
          tooltip="توجه: خرید شما با 3.5 درصد کارمزد محاسبه می‌شود."
          icon={
            <Stack
              width={{
                xs: 30,
                sm: 40,
              }}
              height={{
                xs: 30,
                sm: 40,
              }}
            >
              <Image
                src={'/images/simple/kaman.webp'}
                alt=""
                width={40}
                height={40}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </Stack>
          }
          banner={
            <Typography
              variant="h6"
              sx={{
                wordSpacing: 7,
                flexDirection: 'row',
                alignItems: 'center',
                mt: 3,
              }}
              fontSize={{
                xs: 14,
                sm: 22,
              }}
            >
              خرید <GoldenUnderline>اقساطـــی</GoldenUnderline> طلا،{'  '}
              <GoldenUnderline> ساده‌تر </GoldenUnderline>
              {'  '} از <GoldenUnderline> همیشه </GoldenUnderline>
            </Typography>
          }
        />
      </Grid>
    </Grid>
  );
}
