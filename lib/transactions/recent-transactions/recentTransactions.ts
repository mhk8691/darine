import { DatePickerValue } from "@/app/Components/DatePicker/CustomDatePicker";
import { RecentTransactionDataType } from "@/app/core/Types";
import api, { ApiResponse } from "@/lib/api";

export const getRecentTransaction = async (
  params: string,
  filter: string,
  date: DatePickerValue
) => {
  const query = new URLSearchParams();

  if (params) {
    query.append("type", params);
  }

  if (date?.from) {
    query.append("start_date", String(date.from));
  }

  if (date?.to) {
    query.append("end_date", String(date.to));
  }

  if (filter) {
    query.append("filter", filter);
  }

  const response = await api.get<ApiResponse<RecentTransactionDataType[]>>(
    `/gold/recent-transactions/?${query.toString()}`
  );

  return response.data.data;
};