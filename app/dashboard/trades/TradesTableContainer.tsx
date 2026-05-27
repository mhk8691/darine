'use client';
import {  TradeTableDataType } from '@/app/core/Types';
import { getReports } from '@/lib/getReports/getReports';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import TradesTable from '../reports/TradesTable';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

interface Props{
  setData:Dispatch<SetStateAction<TradeTableDataType[]>>
  data:TradeTableDataType[]
    setReportsParams:Dispatch<SetStateAction<string>>
  reportsParams:string
}
export default function TradesTableContainer({data,setData,setReportsParams,reportsParams}:Props) {
  
    useEffect(() => {
    const getData = async () => {
      try{
  const response = await getReports('gold',reportsParams);
      setData(response || []);
      }
    
      catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
    };
      getData();
    }, [reportsParams,setData]);
  return (
   <TradesTable data={data} type='chip' noCard={false} setTradeParams={setReportsParams} />
  );
}
