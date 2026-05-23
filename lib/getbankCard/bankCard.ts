import { BankCardDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

export const getBankCard = async () => {
  try {
    const res = await api.get<ApiResponse<BankCardDataType[]>>('/accounts/cards/');
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};

export const removeBankCard = async (id: number) => {
    const res = await api.delete<{
      message: string;
    }>(`/accounts/cards/${id}/`);
    return res.data;
  
};

export const addBankCard = async (cardNumber: string) => {
    const res = await api.post<ApiResponse<BankCardDataType[]>>('/accounts/cards/', { card_number: cardNumber });
    return res.data;
};
