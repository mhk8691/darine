'use client';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { ToggleItemsType, TradeTableDataType } from '@/app/core/Types';
import { getReports } from '@/lib/getReports/getReports';
import React, { useEffect, useState } from 'react';
import TradesTable from '../reports/TradesTable';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
const items: ToggleItemsType[] = [
  {
    title: 'خرید',
    value: 'buy',
    id: 1,
    emptyMessage: 'معامله ای برای شما به ثبت نرسیده است',
  },
  {
    title: 'فروش',
    value: 'sell',
    id: 2,
    emptyMessage: 'معامله ای برای شما به ثبت نرسیده است',
  },
];
export default function DetailTable() {
  const [data,setData] = useState<TradeTableDataType[]>([] as TradeTableDataType[])
    useEffect(() => {
    const getData = async () => {
      try{
  const response = await getReports('gold');
      setData(response || []);
      }
    
      catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
    };
      getData();
    }, []);
  return (
   <TradesTable data={data} type='chip' noCard={false} />
  );
}
