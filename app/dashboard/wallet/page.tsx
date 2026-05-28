'use client'
import {
  default as Card,
} from '@/app/Components/Containers/Container/Container';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import Wallet from '@/app/Components/Wallet/Wallet';
import { RecentTransactionDataType } from '@/app/core/Types';
import { Grid, Stack, Typography } from '@mui/material';
import BackLink from '../BackLink';
import AllAssets from './AllAssets';
import { useEffect, useState } from 'react';
import { getRecentTransaction } from '@/lib/transactions/recent-transactions/recentTransactions';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import TransactionTable from '../irt-transaction/TransactionTable';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { TransactionItems } from '../irt-transaction/TransactionContainer';
// export const metadata: Metadata = {
//   title: 'کیف پول | دارینه',
//   description: '',
// };

export default async function page() {
  const [transactionData,setTransactionData] = useState<RecentTransactionDataType[]>([])
  const [transactionParams,setTransactionParams] = useState('deposit')
    const [filter,setFilter] = useState('')
    const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
  useEffect(()=>{
     const getData = async ()=>{
        try{
          const response = await getRecentTransaction(transactionParams,filter,dateRange)
          setTransactionData(response)
        }catch(error:unknown){
          if (isAxiosError(error)){
            showSnackbar(error.response?.data.message)
          }
        }
      }
      getData()
  },[transactionParams,filter,dateRange])
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
        <Grid
          size={12}
          display={{
            xs: 'none',
            sm: 'block',
          }}
        >
          {/* <AllAssets
            style={{
              mt: 3,
              minHeight: {
                xs: '200px',
                sm: '60px',
              },
            }}
          /> */}
        </Grid>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
       
        <Card
          style={{
            mb: {
              xs: 4,
              sm: 3,
            },
            px: {
              xs: 2,
              lg: 4,
            },
            py: {
              xs: 2,
              lg: 3,
            },
          }}
        >
          <Typography
            variant="h2"
            fontSize={{
              xs: 12,
              sm: 20,
              lg: 22,
            }}
            sx={{ color: 'text.primary' }}
            fontWeight={'900'}
          >
            خلاصه فعالیت‌های شما
          </Typography>
          <Stack
            mt={{
              xs: 3,
              lg: 4.5,
            }}
            direction={'column'}
            gap={{
              xs: 2,
              sm: 2.5,
            }}
          >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                مجموع دارایی شما
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                *** تومان
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                سود شما
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'success.main' }}
              >
                *** تومان
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                طلا برداشت شده
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                *** گرم
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                کارت هدیه های خریداری شده
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                *** تومان
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                کارت هدیه های دریافت شده
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                *** تومان
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                تومان درانتظار پردازش
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                *** تومان
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                طلا درانتظار پردازش
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                *** گرم
              </Typography>
            </Stack>
          </Stack>
        </Card>
        <Grid
          display={{
            xs: 'block',
            sm: 'none',
          }}
          size={12}
        >
          <AllAssets
            style={{
              mt: 3,
              minHeight: {
                xs: '200px',
                sm: '60px',
              },
            }}
          />
        </Grid>
        <Stack mt={{ xs: 1, sm: 3 }}>
          <OrderDetail
            type="chip"
            title="لیست تراکنش‌‌های اخیر"
            toggleItems={TransactionItems}
            tableBody={<TransactionTable data={transactionData} />}
            listLength={transactionData.length}
            setParams={setTransactionParams}
             tableHead={[
            'مبلغ',
            'نوع تراکنش',
            'روش',
            'وضعیت',
            'کد پیگیری',
            'تاریخ',
          ]}
          setDateRange={setDateRange}
          setFilter={setFilter}
          dateRange={dateRange}
          filter={filter}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
