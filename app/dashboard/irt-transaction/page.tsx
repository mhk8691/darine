import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import { ToggleItemsType } from '@/app/core/Types';
import { Grid } from '@mui/material';
import { Metadata } from 'next';
import TransactionContainer from './TransactionContainer';
import BackLink from '../BackLink';
export const metadata: Metadata = {
  title: 'تراکنش های تومان | دارینه',
  description: '',
};
const items: ToggleItemsType[] = [
  {
    title: 'واریز',
    value: 'deposit',
    id: 1,
    emptyMessage: 'واریزی برای شما به ثبت نرسیده است',
  },
  {
    title: 'واریز مستقیم',
    value: 'directDeposit',
    id: 2,
    emptyMessage: 'واریز باشناسه ای برای شما به ثبت نرسیده است',
  },
  {
    title: 'واریز ارزی',
    value: 'currencyDeposit',
    id: 3,
    emptyMessage: 'واریزی برای شما به ثبت نرسیده است',
  },
  {
    title: 'برداشت',
    value: 'withdraw',
    id: 4,
    emptyMessage: 'برداشتی برای شما به ثبت نرسیده است',
  },
  {
    title: 'برداشت به نقره سی',
    value: 'silverWithdraw',
    id: 5,
    emptyMessage: 'برداشتی برای شما به ثبت نرسیده است',
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
      <BackLink title="واریز و برداشت" />

      <Grid size={12}>
        <WalletHeader />
      </Grid>
      <TransactionContainer />
      <Grid size={12} order={3}>
        <OrderDetail title="لیست تراکنش های اخیر" toggleItems={items} type="chip" />
      </Grid>
    </Grid>
  );
}
