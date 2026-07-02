import {  PriceAlertsDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';

export const getPriceAlerts = async (
  status?: string,
  date?: DatePickerValue,
) => {
  try {
    const query = new URLSearchParams();
   
    if (date?.from) {
      query.append('start_date', String(date.from));
    }

    if (date?.to) {
      query.append('end_date', String(date.to));
    }

    if (status) {
      query.append('status', status);
    }

    const res = await api.get<ApiResponse<PriceAlertsDataType[]>>(
      `/gold/price-alert/?${query.toString()}`
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

export const addPriceAlert = async (targetPrice: string, alertType: string,maxNotifications:string) => {
    const res = await api.post<{
      message:string
    }>('/gold/price-alert/', {
      target_price: targetPrice,
      alert_type: alertType,
      max_notifications:maxNotifications
    });
    return res.data;
  
};

export const toggleStatusPriceAlert = async (id:number) => {
    const res = await api.post<{
      message:string
    }>(`/gold/price-alert/${id}/toggle/`);
    return res.data;
  
};