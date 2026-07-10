'use client';
import Card from '@/app/Components/Containers/Container/Container';
import CustomTabs from '@/app/Components/Tabs/CustomTabs';
import { Divider, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ReactNode, useEffect, useState } from 'react';
import Trading from './Trading';
import Link from 'next/link';
import BackLink from '../BackLink';
import ChartGold from '@/app/Components/Chart/ChartGold';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { statuses } from '../reports/DepositTable';
import { MarginOrderDataType } from '@/app/core/Types';
import { getMarginOrder } from '@/lib/margin-order/marginOrder';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import MarginOrderTable from './MarginOrderTable';

const tabs = [{ title: 'فروش ' }];
const children: ReactNode[] = [<Trading key={1} />];

export default function MarginTrade() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [visible, setVisible] = useState(false);
  const [data,setData] = useState<MarginOrderDataType[]>([])
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState<DatePickerValue | null>(null);
  useEffect(() => {
    const stored = localStorage.getItem('eyeState');
    if (stored !== null) {
      setVisible(stored === 'true');
    }
  }, []);

    const getData = async () => {
      try {
        const response = await getMarginOrder(status, dateRange);
        setData(response || []);
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          showSnackbar(error.response?.data.message);
        }
      }
    };
      useEffect(() => {
        getData();
      }, [dateRange, status]);

  return (
    <>
 {!isDesktop &&   <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} mb={2}>
                <BackLink title="سفارش با قیمت" />
               <Typography component={Link} href={'/'}  variant="h2" fontSize={18} sx={{cursor:'pointer',textDecoration:'underline',color:'#0091F8'}}>
               راهنما
              </Typography>
             </Stack>}
    
      <Grid
            size={{
              xs: 12,
              md: 4.8,
            }}
          >
            <Card style={{ px: 0 }}>
      <Stack px={4}>
        {isDesktop && (
         
               <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}  mb={2}>
           <Typography variant="h2" fontSize={22}>
             سفارش تعهدی
          </Typography>
           <Typography component={Link} href={'/'}  variant="h2" fontSize={22} sx={{textDecoration:'underline',color:'#0091F8',cursor:'pointer'}}>
           راهنما
          </Typography>
         </Stack>
        )}
      </Stack>

      {isDesktop ? <CustomTabs tabList={tabs}>{children}</CustomTabs> : <>{children}</>}
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
            mt: 1,
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
                tableBody={<MarginOrderTable data={data} getData={getData} />}
                tableHead={[
  'نوع معامله',
  'وضعیت',
  'سود / زیان',
  'ضریب',
  'وزن',
  'قیمت ورود',
  'قیمت هدف',
  'حد سود',
  'حد ضرر',
  'قیمت بسته شدن',
  'تاریخ ثبت',
  'حذف',
]}
                listLength={data.length}
              />
            </Grid>
    </>
  );
}
