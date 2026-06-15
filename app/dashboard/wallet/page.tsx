'use client'
import {
  default as Card,
} from '@/app/Components/Containers/Container/Container';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import Wallet from '@/app/Components/Wallet/Wallet';
import { RecentTransactionDataType } from '@/app/core/Types';
import { Grid, Stack, Typography } from '@mui/material';
import BackLink from '../BackLink';
import { useEffect, useState } from 'react';
import TransactionTable from '../irt-transaction/TransactionTable';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { TransactionItems } from '../irt-transaction/TransactionContainer';
import { statuses } from '../reports/DepositTable';
import Statistics from './Statistics';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { getRecentTransaction } from '@/lib/transactions/recent-transactions/recentTransactions';
import TransactionDetailModal from '../reports/TransactionDetailModal';
// export const metadata: Metadata = {
//   title: 'کیف پول | دارینه',
//   description: '',
// };

export default async function page() {
  const [transactionData,setTransactionData] = useState<RecentTransactionDataType[]>([])
  const [transactionParams,setTransactionParams] = useState('deposit')
    const [status,setStatus] = useState('')
    const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
       const [modalOpen, setModalOpen] = useState(false);
        const [selectedTransaction, setSelectedTransaction] =
          useState<RecentTransactionDataType | null>(null);
    
        function handleRowClick(row: RecentTransactionDataType) {
          setSelectedTransaction(row);
          setModalOpen(true);
        }
  useEffect(()=>{
     const getData = async ()=>{
        try{
          const response = await getRecentTransaction(transactionParams,status,dateRange)
          setTransactionData(response)
        }catch(error:unknown){
          if (isAxiosError(error)){
            showSnackbar(error.response?.data.message)
          }
        }
      }
      getData()
  },[transactionParams,status,dateRange])
  return (
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 1,
        lg: 3,
      }}
    >
      <BackLink title="کیف پول شما" />

      <Grid size={{ xs: 12, md: 6 }}>
        <Wallet type="wallet" />
       
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
       
     <Statistics/>
      
      </Grid>
        <Grid size={12}>
          <OrderDetail
          statuses={statuses}
            type="chip"
            title="لیست تراکنش‌‌های اخیر"
            toggleItems={TransactionItems}
            tableBody={<TransactionTable data={transactionData} onRowClick={handleRowClick} />}
            listLength={transactionData.length}
            setParams={setTransactionParams}
             tableHead={[
            'مبلغ',
            'نوع تراکنش',
            'روش',
            'وضعیت',
            'کد پیگیری',
            'تاریخ',
            ''
          ]}
          setDateRange={setDateRange}
          setStatus={setStatus}
          dateRange={dateRange}
          status={status}
          />
           <TransactionDetailModal
                    open={modalOpen}
                    setOpen={setModalOpen}
                    data={selectedTransaction}
                  />
        </Grid>
    </Grid>
  );
}
