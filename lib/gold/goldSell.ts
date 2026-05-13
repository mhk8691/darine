import { SellGoldDataType } from '@/app/core/Types';
import api from '../api';

export const goldSell = async (gold: string) => {
  const response = await api.post<SellGoldDataType>('/gold/sell/', { weight: gold });
  return response;
};
