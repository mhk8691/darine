import { PhysicalInvoiceType, TradeInvoiceType } from '@/app/core/Types';
import api, { ApiResponse } from '@/lib/api';

// --- خرید و فروش اعتباری / آب‌شده (نقره/طلا) ---
export const getInvoices = async (id: string): Promise<TradeInvoiceType> => {
  const response = await api.get<ApiResponse<TradeInvoiceType>>(`/gold/invoices/${id}/`);
  return response.data.data;
};

export const downloadInvoices = async (id: string, date: string) => {
  const response = await api.get(`/gold/invoices/${id}/download/`, {
    responseType: 'blob',
  });

  return {
    blob: response.data,
    fileName:
      response.headers['content-disposition']
        ?.match(/filename="?(.+?)"?$/)?.[1] ?? `factor darine | ${date}.pdf`,
  };
};

// --- تحویل فیزیکی طلا (جدید) ---
export const getPhysicalInvoice = async (id: string): Promise<PhysicalInvoiceType> => {
  const response = await api.get<ApiResponse<PhysicalInvoiceType>>(`/gold/physical-invoices/${id}/`);
  return response.data.data;
};

export const downloadPhysicalInvoice = async (id: string, date: string) => {
  const response = await api.get(`/gold/physical-invoices/${id}/download/`, {
    responseType: 'blob',
  });

  return {
    blob: response.data,
    fileName:
      response.headers['content-disposition']
        ?.match(/filename="?(.+?)"?$/)?.[1] ?? `physical factor darine | ${date}.pdf`,
  };
};