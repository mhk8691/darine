import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import api, { ApiResponse } from '@/lib/api';
import { isAxiosError } from 'axios';
  import { GiftCardListType } from '@/app/core/Types';

export const giftCardSubmit = async (serialNumber: string) => {
  try {
    const response = await api.post<{
      message: string;
    }>('/gold/gift-card/redeem/', { serial_number: serialNumber });
    showSnackbar(response.data.message, true);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};

export const giftCardOrder = async (weight:string,quantity:number,province:string,city:string,address:string) => {
    const response = await api.post<{
      message: string;
    }>('/gold/gift-card/order/', { weight_per_card: weight ,quantity,province,city,address});
    return response.data
  }

export const getGiftCardList = async () => {
    const response = await api.get<ApiResponse<GiftCardListType[]>>('/gold/gift-card/list/');
    return response.data.data;
};
