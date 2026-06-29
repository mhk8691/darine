import { Grid } from '@mui/material';
import { Metadata } from 'next';
import BackLink from '../BackLink';
import Trading from './Trade';
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

  
     <Trading />
   
    </Grid>
  );
}
