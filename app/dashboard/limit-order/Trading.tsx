'use client';
import Card from '@/app/Components/Containers/Container/Container';
import CustomTabs from '@/app/Components/Tabs/CustomTabs';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

import Trade from './Trade';
import { useMediaQuery, useTheme } from '@mui/material';
const tabs = [{ title: 'خرید ' }, { title: 'فروش' }];
const children: ReactNode[] = [<Trade key={1} type="buy" />, <Trade key={2} type="sell" />];
export default function Trading() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  return (
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
  );
}
