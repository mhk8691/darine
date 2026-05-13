'use client'
import Card from '@/app/Components/Containers/Container/Container';
import CustomTabs from '@/app/Components/Tabs/CustomTabs';
import { Grid, Typography } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
import TradesTable from './TradesTable';
import { getReports } from '@/lib/getReports/getReports';
import DepositTable from './DepositTable';
import WithdrawTable from './WithdrawTable';
import GiftTable from './GiftTable';
import ReceiveTable from './ReceiveTable';

// import { Metadata } from 'next';
// export const metadata: Metadata = {
//   title: 'گزارشات | دارینه',
//   description: '',
// };

const tabUrl = [
  'trades',
  'deposits',
  'withdrawals',
  'giftcards',
  'physical_orders',
]




// const autoItems: ToggleItemsType[] = [
//   {
//     title: 'کارت',
//     value: 'card',
//     id: 1,
//     emptyMessage: 'کارتی برای شما به ثبت نرسیده است',
//   },
//   {
//     title: 'واریز',
//     value: 'deposit',
//     id: 2,
//     emptyMessage: 'واریزی برای شما به ثبت نرسیده است',
//   },
// ];

const children: ReactNode[] = [
  <TradesTable key={1} />,
  <DepositTable key={2} />,
  <WithdrawTable key={3} /> ,
  <GiftTable key={4} />,
 <ReceiveTable key={5} />
  // <OrderDetail
  //   key={6}
  //   noCard
  //   toggleItems={[]}
  //   type="toggle"
  //   emptyMessage={'سفارشی برای شما به ثبت نرسیده است'}
  // />,
  // <OrderDetail
  //   key={7}
  //   noCard
  //   toggleItems={[]}
  //   type="toggle"
  //   emptyMessage={'اعتباری برای شما به ثبت نرسیده است'}
  // />,
  // <OrderDetail key={8} noCard toggleItems={autoItems} type="toggle" />,
  ,
];
const tabs = [
  { title: 'معاملات' },
  { title: 'واریز' },
  { title: 'برداشت' },
  { title: 'کارت هدیه' },
  { title: 'تحویل فیزیکی' },
  // { title: 'سفارش با قیمت' },
  // { title: 'اعتبار خرید' },
  // { title: 'پس‌انداز خودکار' },
];
export default function page() {
  const [value,setValue] = useState(0)
  const [data,setData] = useState([])
  useEffect(()=>{
    const getData = async ()=>{
      const response = await getReports(tabUrl[value])
      setData(response)
    }
    getData()
  },[value])
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card
          style={{
            px: {
              sx: 0,
              sm: 4,
            },
            border: {
              sx: 0,
              sm: 1,
            },
            borderColor: {
              sm: 'background.paper',
            },
          }}
        >
          <Typography
            variant="h6"
            fontSize={{
              xs: 16,
              sm: 22,
            }}
          >
            گزارش ها
          </Typography>
          <CustomTabs
            tabList={tabs}
            style={{
              width: 'auto',
              fontSize: 18,
              mb: 0.5,
            }}
            lineHeight="6px"
            tabsStyle={{ px: 0, mt: 3, minWidth: 'auto' }}
            tabStyle={{ minWidth: 'auto' }}
            noPadding={true}
            setCustomValue={setValue}
          >
            {children}
          </CustomTabs>
        </Card>
      </Grid>
    </Grid>
  );
}
