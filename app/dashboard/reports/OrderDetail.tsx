import React, { Dispatch, SetStateAction } from 'react';
import { Button, Chip } from '@mui/material';
import priceFormater from '@/app/core/PriceFormater';
import { OrdersDataType } from '@/app/core/Types';
import { formatDate } from '@/app/core/FormatDate';
import DetailModal, { DetailItem } from '@/app/Components/DetailModal/DetailModal';
import Link from 'next/link';

type OrderStatus = 'REQUESTED' | 'PREPARING' | 'DELIVERING' | 'DELIVERED' | 'CANCELLED';
type StatusColor = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

export const orderStatusMap: Record<OrderStatus, { title: string; color: StatusColor }> = {
  REQUESTED: { title: 'درخواست ثبت شد', color: 'warning' },
  PREPARING: { title: 'در حال آماده‌سازی', color: 'info' },
  DELIVERING: { title: 'در حال ارسال', color: 'secondary' },
  DELIVERED: { title: 'تحویل داده شده', color: 'success' },
  CANCELLED: { title: 'لغو شده', color: 'error' },
};

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: OrdersDataType | null;
}

export default function OrderDetail({ open, setOpen, data }: Props) {
  if (!data) return null;

  const items: DetailItem[] = [
    {
      label: 'وضعیت',
      value: (
        <Chip
          size="small"
          color={orderStatusMap[data.status]?.color ?? 'default'}
          label={orderStatusMap[data.status]?.title ?? data.status}
          variant="outlined"
        />
      ),
    },
    { label: 'وزن', value: `${priceFormater(data.total_gold_amount)} گرم` },
    { label: 'کد رهگیری', value: data.tracking_code },
    { label: 'تاریخ ثبت', value: formatDate(data.created_at) },
    { label: 'روش پرداخت', value: data.payment_method_display },
    { label: 'یادداشت', value: data.admin_note || '--' },
        {
      label: 'عملیات',
      show: !!data.physical_invoice_id,
      value: (
        <Button size="small" variant="outlined" color="secondary" LinkComponent={Link} href={`/dashboard/gold-receive/${data.physical_invoice_id}`}>
          مشاهده فاکتور
        </Button>
      ),
    },
  ];

  return (
    <DetailModal
      open={open}
      setOpen={setOpen}
      title="جزئیات سفارش"
      headerAmount={{
        label: 'مبلغ کل',
        amount: `${priceFormater(data.total_toman_amount)} تومان`,
        color: 'primary',
      }}
      items={items}
    />
  );
}