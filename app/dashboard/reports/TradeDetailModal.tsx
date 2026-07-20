import React, { Dispatch, SetStateAction } from 'react';
import {
  Stack,
  Typography,
  IconButton,
  Divider,
  Box,
  Chip, Button,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import CustomModal from '@/app/Components/CustomModal/CustomModal';
import priceFormater from '@/app/core/PriceFormater';
import { TradeTableDataType } from '@/app/core/Types';
import { formatDate } from '@/app/core/FormatDate';
import Link from 'next/link';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
  data: TradeTableDataType | null;
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

function getTypeDisplay(type: 'BUY' | 'SELL'): string {
  switch (type) {
    case 'BUY': return 'خرید';
    case 'SELL': return 'فروش';
    default: return type;
  }
}

function getTypeColor(type: 'BUY' | 'SELL'): 'success' | 'error' | 'default' {
  switch (type) {
    case 'BUY': return 'success';
    case 'SELL': return 'error';
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

export default function TradeDetailModal({ open, setOpen, data }: Props) {
  if (!data) return null;

  const pricePerGram = data.total_amount / data.amount_gr;

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
          جزئیات معامله
        </Typography>
        <IconButton onClick={() => setOpen(false)} size="small">
          <Close />
        </IconButton>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      {/* مبلغ کل */}
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
          مبلغ کل معامله
        </Typography>
        <Typography variant="h6" fontWeight={700} color="primary" mt={0.5}>
          {priceFormater(data.total_amount)} تومان
        </Typography>
      </Box>

      {/* جزئیات */}
      <Stack>
        <DetailRow 
          label="نوع معامله" 
          value={
            <Chip
              label={getTypeDisplay(data.type)}
              color={getTypeColor(data.type)}
              size="small"
              sx={{ fontWeight: 600 }}
            />
          } 
        />

        <DetailRow 
          label="وضعیت" 
          value={
            <Chip
              label={data.status}
              color={getStatusColor(data.status)}
              size="small"
              sx={{ fontWeight: 600 }}
            />
          } 
        />

        <DetailRow 
          label="مقدار طلا" 
          value={
            <Typography variant="body2" fontWeight={600}>
              {data.amount_gr.toLocaleString()} گرم
            </Typography>
          } 
        />

        <DetailRow 
          label="قیمت هر گرم" 
          value={
            <Typography variant="body2" fontWeight={600}>
              {priceFormater(data.price_per_gram)} تومان
            </Typography>
          } 
        />

        <DetailRow 
          label="کارمزد" 
          value={
            <Typography variant="body2" color="text.secondary">
              {priceFormater(data.fee)} تومان
            </Typography>
          } 
        />

        <DetailRow 
          label="مبلغ کل" 
          value={
            <Typography variant="body2" fontWeight={700} color="primary">
              {priceFormater(data.total_amount)} تومان
            </Typography>
          } 
        />

        <DetailRow 
          label="کد پیگیری" 
          value={
            <Typography variant="body2" fontFamily="monospace" fontWeight={600} dir="ltr">
              {data.tracking_code}
            </Typography>
          } 
        />

        <DetailRow 
          label="تاریخ ثبت" 
          value={
            <Typography variant="body2" dir="rtl">
              {formatDate(data.created_at)}
            </Typography>
          } 
        />
   
      </Stack>
    </CustomModal>
  );
}