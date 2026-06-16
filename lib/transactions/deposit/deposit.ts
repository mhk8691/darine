import { DepositDataType } from "@/app/core/Types";
import api, { ApiResponse } from "@/lib/api";

export const goldDeposit = async (data:FormData) => {
    const response = await api.post<{ message: string }>("/gold/deposit/", {
      amount:data.get('amount'),
      method:data.get('method'),
      receipt:data.get('receipt'),
      description:data.get('description')

    },{
       headers: {
      'Content-Type': 'multipart/form-data',
    }
    });
    return response.data;
  }

export const getGoldDeposit = async () => {
    const response = await api.get<ApiResponse<DepositDataType>>("/gold/deposit/info/");
   
    return response.data;
  } 
