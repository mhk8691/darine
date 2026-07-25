import { InvoiceType } from '@/app/core/Types';
import api, { ApiResponse } from '@/lib/api';
export const getInvoices = async (id:string) => {
    const response = await api.get<ApiResponse<InvoiceType>>(`/gold/invoices/${id}/`);
    return response.data.data;
  }

  export const downloadInvoices = async (id:string) => {
    const response = await api.get<ApiResponse<InvoiceType>>(`/gold/invoices/${id}/download/`);
    return response.data.data;
  }
