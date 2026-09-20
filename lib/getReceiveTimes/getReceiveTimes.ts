import { ReceiveAddressItem } from '@/app/core/Types';
import api, { ApiResponse } from '../api';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

export const getReceiveTimes = async () => {
  try {
    const res = await api.get<ApiResponse<ReceiveAddressItem[]>>(
      '/gold/talasea/receive-times/'
    );
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};