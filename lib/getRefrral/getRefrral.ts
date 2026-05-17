import { RefrraDataType } from '@/app/core/Types';
import api from '../api';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

export const getreferral = async () => {
  try {
    const res = await api.get<RefrraDataType>('/gold/referral/');
    return res.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};
