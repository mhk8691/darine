import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import api, { ApiResponse } from '@/lib/api';

export const getReports = async (
  type: string,
  method?: string,
  date?: DatePickerValue,
  filter?: string
) => {
  const query = new URLSearchParams();

  query.append('type', type);
  if (method){
      query.append('method', method);
  }

  if (date?.from) {
    query.append('start_date', String(date.from));
  }

  if (date?.to) {
    query.append('end_date', String(date.to));
  }

  if (filter) {
    query.append('status', filter);
  }

  const response = await api.get<ApiResponse<[]>>(
    `/gold/reports/?${query.toString()}`
  );

  return response.data.data;
};