'use client';
import React from 'react';
import {
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import LaptopTable from '../Components/Tables/ProductTable/LaptopTable';
import CustomTable from '../Components/Tables/CustomTable';
import LineChart from '../Components/LineChart/LineChart';

export default function ProductTableContainer() {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const data = [
    {
      currentRate: 17596000,
      minPriceDay: 17580000,
      maxPriceDay: 17831000,
      dayChange: -0.694,
      monthChange: 4.246,
      weeklyChart: 1,
    },
  ];
  return (
    <>
      {isUpMd ? (
        <CustomTable
          heads={[
            'نرخ فعلی',
            'پایین‌ترین قیمت روز',
            'بالاترین قیمت روز',
            'تغییر ۱ روزه',
            'تغییر ۱ ماهه',
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
      
              </TableRow>
            ))}
          </TableBody>
        </CustomTable>
      ) : (
        <LaptopTable
          isDetail={false}
          items={[
            {
              type: 'طلای 18 عیار(گرم)',
              currentRate: 17596000,
              minPriceDay: 17580000,
              maxPriceDay: 17831000,
              dayChange: -0.694,
              percentChange: 4.246,
            },
          ]}
        />
      )}
    </>
  );
}
