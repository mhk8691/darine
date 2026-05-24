import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import api, { ApiResponse } from '@/lib/api';
import { isAxiosError } from 'axios';
export const getReports = async (key: string) => {
    const response = await api.get<ApiResponse<[]>>(`/gold/reports/?type=${key}`);
    return response.data.data;
  
};
