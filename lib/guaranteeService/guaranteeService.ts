import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { CreateGuaranteePayload, GuaranteeCreateResult, GuaranteeInfoData, GuaranteePlan } from '@/app/core/Types';
import api, { ApiResponse } from '../api';


// ۱) دریافت اطلاعات اولیه تضمین (موجودی‌ها + قیمت طلا + طرح‌ها)
export const getGuaranteeInfo = async (): Promise<GuaranteeInfoData | undefined> => {
  try {
    const res = await api.get<ApiResponse<GuaranteeInfoData>>('/gold/guarantee/info/');
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message || 'خطا در دریافت اطلاعات اولیه');
    }
    return undefined;
  }
};

// ۲) دریافت لیست طرح‌های فعال
export const getGuaranteePlans = async (): Promise<GuaranteePlan[] | undefined> => {
  try {
    const res = await api.get<ApiResponse<GuaranteePlan[]>>('/gold/guarantee/plans/');
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message || 'خطا در دریافت طرح‌ها');
    }
    return undefined;
  }
};

// ۳) ایجاد طرح تضمین
export const createGuarantee = async (
  payload: CreateGuaranteePayload
): Promise<GuaranteeCreateResult | undefined> => {
  try {
    const res = await api.post<ApiResponse<GuaranteeCreateResult>>(
      '/gold/guarantee/create/',
      payload
    );
    showSnackbar(res.data.message || 'طرح تضمین با موفقیت ثبت شد');
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message || 'خطا در ثبت طرح تضمین');
    }
    return undefined;
  }
};