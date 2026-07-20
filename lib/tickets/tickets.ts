
import api, { ApiResponse } from '../api';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { CreateTicketPayload, SendMessagePayload, TicketCategoryType, TicketMessageType, TicketType, UnreadCountType } from '@/app/core/Types';

// دریافت لیست دسته‌بندی‌های تیکت
export const getTicketCategories = async () => {
  try {
    const res = await api.get<ApiResponse<TicketCategoryType[]>>(
      '/accounts/tickets/categories/',
    );
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};

// دریافت لیست تیکت‌ها
export const getTickets = async () => {
  try {
    const res = await api.get<ApiResponse<TicketType[]>>('/accounts/tickets/');
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};

// دریافت جزییات یک تیکت
export const getTicket = async (id: number | string) => {
  try {
    const res = await api.get<ApiResponse<TicketType>>(`/accounts/tickets/${id}/`);
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};

// ایجاد تیکت جدید
export const createTicket = async (payload: CreateTicketPayload) => {
  try {
    const res = await api.post<ApiResponse<TicketType>>(
      '/accounts/tickets/',
      payload,
    );
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};

// دریافت پیام‌های یک تیکت
export const getTicketMessages = async (ticketId: number | string) => {
  try {
    const res = await api.get<ApiResponse<TicketMessageType[]>>(
      `/accounts/tickets/${ticketId}/messages/`,
    );
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};

// ارسال پیام جدید در تیکت
export const sendTicketMessage = async (
  ticketId: number | string,
  payload: SendMessagePayload,
) => {
  try {
    const res = await api.post<ApiResponse<TicketMessageType>>(
      `/accounts/tickets/${ticketId}/messages/`,
      payload,
    );
    return res.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};

// بستن تیکت
export const closeTicket = async (ticketId: number | string) => {
  try {
    await api.delete<ApiResponse<null>>(`/accounts/tickets/${ticketId}/`);
    return true;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
    return false;
  }
};

// تعداد پیام‌های خوانده‌نشده
export const getUnreadCount = async () => {
  try {
    const res = await api.get<ApiResponse<UnreadCountType>>(
      '/accounts/tickets/unread/count/',
    );
    return res.data.data.unread_count;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
};
