import { isAxiosError } from "axios";
import api from "../api";
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
import { DepositDataType } from "@/app/core/Types";

export const goldDeposit = async (amount: string) => {
  try {
    const response = await api.post<{ message: string }>("/gold/deposit/", {
      amount,
      receipt:''
    });
    //  showSnackbar(response.data.message,true)
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.error);
    }
  }
};
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
