import React, { Dispatch, SetStateAction } from 'react';
import { Typography, Chip } from '@mui/material';
import { RecentTransactionDataType } from '@/app/core/Types';
import priceFormater from '@/app/core/PriceFormater';
import DetailModal, { DetailItem } from '@/app/Components/DetailModal/DetailModal';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: RecentTransactionDataType | null;
}

function formatDateFa(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleString('fa-IR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return dateStr;
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case 'PENDING': return 'warning';
    case 'COMPLETED': return 'success';
    case 'FAILED': return 'error';
    default: return 'default';
  }
}

export default function TransactionDetail({ open, setOpen, data }: Props) {
  if (!data) return null;

  const items: DetailItem[] = [
    {
      label: 'کد پیگیری',
      value: <Typography variant="body2" fontFamily="monospace" fontWeight={600} dir="ltr">{data.tracking_code}</Typography>,
    },
    {
      label: 'وضعیت',
      value: <Chip label={data.status_display} color={getStatusColor(data.status)} size="small" sx={{ fontWeight: 600 }} />,
    },
    { label: 'نوع تراکنش', value: <Typography variant="body2">{data.type_display}</Typography> },
    { label: 'روش پرداخت', value: <Typography variant="body2">{data.method_display}</Typography> },
    { label: 'توضیحات', value: <Typography variant="body2" textAlign="right">{data.description || '—'}</Typography> },
    {
      label: 'شماره کارت',
      show: !!data.user_card_number,
      value: <Typography variant="body2" fontFamily="monospace" dir="ltr">{data.user_card_number}</Typography>,
    },
    {
      label: 'یادداشت ادمین',
      show: !!data.admin_note,
      value: (
        <Typography
          variant="body2"
          color={data.status === 'COMPLETED' ? 'success.main' : data.status === 'FAILED' ? 'error.main' : 'warning.main'}
        >
          {data.admin_note}
        </Typography>
      ),
    },
    { label: 'تاریخ ثبت', value: <Typography variant="body2" dir="rtl">{formatDateFa(data.created_at)}</Typography> },
    { label: 'آخرین بروزرسانی', value: <Typography variant="body2" dir="rtl">{formatDateFa(data.updated_at)}</Typography> },
    {
      label: 'رسید',
      show: !!data.receipt_image_url,
      value: (
        <Typography
          variant="body2"
          color="primary"
          sx={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => window.open(data.receipt_image_url!, '_blank')}
        >
          مشاهده رسید
        </Typography>
      ),
    },
  ];

  return (
    <DetailModal
      open={open}
      setOpen={setOpen}
      title="جزئیات تراکنش"
      headerAmount={{
        label: 'مبلغ تراکنش',
        amount: `${priceFormater(data.amount)} تومان`,
        color: 'secondary',
      }}
      items={items}
    />
  );
}