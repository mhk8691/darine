import React, { Dispatch, SetStateAction } from 'react';
import {
  Stack,
  Typography,
  IconButton,
  Divider,
  Box,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import CustomModal from '@/app/Components/CustomModal/CustomModal';

export interface DetailItem {
  label: string;
  value: React.ReactNode;
  show?: boolean; // برای آیتم‌های شرطی
}

interface DetailModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  headerAmount?: {
    label: string;
    amount: React.ReactNode;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  };
  items: DetailItem[];
}

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
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
      <Box sx={{ maxWidth: '60%', textAlign: 'left' }}>{value}</Box>
    </Stack>
  );
}

export default function DetailModal({
  open,
  setOpen,
  title,
  headerAmount,
  items,
}: DetailModalProps) {
  return (
    <CustomModal open={open} setOpen={setOpen} modalStyle={{ pb: 2 }}>
      {/* HEADER */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        px={0.5}
      >
        <Typography variant="body1" fontSize={16} fontWeight={600}>
          {title}
        </Typography>
        <IconButton onClick={() => setOpen(false)} size="small">
          <Close />
        </IconButton>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      {/* HEADER AMOUNT BOX */}
      {headerAmount && (
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
            {headerAmount.label}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={700}
            color={headerAmount.color || 'primary'}
            mt={0.5}
          >
            {headerAmount.amount}
          </Typography>
        </Box>
      )}

      {/* DETAILS LIST */}
      <Stack>
        {items
          .filter((item) => item.show !== false)
          .map((item, index) => (
            <DetailRow key={index} label={item.label} value={item.value} />
          ))}
      </Stack>
    </CustomModal>
  );
}