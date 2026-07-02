'use client'
import { Box, Grid, useMediaQuery, useTheme} from '@mui/material';
import React, { useEffect, useState } from 'react'
import PriceAlert from './PriceAlert';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import RemovePriceAlertModal from './RemovePriceAlert';
import PriceAlertsTable from './PriceAlertsTable';
import { getPriceAlerts } from '@/lib/priceAlert/priceAlert';
import { PriceAlertsDataType } from '@/app/core/Types';
import ChartGold from '@/app/Components/Chart/ChartGold';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';




export default function PriceAlertContainer() {
  const [priceAlertsData, setPriceAlerts] = useState<PriceAlertsDataType[]>([]);
    const [status,setStatus] = useState('')
    const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
  const [open, setOpen] = useState(false);
  const [priceAlertId, setPriceAlertId] = useState(0);
    const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  useEffect(() => {
    const getData = async () => {
      const response = await getPriceAlerts(status,dateRange);
      setPriceAlerts(response || []);
    };
    getData();
  }, [setPriceAlerts,dateRange,status]);
  return (
    <>
     <Grid
          size={{
            xs: 12,
            md: 4.9,
          }}
          height={'100%'}
        >
          <Box sx={{ height: '100%' }}>
            <PriceAlert setPriceAlert={setPriceAlerts} date={dateRange}
            filter={status} />
          </Box>
        </Grid>
          {isDesktop && (
        <Grid
          size={{
            xs: 12,
            md: 7.1,
          }}
        >
          <ChartGold
            positionPrice="both"
            priceStyle={{
              mt: {
                xs: 2,
                md: 6,
                lg: 3.5,
              },
              mb: {
                xs: 0,
                lg: 1,
              },
            }}
            cardStyle={{
              pt: {
                xs: 2,
                md: 6,
                lg: 4.5,
              },
              height: '100%',
            }}
            dividerStyle={{
              mt: {
                xs: 0,
                md: 4,
              },
            }}
          />
        </Grid>
      )}
        <Grid size={12}>
          <OrderDetail
          statuses={[
            {label:'فعال',value:'ACTIVE'},
            {label:'غیرفعال',value:'INACTIVE'}
          ]}
          toggleItems={[]}
            type="chip"
            emptyMessage="آلارمی برای شما به ثبت نرسیده است"
            title="لیست آلارم‌های اخیر"
            tableHead={['قیمت هدف', 'نوع آلارم', 'وضعیت','تعداد آلارم', 'تاریخ', 'حذف']}
            listLength={priceAlertsData.length}
            setDateRange={setDateRange}
            setStatus={setStatus}
            dateRange={dateRange}
            status={status}
            tableBody={<PriceAlertsTable priceAlertsData={priceAlertsData} setOpen={setOpen} setPriceAlertId={setPriceAlertId} />}
          />
        </Grid>
      <RemovePriceAlertModal
        priceAlertId={priceAlertId}
        open={open}
        setOpen={setOpen}
        setPriceAlertId={setPriceAlertId}
        setPriceAlert={setPriceAlerts}
        date={dateRange}
            filter={status}
      />
    </>
  )
}
