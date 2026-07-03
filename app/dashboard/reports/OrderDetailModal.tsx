import React, { Dispatch, SetStateAction } from 'react';
import {
  Stack,
  Typography,
  IconButton,
  Divider,
  Box,
  Chip,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import CustomModal from '@/app/Components/CustomModal/CustomModal';
import priceFormater from '@/app/core/PriceFormater';
import { OrdersDataType } from '@/app/core/Types';
import { formatDate } from '@/app/core/FormatDate';

/* ---------------- TYPES ---------------- */

type OrderStatus =
  | 'REQUESTED'
  | 'PREPARING'
  | 'DELIVERING'
  | 'DELIVERED'
  | 'CANCELLED';

type StatusColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

/* ---------------- STATUS MAP ---------------- */

export const orderStatusMap: Record<
  OrderStatus,
  { title: string; color: StatusColor }
> = {
  REQUESTED: {
    title: 'درخواست ثبت شد',
    color: 'warning',
  },
  PREPARING: {
    title: 'در حال آماده‌سازی',
    color: 'info',
  },
  DELIVERING: {
    title: 'در حال ارسال',
    color: 'secondary',
  },
  DELIVERED: {
    title: 'تحویل داده شده',
    color: 'success',
  },
  CANCELLED: {
    title: 'لغو شده',
    color: 'error',
  },
};


export const handleTitleStatus = (status: OrderStatus) => {
  return orderStatusMap[status]?.title ?? status;
};

export const handleColorStatus = (status: OrderStatus): StatusColor => {
  return orderStatusMap[status]?.color ?? 'default';
};


interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: OrdersDataType | null;
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      py={1.2}
      px={1}
      sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Box sx={{ maxWidth: '60%', textAlign: 'left' }}>{value}</Box>
    </Stack>
  );
}

export default function OrderDetailModal({
  open,
  setOpen,
  data,
}: Props) {
  if (!data) return null;

  const fullAddress = `${data.province} - ${data.city} - ${data.address} - پلاک ${data.plaque} - واحد ${data.unit}${
    data.postal_code ? ` - ${data.postal_code}` : ''
  }`;

  return (
    <CustomModal open={open} setOpen={setOpen} modalStyle={{ pb: 2 }}>
      {/* HEADER */}
      <Stack
        direction="row"
        justifyContent="space-between"
        mb={2}
        mt={1}
        px={1}
      >
        <Typography fontWeight={600}>جزئیات سفارش</Typography>
        <IconButton onClick={() => setOpen(false)}>
          <Close />
        </IconButton>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      {/* TOTAL PRICE */}
      <Box
        sx={{
          p: 2,
          mb: 2,
          textAlign: 'center',
          bgcolor: 'background.default',
          borderRadius: 2,
        }}
      >
        <Typography variant="caption">مبلغ کل</Typography>
        <Typography variant="h6" color="primary">
          {priceFormater(data.total_toman_amount)} تومان
        </Typography>
      </Box>

      {/* DETAILS */}
      <Stack>
        <DetailRow
          label="وضعیت"
          value={
            <Chip
              size="small"
              color={handleColorStatus(data.status)}
              label={handleTitleStatus(data.status)}
              variant="outlined"
            />
          }
        />

        <DetailRow label="کد رهگیری" value={data.tracking_code} />

        <DetailRow label="تاریخ ثبت" value={formatDate(data.created_at)} />

        <DetailRow
          label="روش پرداخت"
          value={data.payment_method_display}
        />

        <DetailRow
          label="نوع ارسال"
          value={data.delivery_type_display}
        />

        <DetailRow label="آدرس" value={fullAddress} />

        <DetailRow label="یادداشت" value={data.admin_note || '--'} />
      </Stack>
    </CustomModal>
  );
}