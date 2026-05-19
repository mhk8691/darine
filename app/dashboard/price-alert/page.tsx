import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import { Metadata } from 'next';
import BackLink from '../BackLink';
import PriceAlertContainer from './PriceAlertContainer';
import { Grid } from '@mui/material';
export const metadata: Metadata = {
  title: 'آلارم قیمت | دارینه',
  description: '',
};
export default function page() {

  return (
    <>
      <Grid
        container
        spacing={{
          xs: 0,
          sm: 1,
          lg: 3,
        }}
        display={'flex'}
      >
        <BackLink title="آلارم قیمت" />

        <Grid
          size={12}
          display={{
            xs: 'none',
            sm: 'block',
          }}
        >
          <WalletHeader />
        </Grid>
          <PriceAlertContainer/>
      </Grid>
   
    </>
  );
}
