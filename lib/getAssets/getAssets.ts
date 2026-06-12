import { AllAssetsDataType, StatisticsDataType } from '@/app/core/Types';
import api from '../api';

export const getAssets = async (): Promise<AllAssetsDataType | null> => {
  const res = await api.get<AllAssetsDataType>('/gold/asset-value/');
  return res.data;
};

export const getStatistics = async (): Promise<StatisticsDataType | null> => {
  const res = await api.get<StatisticsDataType>('/gold/statistics/');
  return res.data;
};