'use client'
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import WalletHeader from '@/app/Components/Wallet/WalletHeader';
import { Box, Grid, Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Metadata } from 'next';
import ChartContainer from './ChartContainer';
import PriceAlert from './PriceAlert';
import BackLink from '../BackLink';
import { useEffect, useState } from 'react';
import { PriceAlertsDataType } from '@/app/core/Types';
import { getPriceAlerts } from '@/lib/priceAlert/priceAlert';
import { formatDate } from '@/app/core/FormatDate';
import priceFormater from '@/app/core/PriceFormater';
// export const metadata: Metadata = {
//   title: 'آلارم قیمت | دارینه',
//   description: '',
// };
export default function page() {
  const [priceAlerts,setPriceAlerts]= useState<PriceAlertsDataType[]>([])
  useEffect(()=>{
    const getData = async ()=>{
      const response = await getPriceAlerts()
      setPriceAlerts(response || [])
    }
    getData()
  },[setPriceAlerts,priceAlerts])
  return (
    <Grid
      container
      spacing={{
        xs: 0,
        sm: 1,
        lg: 3,
      }}
      display={'flex'}
    >
      <BackLink title="آلارم قیمت" />

      <Grid
        size={12}
        display={{
          xs: 'none',
          sm: 'block',
        }}
      >
        <WalletHeader />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 4.9,
        }}
        height={'100%'}
      >
        <Box sx={{ height: '100%' }}>
          <PriceAlert />
        </Box>
      </Grid>
      <ChartContainer />
      <Grid size={12}>
        <OrderDetail
          type="chip"
          emptyMessage="آلارمی برای شما به ثبت نرسیده است"
          title="لیست آلارم‌های اخیر"
          toggleItems={[]}
          tableHead={[
            'قیمت هدف',
            'نوع آلارم',
            'وضعیت',
            'تاریخ',
          ]}
          tableBody={(<TableBody>
          {priceAlerts?.map((row) => (
            <TableRow
              key={row?.target_price}
              sx={{
                '&:last-child td': {
                  border: 0,
                },
                '&:last-child th': { border: 0 },
              }}
            >
            
              <TableCell
                align="center"
                sx={{
                  py: 2.5,
                  px: 2.5,
                }}
              >
                <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'center'}>
                  <Typography variant="body1">{priceFormater(row.target_price)}</Typography>
                      <Typography variant="body2" fontSize={12}>
                                      تومان
                                    </Typography>
                </Stack>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  py: 2.5,
                  px: 2.5,
                }}
              >
                <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'center'}>
                  <Typography variant="body1">{row.alert_type_display}</Typography>
                
                </Stack>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  py: 2.5,
                  px: 2.5,
                }}
              >
                <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'center'}>
                  <Typography variant="body1" sx={{
                    color:row.is_active ? 'success.main':'error.main'
                  }}>{row.is_active ? 'استفاده شده' :'استفاده نشده'}</Typography>
            
                </Stack>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: '16px',
                  py: 2.5,
                  px: 2.5,
                }}
              >
                {formatDate(row.created_at)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>)}
        />
      </Grid>
    </Grid>
  );
}
