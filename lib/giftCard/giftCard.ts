import api, { ApiResponse } from '@/lib/api';
  import { AddressesDataType, GiftCardListType } from '@/app/core/Types';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';

export const giftCardSubmit = async (serialNumber: string) => {
    const response = await api.post<{
      message: string;
    }>('/gold/gift-card/redeem/', { serial_number: serialNumber });
   return response.data
  
};

export const giftCardOrder = async (weight:string,quantity:number,addressId:number) => {
  const newData = { weight_per_card: weight ,quantity,address_id:addressId}
  const response = await api.post<{
      message: string;
    }>('/gold/gift-card/order/', newData);
    return response.data
  }

export const getGiftCardList = async (filter:string,date:DatePickerValue) => {
    const response = await api.get<ApiResponse<GiftCardListType[]>>(`/gold/gift-card/list/?from=${date?.from}&to=${date?.to}filter=${filter}`);
    return response.data.data;
};
export const getAddresses = async () => {
    const response = await api.get<ApiResponse<AddressesDataType[]>>('/gold/addresses/');
    return response.data.data;
};
export const addAddresses = async (newAddress:AddressesDataType) => {
    const response = await api.post<ApiResponse<AddressesDataType>>('/gold/Adress/',newAddress);
    return response.data;
};
