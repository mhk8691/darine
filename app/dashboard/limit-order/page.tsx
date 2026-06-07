import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import { Grid } from '@mui/material';
import { Metadata } from 'next';
import BackLink from '../BackLink';
import LimitOrder from './LimitOrder';
export const metadata: Metadata = {
  title: 'سفارش با قیمت | دارینه',
  description: '',
};
export default function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 1,
        lg: 3,
      }}
    >
      <BackLink title="سفارش با قیمت" />

      
      <LimitOrder/>
    </Grid>
  );
}
