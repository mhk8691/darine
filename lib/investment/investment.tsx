import api, { ApiResponse } from '../api';

// Types
export interface InvestmentPlan {
  id: number;
  name: string;
  duration_months: number;
  monthly_profit_percent: string;
  total_profit_percent: string;
  is_active: boolean;
  description: string;
}

export interface InvestmentInfoData {
  accessible_gold: number;
  gold_price: number;
  plans: InvestmentPlan[];
}

export interface CreateInvestmentPayload {
  plan_id: number;
  gold_weight: string;
}

// APIs
export const getInvestmentInfo = async () => {
  const response = await api.get<ApiResponse<InvestmentInfoData>>('/gold/investment/info/');
  return response.data;
};

export const createInvestment = async (payload: CreateInvestmentPayload) => {
  const response = await api.post<ApiResponse<any>>('/gold/investment/create/', payload);
  return response;
};

// تابع جدید لغو سرمایه‌گذاری
export const cancelInvestment = async (id: number) => {
  const response = await api.post<ApiResponse<any>>(`/gold/investment/${id}/cancel/`);
  return response.data;
};