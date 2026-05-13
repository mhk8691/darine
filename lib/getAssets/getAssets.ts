import { AllAssetsDataType, AssetsDataType } from '@/app/core/Types';
import api from '../api';

export const getAssets = async () => {
  const res = await api.get<AssetsDataType>('/gold/assets/');
  return res.data;
};

export const getAllAssets = async () => {
  const res = await api.get<AllAssetsDataType>('/gold/assets/');
  return res.data;
};
