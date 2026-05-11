import CreditContainer from '@/app/Components/Containers/CreditContainer/CreditContainer';
import GoldenUnderline from '@/app/Components/Containers/CreditContainer/GoldenUnderline';
import { AzkiIcon } from '@/app/Components/CustomIcons/CustomIcons';
import { Box, Grid, Typography } from '@mui/material';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'خرید اعتباری با ازکی وام | دارینه',
  description: '',
};
export default function page() {
  return (
    <Grid container>
      <Grid size={12}>
        <CreditContainer
          description="با سرویس جدید طلاسی می‌توانید به‌سادگی و بدون نیاز به وثیقه، به‌صورت اقساطی طلا بخرید. این سرویس با همکاری پلتفرم ازکی‌وام فراهم شده و تا سقف 100 میلیون تومان طلا در اختیار شما قرار می‌دهد."
          title={
            <Typography
              variant="h6"
              fontSize={{
                xs: 16,
                sm: 22,
              }}
            >
              خرید با اعتبار بانکی
              <Box component={'span'} color={'#007DFA'}>
                {' '}
                ازکی وام
              </Box>
            </Typography>
          }
          options={[
            'سقف وام تا 100 میلیون تومان',
            'بدون نیاز به وثیقه، چک یا ضامن',
            'بازپرداخت اقساطی ۱۲ تا ۱۸ ماهه',
            'خرید امن و مستقیم از طلاسی',
            'میزان طلای خریداری شما تا پایان بازپرداخت اقساط ، قابل برداشت نخواهد بود.',
          ]}
          icon={<AzkiIcon />}
          banner={
            <Typography
              variant="h6"
              fontSize={{
                xs: 14,
                sm: 22,
              }}
              sx={{
                wordSpacing: 4,
                flexDirection: 'row',
                alignItems: 'center',
                mt: 3,
              }}
            >
              خرید <GoldenUnderline>اقساطـــی</GoldenUnderline> طلا | بدون ضامن،
              {'  '} بدون <GoldenUnderline> چک </GoldenUnderline>
            </Typography>
          }
        />
      </Grid>
    </Grid>
  );
}
