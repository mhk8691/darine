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
import { RecentTransactionDataType } from '@/app/core/Types';
import priceFormater from '@/app/core/PriceFormater';



interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
  data: RecentTransactionDataType | null;
}

// فرمت تاریخ فارسی
function formatDate(dateStr: string): string {
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




interface DetailRowProps {
  label: string;
  value: React.ReactNode;
}

function getStatusColor(status: string): 'warning' | 'success' | 'error' | 'default' {
  switch (status) {
    case 'PENDING': return 'warning';
    case 'COMPLETED': return 'success';
    case 'FAILED': return 'error';
    default: return 'default';
  }
}

function DetailRow({ label, value }: DetailRowProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      py={1.2}
      px={1}
      sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Typography variant="body2" color="text.secondary" fontWeight={500}>
        {label}
      </Typography>
      <Box sx={{ maxWidth: '60%', textAlign: 'left' }}>
        {value}
      </Box>
    </Stack>
  );
}

export default function TransactionDetailModal({ open, setOpen, data }: Props) {
  if (!data) return null;

  return (
    <CustomModal open={open} setOpen={setOpen} modalStyle={{ pb: 2 }}>
      {/* هدر */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="body1" fontSize={16} fontWeight={600}>
          جزئیات تراکنش
        </Typography>
        <IconButton onClick={() => setOpen(false)} size="small">
          <Close />
        </IconButton>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Box
        sx={{
          bgcolor: 'background.default',
          borderRadius: 2,
          p: 2,
          mb: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="caption" color="text.secondary">
          مبلغ تراکنش
        </Typography>
        <Typography variant="h6" fontWeight={700} color="secondary" mt={0.5}>
          {priceFormater(data.amount)} تومان  
        </Typography>
      </Box>

      {/* جزئیات */}
      <Stack>
        <DetailRow label="کد پیگیری" value={
          <Typography variant="body2" fontFamily="monospace" fontWeight={600} dir="ltr">
            {data.tracking_code}
          </Typography>
        } />

        <DetailRow label="وضعیت" value={
          <Chip
            label={data.status_display}
            color={getStatusColor(data.status)}
            size="small"
            sx={{ fontWeight: 600 }}
          />
        } />

        <DetailRow label="نوع تراکنش" value={
          <Typography variant="body2">{data.type_display}</Typography>
        } />

        <DetailRow label="روش پرداخت" value={
          <Typography variant="body2">{data.method_display}</Typography>
        } />

        <DetailRow label="توضیحات" value={
          <Typography variant="body2" textAlign="right">
            {data.description || '—'}
          </Typography>
        } />

        {data.user_card_number && (
          <DetailRow label="شماره کارت" value={
            <Typography variant="body2" fontFamily="monospace" dir="ltr">
              {data.user_card_number}
            </Typography>
          } />
        )}

        {data.admin_note && (
          <DetailRow label="یادداشت ادمین" value={
            <Typography variant="body2" color={data.status ==='COMPLETED' ? 'success.main':data.status === 'FAILED' ? 'error.main':'warning.main'}>
              {data.admin_note}
            </Typography>
          } />
        )}

       

        <DetailRow label="تاریخ ثبت" value={
          <Typography variant="body2" dir="rtl">
            {formatDate(data.created_at)}
          </Typography>
        } />

        <DetailRow label="آخرین بروزرسانی" value={
          <Typography variant="body2" dir="rtl">
            {formatDate(data.updated_at)}
          </Typography>
        } />
         {data.receipt_image_url && (
          <DetailRow label="رسید" value={
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => window.open(data.receipt_image_url!, '_blank')}
            >
              مشاهده رسید
            </Typography>
          } />
        )}
      </Stack>
    </CustomModal>
  );
}
