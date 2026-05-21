import { isAxiosError } from "axios";
import api from "../api";
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import { DepositDataType } from "@/app/core/Types";

export const goldDeposit = async (data:FormData) => {
    const response = await api.post<{ message: string }>("/gold/deposit/", {
      amount:data.get('amount'),
      method:data.get('method'),
      receipt:data.get('receipt')
    },{
       headers: {
      'Content-Type': 'multipart/form-data',
    }
    });
    return response.data;
  }

export const getGoldDeposit = async () => {
  try {
    const response = await api.get<DepositDataType>("/gold/deposit/");
    //  showSnackbar(response.data.message,true)
    return response;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.detail);
    }
  }
};
