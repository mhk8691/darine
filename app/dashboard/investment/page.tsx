'use client';

import { Grid } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import GoldInvestmentDeposit from './GoldInvestmentDeposit';
import InvestmentTableContainer, {
  InvestmentTableItem,
} from './InvestmentTableContainer';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import api from '@/lib/api';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

export default function InvestmentPage() {
  const [data, setData] = useState<InvestmentTableItem[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [dateRange, setDateRange] = useState<DatePickerValue | null>(null);
  const [params, setParams] = useState<string>('');

  // تابع دریافت لیست سرمایه‌گذاری‌ها
  const fetchInvestmentList = useCallback(async () => {
    try {
      const response = await api.get('/gold/investment/list/', {
        params: {
          status: filter || undefined,
          ...(params ? { search: params } : {}),
          _t: Date.now(), // اضافه کردن Timestamp جهت دور زدن Cache مرورگر
        },
      });
      if (response.data?.data) {
        setData(response.data.data);
      } else if (Array.isArray(response.data)) {
        setData(response.data);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        showSnackbar(
          error.response?.data?.message || 'خطا در دریافت لیست سرمایه‌گذاری‌ها',
          'error'
        );
      }
    }
  }, [filter, params]);

  useEffect(() => {
    fetchInvestmentList();
  }, [fetchInvestmentList, dateRange]);

  return (
    <Grid container spacing={{ xs: 2, lg: 3 }}>
      {/* فرم ثبت سرمایه‌گذاری */}
      <Grid size={12}>
        <GoldInvestmentDeposit onSuccess={fetchInvestmentList} />
      </Grid>

      {/* جدول گزارش‌ها */}
      <Grid size={12}>
        <InvestmentTableContainer
          data={data}
          filter={filter}
          setFilter={setFilter}
          dateRange={dateRange}
          setDateRange={setDateRange}
          setParams={setParams}
          onRefresh={fetchInvestmentList}
        />
      </Grid>
    </Grid>
  );
}