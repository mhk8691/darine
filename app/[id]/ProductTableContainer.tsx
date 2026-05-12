'use client';
import React from 'react';
import CustomTable from '../Components/Tables/ProductTable/CustomTable';
import { useMediaQuery, useTheme } from '@mui/material';
import LaptopTable from '../Components/Tables/ProductTable/LaptopTable';

export default function ProductTableContainer() {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      {isUpMd ? (
        <CustomTable
          data={[
            {
              currentRate: 17596000,
              minPriceDay: 17580000,
              maxPriceDay: 17831000,
              dayChange: -0.694,
              monthChange: 4.246,
              weeklyChart: 1,
            },
          ]}
          heads={[
            'نرخ فعلی',
            'پایین‌ترین قیمت روز',
            'بالاترین قیمت روز',
            'تغییر ۱ روزه',
            'تغییر ۱ ماهه',
            'نمودار هفتگی',
          ]}
        />
      ) : (
        <LaptopTable
          isDetail={false}
          items={[
            {
              typeGold: 'طلای 18 عیار(گرم)',
              currentRate: 17596000,
              minPriceDay: 17580000,
              maxPriceDay: 17831000,
              dayChange: -0.694,
              monthChange: 4.246,
              weeklyChart: 1,
            },
          ]}
        />
      )}
    </>
  );
}
