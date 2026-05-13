import { isAxiosError } from 'axios';
import api from '../api';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { WithdrawDataType } from '@/app/core/Types';

export const silverWidthdraw = async (amount: string, target: string, cardId?: number) => {
  try {
    const response = await api.post<WithdrawDataType>('/gold/withdraw/', {
      amount,
      target,
      card_id: cardId,
    });
    //  showSnackbar(response.data.message,true)
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.error);
    }
  }
};
