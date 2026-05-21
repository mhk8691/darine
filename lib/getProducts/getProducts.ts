import { ProductDateType } from '@/app/core/Types';
import api, { ApiResponse } from '@/lib/api';
export const getProducts = async () => {
    const response = await api.get<ApiResponse<ProductDateType[]>>('/gold/products/');
    return response.data.data;
  }
