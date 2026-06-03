'use client';
import Container from '@/app/Components/Containers/Container/Container';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Transaction from './Transaction';
import { useEffect, useState } from 'react';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import TransactionTable from './TransactionTable';
import { getRecentTransaction } from '@/lib/transactions/recent-transactions/recentTransactions';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { RecentTransactionDataType, ToggleItemsType } from '@/app/core/Types';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { statuses } from '../reports/DepositTable';
import { getReports } from '@/lib/getReports/getReports';

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
  const [value, setValue] = useState(0);
    const [transactionParams,setTransactionParams] = useState('deposit')
    const [transactionData,setTransactionData] = useState<RecentTransactionDataType[]>([])
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
        <Transaction filter={status}
dateRange={dateRange} setValue={setValue} setTransactionData={setTransactionData} transactionParams={transactionParams} />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 7.2,
        }}
        order={{
          xs: 1,
          md: 2,
        }}
      >
        <Container
          style={{
            color: '#EF8011',
            px: {
              xs: 2,
              sm: 4,
            },
            py: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          <Stack direction={'row'} alignItems={'center'} gap={1}>
            <InfoOutlinedIcon />
            <Typography
              variant="h6"
              fontSize={{
                xs: 14,
                md: 22,
              }}
            >
              توجه
            </Typography>
          </Stack>
          {value === 0 ? (
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                md: 16,
              }}
              sx={{ color: 'text.secondary', mt: '10px' }}
            >
              واریز ریالی فقط از حساب بانکی به نام خودتان امکان‌پذیر است. در غیر این صورت، مبلغ در
              حالت انتظار قرار می‌گیرد و پس از پیگیری شما، طی ۳ روز کاری به حساب شما باز می‌گردد.
            </Typography>
          ) : (
            <Box component={'ul'} px={3}>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
                برداشت ریالی فقط به کارت‌های ثبت شده امکان‌پذیر است.
              </Typography>
              <Typography
                variant="body1"
                fontSize={{
                  xs: 12,
                  md: 16,
                }}
                component={'li'}
                sx={{ color: 'text.secondary', mt: '10px' }}
              >
                کاربر گرامی به دلیل شرایط پیش آمده و محدودیت اعلامی از سمت بانک مرکزی، سامانه پایا
                به یک سیکل در روز (ساعت 15) کاهش یافته و تسویه برداشت ها ممکن است زمانبر شود .
              </Typography>
            </Box>
          )}
        </Container>
      </Grid>
      <Grid size={12} order={3}>
        <OrderDetail
        statuses={statuses}
          title="لیست تراکنش های اخیر"
          toggleItems={TransactionItems}
          type="chip"
          tableBody={<TransactionTable data={transactionData} />}
          tableHead={[
            'مبلغ',
            'نوع تراکنش',
            'روش',
            'وضعیت',
            'کد پیگیری',
            'تاریخ',
          ]}
          setParams={setTransactionParams}
          listLength={transactionData.length}
          setDateRange={setDateRange}
          setStatus={setStatus}
          dateRange={dateRange}
          status={status}
        />
      </Grid>
    </>
  );
}
