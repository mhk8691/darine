import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import api, { ApiResponse } from '@/lib/api';
export const getReports = async (key: string,params:string,date:DatePickerValue,filter:string) => {
    const response = await api.get<ApiResponse<[]>>(`/gold/reports/?type=${key}&filter_type=${params}&from=${date?.from}&to=${date?.to}filter=${filter}`);
    return response.data.data;
  
};
