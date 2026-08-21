import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { CancelGuaranteeData, CreateGuaranteePayload, ExecuteGuaranteeData, GuaranteeCreateResult, GuaranteeInfoData, GuaranteePlan, UserGuaranteeDetail, UserGuaranteeListItem } from '@/app/core/Types';
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
    showSnackbar(res.data.message || 'طرح تضمین با موفقیت ثبت شد','success');
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message || 'خطا در ثبت طرح تضمین');
    }
    return undefined;
  }
};

export const guaranteeService = {
  // ۱. دریافت لیست تضمین‌های کاربر
  getUserGuarantees: async (): Promise<ApiResponse<UserGuaranteeListItem[]>> => {
    const response = await api.get('/gold/guarantee/list/');
    return response.data;
  },

  // ۲. دریافت جزئیات یک تضمین
  getGuaranteeDetail: async (id: number): Promise<ApiResponse<UserGuaranteeDetail>> => {
    const response = await api.get(`/gold/guarantee/${id}/`);
    return response.data;
  },

  // ۳. لغو طرح تضمین
  cancelGuarantee: async (id: number): Promise<ApiResponse<CancelGuaranteeData>> => {
    const response = await api.post(`/gold/guarantee/${id}/cancel/`);
    return response.data;
  },

  // ۴. اجرای طرح تضمین
  executeGuarantee: async (id: number): Promise<ApiResponse<ExecuteGuaranteeData>> => {
    const response = await api.post(`/gold/guarantee/${id}/execute/`);
    return response.data;
  },
};