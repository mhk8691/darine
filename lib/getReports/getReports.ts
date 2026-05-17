import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import api from '@/lib/api';
import { isAxiosError } from 'axios';
export const getReports = async (key: string) => {
  try {
    const response = await api.get(`/gold/reports/?tab=${key}`);
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};
