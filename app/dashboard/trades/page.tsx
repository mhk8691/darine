import { Grid } from '@mui/material';
import { Metadata } from 'next';
import BackLink from '../BackLink';
import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import Trading from './Trading';
export const metadata: Metadata = {
  title: 'خرید و فروش طلا | دارینه',
  description: '',
};

export default function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 2,
        lg: 3,
      }}
    >
      <BackLink title="خرید و فروش" />

      <Grid size={12}>
        <WalletHeader />
      </Grid>
     <Trading />
   
    </Grid>
  );
}
