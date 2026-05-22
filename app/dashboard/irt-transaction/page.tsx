'use client'
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import { RecentTransactionDataType, ToggleItemsType } from '@/app/core/Types';
import { Grid } from '@mui/material';
import { Metadata } from 'next';
import TransactionContainer from './TransactionContainer';
import BackLink from '../BackLink';
import TransactionTable from './TransactionTable';
import { useEffect, useState } from 'react';
import { getRecentTransaction } from '@/lib/transactions/recent-transactions/recentTransactions';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
// export const metadata: Metadata = {
//   title: 'تراکنش های تومان | دارینه',
//   description: '',
// };
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
  const [transactionData,setTransactionData] = useState<RecentTransactionDataType[]>([])
  useEffect(()=>{
    const getData = async ()=>{
      try{
        const response = await getRecentTransaction()
        setTransactionData(response)
      }catch(error:unknown){
        if (isAxiosError(error)){
          showSnackbar(error.response?.data.message)
        }
      }
    }
    getData()
  },[])
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
        <OrderDetail
          title="لیست تراکنش های اخیر"
          toggleItems={items}
          type="chip"
          tableBody={<TransactionTable data={transactionData} />}
          tableHead={[
            'مبلغ',
            'نوع تراکنش',
            'روش',
            'وضعیت',
            'تصویر رسید',
            'شماره کارت',
            'کد پیگیری',
            'توضیحات',
            'تاریخ',
          ]}
          listLength={transactionData.length}
        />
      </Grid>
    </Grid>
  );  
}
