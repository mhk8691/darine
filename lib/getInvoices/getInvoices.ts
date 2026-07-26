import { formatDate } from '@/app/core/FormatDate';
import { InvoiceType } from '@/app/core/Types';
import api, { ApiResponse } from '@/lib/api';
export const getInvoices = async (id:string) => {
    const response = await api.get<ApiResponse<InvoiceType>>(`/gold/invoices/${id}/`);
    return response.data.data;
  }
export const downloadInvoices = async (id: string,date:string) => {
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