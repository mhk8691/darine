'use client';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { formatDate } from '@/app/core/FormatDate';
import { GiftCardListType } from '@/app/core/Types';
import { getGiftCardList } from '@/lib/reports/getReports';
import { Grid, Stack, TableBody, TableCell, TableRow, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

export default function GiftCardList() {
  const [giftCards,setGiftCards] = useState<GiftCardListType[]>([] as GiftCardListType[])
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  useEffect(()=>{
    const getData = async ()=>{
      const response = await getGiftCardList()
      setGiftCards(response || [])
    }
    getData()
  },[])
  return (
    <Grid size={12}>
      <OrderDetail
        title={isDesktop ? 'لیست کارت‌های هدیه شما' : ''}
        toggleItems={[]}
        type="chip"
        emptyMessage="کارت هدیه‌ای توسط شما خریداری نشده است."
        tableHead={[
          'شماره سریال',
          'وزن',
          'وضعیت',
          'تاریخ',
        ]}
        tableBody={
          (<TableBody>
          {giftCards?.map((row) => (
            <TableRow
              key={row?.serial_number}
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
                  py: 0.9,
                  px: 2.5,
                }}
              >
                <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'center'}>
                  <Typography variant="body1">{row.serial_number}</Typography>
                </Stack>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  py: 0.9,
                  px: 2.5,
                }}
              >
                <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'center'}>
                  <Typography variant="body1">{row.weight}</Typography>
                  <Typography variant="body2" fontSize={12}>
                    گرم
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  py: 0.9,
                  px: 2.5,
                }}
              >
                <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'center'}>
                  <Typography variant="body1" sx={{
                    color:row.is_used ? 'success.main':'warning.main'
                  }}>{row.is_used ? 'استفاده شده' :'استفاده نشده'}</Typography>
            
                </Stack>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: '16px',
                  py: 0.9,
                  px: 2.5,
                }}
              >
                {formatDate(row.created_at)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>)
        }
      />
    </Grid>
  );
}
