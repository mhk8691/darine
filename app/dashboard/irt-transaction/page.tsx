import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import { Grid } from '@mui/material';
import { Metadata } from 'next';
import TransactionContainer from './TransactionContainer';
import BackLink from '../BackLink';
export const metadata: Metadata = {
  title: 'تراکنش های تومان | دارینه',
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
      <BackLink title="واریز و برداشت" />

      <TransactionContainer />
      
    </Grid>
  );  
}
