'use client';
import {  TradeTableDataType } from '@/app/core/Types';
import {  useState } from 'react';
import ChartGold from '@/app/Components/Chart/ChartGold';
import TradesTableContainer from './TradesTableContainer';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { Grid, Stack, Typography } from '@mui/material';
import Trading from './Trading';
import BackLink from '../BackLink';
import TradeGuide from './TradeGuide';
// import TradeGoldConfirmation from './TradeGoldConfirmation';

export default function Trade() {

   const [data,setData] = useState<TradeTableDataType[]>([] as TradeTableDataType[])
   const [reportsParams,setReportsParams] = useState('BUY')

      const [filter,setFilter] = useState('')
      const [dateRange,setDateRange] =useState<DatePickerValue| null>(null)
const [openModal,setOpenModal] =useState(false)
  return (
    <>
      
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
            <BackLink title="خرید و فروش" />
           <Typography component={'div'} onClick={()=>setOpenModal(true)} variant="h2" fontSize={18} sx={{textDecoration:'underline',color:'#0091F8'}}>
           راهنما
          </Typography>
         </Stack>
       <Grid size={12} container  spacing={{
        xs: 2,
        lg: 3,
      }} direction={'row'}>
        
         <Grid size={{ xs: 12, md: 4.8 }}>
      
     <Trading dateRange={dateRange} filter={filter} reportsParams={reportsParams} setData={setData} />
   </Grid>

   <Grid size={{ xs: 12, md: 7.2 }} height={'100%'}>
          <ChartGold
            positionPrice="bottom"
            priceStyle={{
              mt: {
                xs: 2,
                sm: 2.5,
              },
            }}
            cardStyle={{
              py: {
                xs: 2,
                sm: 2.7,
              },
            }}
          />
        </Grid>
        </Grid>
          <Grid size={12}>
        <TradesTableContainer filter={filter} setDateRange={setDateRange} dateRange={dateRange} setFilter={setFilter} data={data} reportsParams={reportsParams} setData={setData} setReportsParams={setReportsParams} />
      </Grid>
        <TradeGuide open={openModal} setOpen={setOpenModal} />
    </>
  );
}
