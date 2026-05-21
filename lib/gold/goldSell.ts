import { SellGoldDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const goldSell = async (gold: string) => {
  const response = await api.post<ApiResponse<SellGoldDataType>>('/gold/sell/', { weight: gold });
  return response;
};
