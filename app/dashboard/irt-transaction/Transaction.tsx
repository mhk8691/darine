'use client';
import Card from '@/app/Components/Containers/Container/Container';
import CustomTabs from '@/app/Components/Tabs/CustomTabs';
import Typography from '@mui/material/Typography';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import { useMediaQuery, useTheme } from '@mui/material';
import { RecentTransactionDataType } from '@/app/core/Types';
const tabs = [{ title: 'واریز' }, { title: 'برداشت' }];

export default function Transaction({ setValue,setTransactionData }: { setValue: Dispatch<SetStateAction<number>>,setTransactionData:Dispatch<SetStateAction<RecentTransactionDataType[]>> }) {
  const theme = useTheme();
const children: ReactNode[] = [<Deposit key={1} setTransactionData={setTransactionData} />, <Withdraw key={2} setTransactionData={setTransactionData} />];
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Card
      style={{
        px: 0,
        py: {
          xs: 0,
          sm: 3,
        },
      }}
    >
      {isDesktop && (
        <Typography variant="h6" fontSize={22} mb={1} px={4}>
          واریز و برداشت
        </Typography>
      )}
      <CustomTabs
        tabList={tabs}
        setCustomValue={setValue}
        tabsStyle={{ alignItems: 'center', justifyContent: 'center' }}
      >
        {children}
      </CustomTabs>
    </Card>
  );
}
