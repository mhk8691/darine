import { BuyGoldDataType, LimitOrderDataType } from '@/app/core/Types';
import api, { ApiResponse } from '../api';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';

export const limitOrder = async (
  order_type: 'BUY' | 'SELL',
  target_price: string,
  amount: string
) => {
  const data = {
    order_type,
    target_price,
    ...(order_type === 'BUY'
      ? { amount_toman: amount }
      : { gold_weight: amount }),
  };

  const response = await api.post<
    ApiResponse<BuyGoldDataType>
  >('/gold/gold-limit-order/', data);

  return response;
};

export  const getLimitOrder = async (  status?: string,
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

    const res = await api.get<ApiResponse<LimitOrderDataType[]>>(
      `/gold/limit-orders/?${query.toString()}`
    );

    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
} 

export const editLimitOrder = async (id:number,price_per_gram:string,amount_gr:string,total_amount:string)=>{
  const response = await api.put<ApiResponse<LimitOrderDataType>>(`/gold/limit-orders/${id}/update/`,{
    gold_weight:amount_gr,
    amount_toman:total_amount,
    target_price:price_per_gram
  })
  return response.data
}

export const cancelLimitOrder = async (id:number)=>{
  const response = await api.post<ApiResponse<LimitOrderDataType>>(`gold/limit-orders/${id}/cancel/`,)
  return response.data
}