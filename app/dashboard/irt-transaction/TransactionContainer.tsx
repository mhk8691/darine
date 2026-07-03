'use client';
import {  Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Transaction from './Transaction';
import { useEffect, useState } from 'react';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import TransactionTable from './TransactionTable';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { RecentTransactionDataType, ToggleItemsType } from '@/app/core/Types';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { statuses } from '../reports/DepositTable';
import { getReports } from '@/lib/getReports/getReports';
import TransactionDetailModal from '../reports/TransactionDetailModal';
import BackLink from '../BackLink';
import TransactionsGuide from './TransactionsGuide';
import TransactionHint from './TransactionHint';

export const TransactionItems: ToggleItemsType[] = [
  {
    title: 'واریز',
    value: 'deposit',
    id: 1,
    emptyMessage: 'واریزی برای شما به ثبت نرسیده است',
  },
  
 
  {
    title: 'برداشت',
    value: 'withdraw',
    id: 2,
    emptyMessage: 'برداشتی برای شما به ثبت نرسیده است',
  },

];

export default function TransactionContainer() {
    const [status,setStatus] = useState('')
    const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const [openModal,setOpenModal] = useState(false)
    const [hintIndex,setHintIndex] = useState(0)
    const [transactionParams,setTransactionParams] = useState('deposit')
    const [transactionData,setTransactionData] = useState<RecentTransactionDataType[]>([])
       const [modalOpen, setModalOpen] = useState(false);
        const [selectedTransaction, setSelectedTransaction] =
          useState<RecentTransactionDataType | null>(null);
    
        function handleRowClick(row: RecentTransactionDataType) {
          setSelectedTransaction(row);
          setModalOpen(true);
        }
  useEffect(() => {
    const getData = async () => {
      try{
  const response = await getReports(transactionParams,undefined,dateRange,status);
      setTransactionData(response || []);
      }
    
      catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
    };
    getData();
  }, [transactionParams,status,dateRange]);

  return (
    <>
      {isMobile &&   <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                <BackLink title="واریز و برداشت" />
               <Typography component={'div'} onClick={()=>setOpenModal(true)} variant="h2" fontSize={18} sx={{cursor:'pointer',textDecoration:'underline',color:'#0091F8'}}>
               راهنما
              </Typography>
             </Stack>}
      <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 4.8,
        }}
        order={{
          xs: 2,
          md: 1,
        }}
      >
        <Transaction filter={status} setHintIndex={setHintIndex}
dateRange={dateRange}  setTransactionData={setTransactionData} transactionParams={transactionParams} />
      </Grid>
      <TransactionHint hintIndex={hintIndex} />
      <Grid size={12} order={3}>
        <OrderDetail
        statuses={statuses}
          title="لیست تراکنش های اخیر"
          toggleItems={TransactionItems}
          type="chip"
          tableBody={<TransactionTable data={transactionData} onRowClick={handleRowClick} />}
          tableHead={[
            'مبلغ',
            'نوع تراکنش',
            'روش',
            'وضعیت',
            'کد پیگیری',
            'تاریخ',
            ''
          ]}
          setParams={setTransactionParams}
          listLength={transactionData.length}
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
      <TransactionsGuide open={openModal} setOpen={setOpenModal}  />
    </>
  );
}
