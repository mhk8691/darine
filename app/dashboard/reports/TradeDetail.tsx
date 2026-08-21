import React, { Dispatch, SetStateAction } from 'react';
import { Typography, Chip, Button } from '@mui/material';
import priceFormater from '@/app/core/PriceFormater';
import { TradeTableDataType } from '@/app/core/Types';
import { formatDate } from '@/app/core/FormatDate';
import Link from 'next/link';
import DetailModal, { DetailItem } from '@/app/Components/DetailModal/DetailModal';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: TradeTableDataType | null;
}

function getStatusColor(status: string) {
  switch (status) {
    case 'PENDING': return 'warning';
    case 'COMPLETED': return 'success';
    case 'FAILED': return 'error';
    default: return 'default';
  }
}

function getTypeDisplay(type: 'BUY' | 'SELL') {
  return type === 'BUY' ? 'خرید' : type === 'SELL' ? 'فروش' : type;
}

function getTypeColor(type: 'BUY' | 'SELL') {
  return type === 'BUY' ? 'success' : type === 'SELL' ? 'error' : 'default';
}

export default function TradeDetail({ open, setOpen, data }: Props) {
  if (!data) return null;

  const items: DetailItem[] = [
    {
      label: 'نوع معامله',
      value: <Chip label={getTypeDisplay(data.type)} color={getTypeColor(data.type)} size="small" sx={{ fontWeight: 600 }} />,
    },
    {
      label: 'وضعیت',
      value: <Chip label={data.status} color={getStatusColor(data.status)} size="small" sx={{ fontWeight: 600 }} />,
    },
    {
      label: 'مقدار طلا',
      value: <Typography variant="body2" fontWeight={600}>{data.amount_gr.toLocaleString()} گرم</Typography>,
    },
    {
      label: 'قیمت هر گرم',
      value: <Typography variant="body2" fontWeight={600}>{priceFormater(data.price_per_gram)} تومان</Typography>,
    },
    {
      label: 'کارمزد',
      value: <Typography variant="body2" color="text.secondary">{priceFormater(data.fee)} تومان</Typography>,
    },
    {
      label: 'مبلغ کل',
      value: <Typography variant="body2" fontWeight={700} color="primary">{priceFormater(data.total_amount)} تومان</Typography>,
    },
    {
      label: 'کد پیگیری',
      value: <Typography variant="body2" fontFamily="monospace" fontWeight={600} dir="ltr">{data.tracking_code}</Typography>,
    },
    {
      label: 'تاریخ ثبت',
      value: <Typography variant="body2" dir="rtl">{formatDate(data.created_at)}</Typography>,
    },
    {
      label: 'عملیات',
      show: !!data.invoice_id,
      value: (
        <Button size="small" variant="outlined" color="secondary" LinkComponent={Link} href={`/dashboard/trades/${data.invoice_id}`}>
          مشاهده فاکتور
        </Button>
      ),
    },
  ];

  return (
    <DetailModal
      open={open}
      setOpen={setOpen}
      title="جزئیات معامله"
      headerAmount={{
        label: 'مبلغ کل معامله',
        amount: `${priceFormater(data.total_amount)} تومان`,
        color: 'primary',
      }}
      items={items}
    />
  );
}