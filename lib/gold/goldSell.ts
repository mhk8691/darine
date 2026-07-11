import { SellGoldDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const goldSell = async (gold: string) => {
  const roundGold = Math.round(+gold * 1000) / 1000
  const response = await api.post<ApiResponse<SellGoldDataType>>('/gold/sell/', { weight: roundGold });
  return response;
};