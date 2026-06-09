import { AllAssetsDataType, AssetsDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const getAssets = async (): Promise<AssetsDataType | null> => {
 

  const res = await api.get<ApiResponse<AssetsDataType>>('/gold/balance/');
  return res.data.data;
};

// export const getAllAssets = async () => {
//   const res = await api.get<AllAssetsDataType>('/gold/assets/');
//   return res.data;
// };
