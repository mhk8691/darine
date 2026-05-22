import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import api, { ApiResponse } from '@/lib/api';
import { isAxiosError } from 'axios';
  import { AddressesDataType, GiftCardListType } from '@/app/core/Types';

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

export const giftCardOrder = async (weight:string,quantity:number,province:string,city:string,address:string,plaque:string,unit:string,postCode:string,addressId?:number) => {
  const dataWithAddress = { weight_per_card: weight ,quantity,province,city,address,plaque,unit,postal_code:postCode}
  const dataWithoutAddress = { weight_per_card: weight ,quantity,address_id:addressId}
  const newData = addressId ?dataWithoutAddress :dataWithAddress
  const response = await api.post<{
      message: string;
    }>('/gold/gift-card/order/', newData);
    return response.data
  }

export const getGiftCardList = async () => {
    const response = await api.get<ApiResponse<GiftCardListType[]>>('/gold/gift-card/list/');
    return response.data.data;
};
export const getAddresses = async () => {
    const response = await api.get<ApiResponse<AddressesDataType[]>>('/gold/addresses/');
    return response.data.data;
};
