import { BannersType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

export const getBanners = async () => {
  try {
    const res = await api.get<ApiResponse<BannersType[]>>('/gold/banners/');
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};
