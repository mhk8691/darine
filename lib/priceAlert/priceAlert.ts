import {  PriceAlertsDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';

export const getPriceAlerts = async (
  filter?: string,
  date?: DatePickerValue,
  alert_type?:string
) => {
  try {
    const query = new URLSearchParams();
    if (alert_type) {
      query.append('alert_type', String(alert_type));
    }
    if (date?.from) {
      query.append('start_date', String(date.from));
    }

    if (date?.to) {
      query.append('end_date', String(date.to));
    }

    if (filter) {
      query.append('is_active', filter);
    }

    const res = await api.get<ApiResponse<PriceAlertsDataType[]>>(
      `/gold/price-alerts/?${query.toString()}`
    );

    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};
export const removePriceAlert = async (id: number) => {
    const res = await api.delete<{
      message: string;
    }>(`/gold/price-alerts/${id}/`);
    
    return res.data;
  
};

export const addPriceAlert = async (targetPrice: string, alertType: string) => {
    const res = await api.post<{
      message:string
    }>('/gold/price-alerts/', {
      target_price: targetPrice,
      alert_type: alertType,
    });
    return res.data;
  
};
