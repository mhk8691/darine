import { Grid } from '@mui/material';
import { Metadata } from 'next';
import ChartGold from '../Components/Chart/ChartGold';
import Wallet from '../Components/Wallet/Wallet';
import Dashboard from './Dashboard';
export const metadata: Metadata = {
  title: 'داشبورد | دارینه',
  description: '',
};
export default function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 4,
        sm: 1,
        lg: 3,
      }}
    >
      <Grid
        size={{
          xs: 12,
          md: 4.8,
        }}
      >
        <Wallet type="dashboard" />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 7.2,
        }}
        order={{ xs: 2, sm: 1 }}
      >
        <ChartGold
          positionPrice="both"
          chartHeight="176px"
          priceStyle={{ mt: 1.5 }}
          cardStyle={{
            pb: {
              xs: 1.5,
              md: 0.7,
            },
            pt: 2,
          }}
        />
      </Grid>
      <Grid size={12} container order={{ xs: 1, sm: 2 }}>
        <Dashboard />
      </Grid>
    </Grid>
  );
}
