import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import Products from './Products';
import { Grid } from '@mui/material';



export default function page() {

  return (
    <Grid
      container
      spacing={{
        xs: 1,
        sm: 3,
      }}
    >

    <Products/>
      
    </Grid>
  );
}
