import { ProductDateType } from '@/app/core/Types';
import api, { ApiResponse } from '@/lib/api';
export const getProducts = async (params:string) => {
    const response = await api.get<ApiResponse<ProductDateType[]>>(`/gold/products/?category=${params}`);
    return response.data.data;
  }
