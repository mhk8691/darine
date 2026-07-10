import { BuyGoldDataType, LimitOrderDataType, MarginOrderDataType } from "@/app/core/Types";
import api, { ApiResponse } from "../api";
import { DatePickerValue } from "@/app/Components/DatePicker/CustomDatePicker";
import { isAxiosError } from "axios";
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";

export const marginOrder = async (
  order_type: "MARKET" | "LIMIT",
  weight: string,
  leverage: number,
  take_profit?: string,
  stop_loss?: string,
  target_price?: string
) => {
  const body = {
    order_type,
    weight,
    leverage,
    take_profit,
    stop_loss,
    target_price,
  };

  const filteredBody = Object.fromEntries(
    Object.entries(body).filter(([, value]) => value !== undefined)
  );

  const response = await api.post<ApiResponse<BuyGoldDataType>>(
    "/gold/short/create/",
    filteredBody
  );

  return response;
};

export  const getMarginOrder = async (  status?: string,
  date?: DatePickerValue,)=>{


  try {
    const query = new URLSearchParams();
   
    if (date?.from) {
      query.append('start_date', String(date.from));
    }

    if (date?.to) {
      query.append('end_date', String(date.to));
    }

    if (status) {
      query.append('status', status);
    }

    const res = await api.get<ApiResponse<MarginOrderDataType[]>>(
      `/gold/short/?${query.toString()}`
    );

    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
} 

export const cancelMarginOrder = async (id:number)=>{
  const response = await api.post<ApiResponse<MarginOrderDataType>>(`gold/short/${id}/close/`,)
  return response.data
}