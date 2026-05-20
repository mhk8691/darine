import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { ProductDateType } from '@/app/core/Types';
import api, { ApiResponse } from '@/lib/api';
import { isAxiosError } from 'axios';
export const getProducts = async () => {
  try {
    const response = await api.get<ApiResponse<ProductDateType[]>>('/gold/products/');
    return response.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};
