import CreditContainer from '@/app/Components/Containers/CreditContainer/CreditContainer';
import GoldenUnderline from '@/app/Components/Containers/CreditContainer/GoldenUnderline';
import { FirouzehIcon } from '@/app/Components/CustomIcons/CustomIcons';
import { Grid, Typography } from '@mui/material';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'خرید اعتباری با فیروزه | دارینه',
  description: '',
};
export default function page() {
  return (
    <Grid container>
      <Grid size={12}>
        <CreditContainer
          description="با استفاده از سرویس خرید اقساطی طلاسی، می‌توانید بدون نیاز به پرداخت نقدی، طلا بخرید."
          title={
            <Typography
              variant="h6"
              fontSize={{
                xs: 16,
                sm: 22,
              }}
            >
              خرید اعتباری با
            </Typography>
          }
          options={[
            'خرید آنی طلا بدون نیاز به پرداخت نقدی',
            'امکان نقدکردن طلای خریداری شده در لحظه',
            'تحویل فیزیکی به‌صورت شمش در هر زمان',
          ]}
          tooltip="توجه: خرید شما با 3.5 درصد کارمزد محاسبه می‌شود."
          icon={<FirouzehIcon />}
          banner={
            <Typography
              variant="h6"
              fontSize={{
                xs: 14,
                sm: 22,
              }}
              sx={{
                wordSpacing: 7,
                flexDirection: 'row',
                alignItems: 'center',
                mt: 3,
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
