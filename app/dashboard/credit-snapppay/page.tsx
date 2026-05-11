import CreditContainer from '@/app/Components/Containers/CreditContainer/CreditContainer';
import GoldenUnderline from '@/app/Components/Containers/CreditContainer/GoldenUnderline';
import { SnappayIcon } from '@/app/Components/CustomIcons/CustomIcons';
import { Box, Grid, SvgIcon, Typography } from '@mui/material';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'خرید اعتباری با اسنپ پی | دارینه',
  description: '',
};
export default function page() {
  return (
    <Grid container>
      <Grid size={12}>
        <CreditContainer
          description="با استفاده از سرویس خرید اقساطی طلاسی، می‌توانید بدون نیاز به پرداخت نقدی، طلا بخرید."
          title={
            <Typography variant="h6" fontSize={{ xs: 16, sm: 22 }}>
              خرید با اعتبار بانکی
              <Box component={'span'} color={'#007DFA'}>
                {' '}
                اسنپ پی
              </Box>
            </Typography>
          }
          options={[
            'خرید آنی طلا بدون نیاز به پرداخت نقدی',
            'امکان نقدکردن طلای خریداری شده در لحظه',
            'تحویل فیزیکی به‌صورت شمش در هر زمان',
          ]}
          tooltip="توجه: خرید شما با ۱ درصد کارمزد محاسبه می‌شود."
          icon={
            <SvgIcon
              sx={{
                fontSize: {
                  xs: '70px',
                  sm: '85px',
                },
              }}
            >
              <SnappayIcon />
            </SvgIcon>
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
              <GoldenUnderline> ساده‌ </GoldenUnderline>
              {'  '} و <GoldenUnderline> بی دغدغه </GoldenUnderline>
            </Typography>
          }
        />
      </Grid>
    </Grid>
  );
}
