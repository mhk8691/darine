'use client';
import Card from '@/app/Components/Containers/Container/Container';
import CustomTabs from '@/app/Components/Tabs/CustomTabs';
import Typography from '@mui/material/Typography';
import { ReactNode, useEffect, useState } from 'react';

import Trade from './Trade';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import ChartGold from '@/app/Components/Chart/ChartGold';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import LimitOrderTable from './LimitOrderTable';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { getLimitOrder } from '@/lib/limit-order/limitOrder';
import { LimitOrderDataType } from '@/app/core/Types';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { statuses } from '../reports/DepositTable';
const tabs = [{ title: 'خرید ' }, { title: 'فروش' }];

export default function LimitOrder() {
   const [status,setStatus] = useState('')
      const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
      const[data,setData] = useState<LimitOrderDataType[]>([])
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const getData = async ()=>{
    try{
      const response = await getLimitOrder(status,dateRange)
      setData(response || [])
    }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)
      }
    }
  }
  const children: ReactNode[] = [<Trade key={1} type="BUY" getData={getData}  />, <Trade key={2} type="SELL"  getData={getData} />];

  useEffect(()=>{
    getData()
  },[dateRange,status])
  return (

    <>
    <Grid
        size={{
          xs: 12,
          md: 4.8,
        }}
      >
            <Card
      style={{
        px: 0,
        py: {
          xs: 1.5,
          sm: 3,
        },
      }}
    >
      {isDesktop && (
        <Typography variant="h6" fontSize={22} mb={1} px={4}>
          خرید و فروش طلا
        </Typography>
      )}
      <CustomTabs
        tabList={tabs}
        style={{
          fontSize: {
            xs: 12,
            sm: 22,
          },
        }}
      >
        {children}
      </CustomTabs>
    </Card>
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 7.2,
        }}
      >
        <ChartGold
          positionPrice="bottom"
          priceStyle={{
            mt: {
              xs: 2,
              md: 5,
            },
            mb: {
              xs: 0,
              md: 2.5,
            },
          }}
          cardStyle={{
            pt: {
              xs: 2,
              md: 5.5,
            },
          }}
          dividerStyle={{
            mt: {
              xs: 0,
              md: 1,
            },
          }}
        />
      </Grid>
      <Grid size={12}>
        <OrderDetail
        statuses={statuses}
dateRange={dateRange}
setDateRange={setDateRange}
setStatus={setStatus}
status={status}
          title="لیست معاملات اخیر"
          toggleItems={[]}
          type="chip"
          emptyMessage="سفارشی برای شما به ثبت نرسیده است"
          tableBody={<LimitOrderTable data={data} />}
          tableHead={[
            'نوع',
            'قیمت هدف',
            'مقدار',
            'وضعیت',
            'تاریخ',
          ]}
          listLength={data.length}
        />
      </Grid>
    </>
  );
}
