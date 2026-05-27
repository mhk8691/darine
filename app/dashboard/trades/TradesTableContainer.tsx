'use client';
import {  TradeTableDataType } from '@/app/core/Types';
import { getReports } from '@/lib/getReports/getReports';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import TradesTable from '../reports/TradesTable';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';

interface Props{
  setData:Dispatch<SetStateAction<TradeTableDataType[]>>
  data:TradeTableDataType[]
    setReportsParams:Dispatch<SetStateAction<string>>
  reportsParams:string
     setFilter: Dispatch<SetStateAction<string>>
      setDateRange:Dispatch<SetStateAction<DatePickerValue|null>>
      filter:string
      dateRange:DatePickerValue|null
}
export default function TradesTableContainer({data,setData,setReportsParams,reportsParams,filter,setDateRange,setFilter,dateRange}:Props) {
  
    useEffect(() => {
    const getData = async () => {
      try{
  const response = await getReports('gold',reportsParams,dateRange,filter);
      setData(response || []);
      }
    
      catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
    };
      getData();
    }, [reportsParams,setData,dateRange,filter]);
  return (
   <TradesTable data={data} type='chip' noCard={false} setTradeParams={setReportsParams} dateRange={dateRange} filter={filter} setDateRange={setDateRange} setFilter={setFilter} />
  );
}
