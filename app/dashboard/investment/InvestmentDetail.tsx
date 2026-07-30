import React, { Dispatch, SetStateAction } from 'react';
import { Chip, Typography } from '@mui/material';
import priceFormater from '@/app/core/PriceFormater';
import { InvestmentTableItem } from './InvestmentTableContainer';
import DetailModal, { DetailItem } from '@/app/Components/DetailModal/DetailModal';
import { formatDate } from '@/app/core/FormatDate';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: InvestmentTableItem | null;
}

function getStatusColor(status: string) {
  switch (status) {
    case 'ACTIVE':
      return 'success';
    case 'COMPLETED':
      return 'info';
    case 'CANCELLED':
      return 'error';
    default:
      return 'default';
  }
}

export default function InvestmentDetail({ open, setOpen, data }: Props) {
  if (!data) return null;

  const items: DetailItem[] = [
  
    {
      label: 'عنوان طرح',
      value: (
        <Typography variant="body2" fontWeight={600}>
          {data.plan_name}
        </Typography>
      ),
    },
    {
      label: 'وضعیت',
      value: (
        <Chip
          label={data.status_display}
          color={getStatusColor(data.status)}
          size="small"
          sx={{ fontWeight: 600 }}
        />
      ),
    },
    {
      label: 'وزن طلای سرمایه‌گذاری‌شده',
      value: (
        <Typography variant="body2" fontWeight={600}>
          {priceFormater(+data.gold_weight)} گرم
        </Typography>
      ),
    },
   

  
 


    {
      label: 'تاریخ شروع طرح',
      value: <Typography variant="body2" dir="rtl">{formatDate(data.start_date) || '-'}</Typography>,
    },
    {
      label: 'تاریخ اتمام طرح',
      value: <Typography variant="body2" dir="ltr">{formatDate(data.end_date) || '-'}</Typography>,
    },
      {
      label: 'سود سرمایه‌گذاری',
      value: (
        <Typography variant="body2" fontWeight={600} color="info.main">
          {data.total_expected_profit * 100}%
        </Typography>
      ),
    },
 
    {
      label: 'مجموع طلای برگشتی به موجودی شما',
      value: (
        <Typography variant="body2" fontWeight={700} color="primary.main">
          {priceFormater(+data.total_return)} گرم
        </Typography>
      ),
    },
 
  ];

  return (
    <DetailModal
      open={open}
      setOpen={setOpen}
      title="جزئیات سرمایه‌گذاری"
      headerAmount={{
        label: 'مبلغ سرمایه‌گذاری',
        amount: `${priceFormater(+data.investment_price)} تومان`,
        color: 'primary',
      }}
      items={items}
    />
  );
}