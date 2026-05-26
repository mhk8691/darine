import {  PriceAlertsDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

export const getPriceAlerts = async () => {
  try {
    const res = await api.get<ApiResponse<PriceAlertsDataType[]>>('/gold/price-alerts/');
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
