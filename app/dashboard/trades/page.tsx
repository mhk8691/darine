import ChartGold from '@/app/Components/Chart/ChartGold';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { ToggleItemsType } from '@/app/core/Types';
import { Grid } from '@mui/material';
import Trading from './Trading/Trading';
import { Metadata } from 'next';
import BackLink from '../BackLink';
import WalletHeader from '@/app/Components/Wallet/WalletHeader';
export const metadata: Metadata = {
  title: 'خرید و فروش طلا | دارینه',
  description: '',
};
const items: ToggleItemsType[] = [
  {
    title: 'خرید',
    value: 'buy',
    id: 1,
    emptyMessage: 'معامله ای برای شما به ثبت نرسیده است',
  },
  {
    title: 'فروش',
    value: 'sell',
    id: 2,
    emptyMessage: 'معامله ای برای شما به ثبت نرسیده است',
  },
];
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
      <Grid size={12} container direction={'row'}>
        <Grid size={{ xs: 12, md: 4.8 }}>
          <Trading />
        </Grid>
        <Grid size={{ xs: 12, md: 7.2 }} height={'100%'}>
          <ChartGold
            positionPrice="bottom"
            priceStyle={{
              mt: {
                xs: 2,
                sm: 2.5,
              },
            }}
            cardStyle={{
              py: {
                xs: 2,
                sm: 2.7,
              },
            }}
          />
        </Grid>
      </Grid>
      <Grid size={12}>
        <OrderDetail title="لیست معاملات اخیر" toggleItems={items} type="chip" />
      </Grid>
    </Grid>
  );
}
