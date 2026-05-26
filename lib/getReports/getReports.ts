import api, { ApiResponse } from '@/lib/api';
export const getReports = async (key: string,params:string) => {
    const response = await api.get<ApiResponse<[]>>(`/gold/reports/?type=${key}&filter_type=${params}`);
    return response.data.data;
  
};
