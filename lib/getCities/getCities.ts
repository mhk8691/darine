import { isAxiosError } from 'axios';
import api, { ApiResponse } from '../api';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

export interface CityType {
  _id: string;
  city_id: number;
  state_id: number;
  name: string;
  status: string;
  lat: number;
  lon: number;
  province_id: number;
}

export const getCities = async (provinceId: number | string = 0) => {
  try {
    const res = await api.get<ApiResponse<CityType[]>>(
      `/gold/talasea/cities/?province_id=${provinceId}`
    );
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
    return [];
  }
};