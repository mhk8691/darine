import { BuyGoldDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const goldBuy = async (price: string,method:'WALLET'|'GATEWAY') => {
  const response = await api.post<ApiResponse<BuyGoldDataType>>('/gold/buy/', { toman: price,payment_method:method });
  return response;
};
