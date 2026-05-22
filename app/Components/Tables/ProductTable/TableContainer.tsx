'use client';
import React from 'react';
import { TableGoldDataType } from '@/app/core/Types';
import {
  Button,
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import LaptopTable from './LaptopTable';
import CustomTable from '../CustomTable';
import LineChart from '../../LineChart/LineChart';
import Link from 'next/link';

interface Props {
  data: TableGoldDataType[];
}
export default function TableContainer({ data }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {!isDesktop ? (
        <CustomTable
          heads={[
            'نوع طلا',
            'نرخ فعلی',
            'پایین‌ترین قیمت روز',
            'بالاترین قیمت روز',
            'تغییر ۱ روزه',
            'تغییر ۱ ماهه',
            'نمودار هفتگی',
            'عملیات',
          ]}
        >
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row?.currentRate}
                sx={{
                  '&:last-child td': {
                    border: 0,
                  },
                  '&:last-child th': { border: 0 },
                }}
              >
                {row?.typeGold && (
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ fontSize: '16px', py: 0.9, px: 2.5 }}
                  >
                    {row?.typeGold}
                  </TableCell>
                )}
                <TableCell
                  align="center"
                  sx={{
                    py: 0.9,
                    px: 2.5,
                  }}
                >
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1">{row?.currentRate.toLocaleString()}</Typography>
                    <Typography variant="body2" fontSize={12}>
                      تومان
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
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1">{row?.minPriceDay.toLocaleString()}</Typography>
                    <Typography variant="body2" fontSize={12}>
                      تومان
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
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    gap={0.5}
                    justifyContent={'center'}
                  >
                    <Typography variant="body1">{row?.maxPriceDay.toLocaleString()}</Typography>
                    <Typography variant="body2" fontSize={12}>
                      تومان
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: '16px',
                    py: 0.9,
                    px: 2.5,
                    color: row?.dayChange >= 0 ? 'success.main' : 'error.main',
                  }}
                >
                  {row?.dayChange}%
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: '16px',
                    py: 0.9,
                    px: 2.5,
                    color: row?.monthChange >= 0 ? 'success.main' : 'error.main',
                  }}
                >
                  {row?.monthChange}%
                </TableCell>
                <TableCell align="center" sx={{ fontSize: '16px', py: 0.9, px: 2.5 }}>
                  <Stack direction={'row'} justifyContent={'center'}>
                    {/* <LineChart
                      color="#D12F2F"
                      width={row?.typeGold ? '90%' : '70%'}
                      height="40px"
                      noGradiant
                      data={[1, 2, 3]}
                      label={['فروردین', 'اردیبهشت', 'خرداد']}
                      noLabel={true}
                    /> */}
                  </Stack>
                </TableCell>
                {row?.typeGold && (
                  <TableCell align="center" sx={{ fontSize: '16px', py: 0.9, px: 2.5 }}>
                    <Link href={'/test/'}>
                      <Button variant="outlined" color="inherit" sx={{ borderRadius: 2, p: 0.8 }}>
                        مشاهده جزئیات
                      </Button>
                    </Link>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </CustomTable>
      ) : (
        <LaptopTable items={data} />
      )}
    </>
  );
}
