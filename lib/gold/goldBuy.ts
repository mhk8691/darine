import { BuyGoldDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const goldBuy = async (method:'WALLET'|'GATEWAY',weight:string) => {
   const roundGold = Math.round(+weight * 1000) / 1000
  const response = await api.post<ApiResponse<BuyGoldDataType>>('/gold/buy/', { weight:roundGold,payment_method:method });
  return response;
};