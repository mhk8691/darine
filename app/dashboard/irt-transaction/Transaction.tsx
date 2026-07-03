'use client';
import Card from '@/app/Components/Containers/Container/Container';
import CustomTabs from '@/app/Components/Tabs/CustomTabs';
import Typography from '@mui/material/Typography';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { RecentTransactionDataType } from '@/app/core/Types';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import TransactionsGuide from './TransactionsGuide';
const tabs = [{ title: 'واریز' }, { title: 'برداشت' }];
interface Props { 
  setTransactionData:Dispatch<SetStateAction<RecentTransactionDataType[]>> 
  transactionParams:string
  filter:string
  dateRange:DatePickerValue
  setHintIndex:Dispatch<SetStateAction<number>>
}
export default function Transaction({ setTransactionData,transactionParams,dateRange,filter,setHintIndex }:Props) {
  const theme = useTheme();
  const [openModal,setOpenModal] = useState(false)
      const [value, setValue] = useState(0);

const children: ReactNode[] = [<Deposit dateRange={dateRange} setHintIndex={setHintIndex}

filter={filter} key={1} setTransactionData={setTransactionData} transactionParams={transactionParams} />, <Withdraw dateRange={dateRange} setHintIndex={setHintIndex}
filter={filter} key={2} setTransactionData={setTransactionData} transactionParams={transactionParams} />];
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
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
         <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} px={4}> 
         <Typography variant="h6" fontSize={22}  >
          واریز و برداشت
        </Typography>
           <Typography component={'div'} onClick={()=>setOpenModal(true)} variant="h2" fontSize={22} sx={{cursor:'pointer',textDecoration:'underline',color:'#0091F8'}}>
           راهنما
          </Typography>
         </Stack>
        )}
      <CustomTabs
        tabList={tabs}
        setCustomValue={setValue}
        tabsStyle={{ alignItems: 'center', justifyContent: 'center' }}
      >
        {children}
      </CustomTabs>
    </Card>
    <TransactionsGuide open={openModal} setOpen={setOpenModal}  />
    </>
  );
}
