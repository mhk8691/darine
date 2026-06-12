import { AllAssetsDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';

export const getAssets = async (): Promise<AllAssetsDataType | null> => {
  const res = await api.get<AllAssetsDataType>('/gold/asset-value/');
  return res.data;
};
