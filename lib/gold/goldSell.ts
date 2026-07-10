import { SellGoldDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const goldSell = async (price: string) => {
  const response = await api.post<ApiResponse<SellGoldDataType>>('/gold/sell/', { toman: price });
  return response;
};
