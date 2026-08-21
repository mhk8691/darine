import api, { ApiResponse } from '../api';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { 
  CreateTicketPayload, 
  SendTicketMessagePayload, 
  TicketCategoryType, 
  TicketMessageType, 
  TicketType 
} from '@/app/core/Types';

// ۱. دریافت دسته‌بندی‌های تیکت
export const getTicketCategories = async () => {
  try {
    const res = await api.get<ApiResponse<TicketCategoryType[]>>(
      '/accounts/tickets/categories/'
    );
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message || 'خطا در دریافت دسته‌بندی‌ها');
    }
  }
};

// ۲. دریافت لیست تیکت‌ها (به همراه فیلترها)
export const getTickets = async (params?: { status?: string; priority?: string; search?: string }) => {
  try {
    const res = await api.get<ApiResponse<TicketType[]>>('/accounts/tickets/', { params });
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message || 'خطا در دریافت لیست تیکت‌ها');
    }
  }
};

// ۳. دریافت جزییات یک تیکت
export const getTicket = async (id: number | string) => {
  try {
    const res = await api.get<ApiResponse<TicketType>>(`/accounts/tickets/${id}/`);
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message || 'خطا در دریافت اطلاعات تیکت');
    }
  }
};

// ۴. ایجاد تیکت جدید
export const createTicket = async (payload: CreateTicketPayload) => {
  try {
    let body: FormData | Omit<CreateTicketPayload, 'attachment'> = payload;

    if (payload.attachment) {
      const formData = new FormData();
      formData.append('title', payload.title);
      formData.append('description', payload.description);
      formData.append('category', String(payload.category));
      formData.append('priority', payload.priority);
      formData.append('attachment', payload.attachment);
      body = formData;
    } else {
      const { attachment: _attachment, ...rest } = payload;
      body = rest;
    }

    const res = await api.post<ApiResponse<TicketType>>('/accounts/tickets/', body);
    showSnackbar(res.data.message || 'تیکت با موفقیت ایجاد شد','success');
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message || 'خطا در ثبت تیکت');
    }
  }
};

// ۵. بستن تیکت
export const closeTicket = async (id: number | string) => {
  try {
    const res = await api.delete<ApiResponse<null>>(`/accounts/tickets/${id}/`);
    showSnackbar(res.data.message || 'تیکت با موفقیت بسته شد','success');
    return true;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message || 'خطا در بستن تیکت');
    }
    return false;
  }
};

// ۶. دریافت پیام‌های یک تیکت
export const getTicketMessages = async (ticketId: number | string) => {
  try {
    const res = await api.get<ApiResponse<TicketMessageType[]>>(`/accounts/tickets/${ticketId}/messages/`);
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message || 'خطا در دریافت پیام‌ها');
    }
  }
};

// ۷. ارسال پیام جدید در تیکت
export const sendTicketMessage = async (ticketId: number | string, payload: SendTicketMessagePayload) => {
  try {
    let body: FormData | { message: string } = { message: payload.message };

    if (payload.attachment) {
      const formData = new FormData();
      if (payload.message) formData.append('message', payload.message);
      formData.append('attachment', payload.attachment);
      body = formData;
    }

    const res = await api.post<ApiResponse<TicketMessageType>>(`/accounts/tickets/${ticketId}/messages/`, body);
    showSnackbar(res.data.message || 'پیام با موفقیت ارسال شد','success');
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message || 'خطا در ارسال پیام');
    }
  }
};

// ۸. دریافت تعداد پیام‌های خوانده نشده
export const getUnreadCount = async () => {
  try {
    const res = await api.get<ApiResponse<{ unread_count: number }>>('/accounts/tickets/unread/count/');
    return res.data.data.unread_count;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message);
    }
    return 0;
  }
};

// ۹. بررسی وضعیت تیکت با کد رهگیری (بدون نیاز به احراز هویت)
export const getTicketStatusByTrackingCode = async (trackingCode: string) => {
  try {
    const res = await api.get<ApiResponse<any>>(`/accounts/tickets/tracking/${trackingCode}/`);
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data?.message || 'تیکتی با این کد رهگیری یافت نشد');
    }
  }
};