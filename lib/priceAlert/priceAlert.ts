import { BankCardDataType, PriceAlertsDataType } from '@/app/core/Types';
import api from '../api';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

export const getPriceAlerts = async () => {
  try {
    const res = await api.get<PriceAlertsDataType[]>('/gold/price-alerts/');
    return res.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};

export const removePriceAlert = async (id: number) => {
  try {
    const res = await api.delete<{
      message: string;
    }>(`/gold/price-alerts/${id}/`);
    // showSnackbar(res.data.message,true)
    return res.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};

export const addPriceAlert = async (targetPrice: string, alertType: string) => {
  try {
    const res = await api.post('/gold/price-alerts/', {
      target_price: targetPrice,
      alert_type: alertType,
    });
    return res.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};
