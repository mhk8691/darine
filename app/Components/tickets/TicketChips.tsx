'use client';
import { TicketPriority, TicketStatus } from '@/app/core/Types';
import { Chip, ChipProps } from '@mui/material';

const priorityConfig: Record<TicketPriority, { label: string; color: ChipProps['color'] }> = {
  low: { label: 'کم', color: 'success' },
  medium: { label: 'متوسط', color: 'info' },
  high: { label: 'بالا', color: 'warning' },
  urgent: { label: 'فوری', color: 'error' },
};

// مطابق با جدول وضعیت‌های مستندات API
const statusConfig: Record<TicketStatus, { label: string; color: ChipProps['color'] }> = {
  open: { label: 'باز', color: 'info' },
  pending: { label: 'در انتظار پاسخ', color: 'warning' },
  answered: { label: 'پاسخ داده شده', color: 'success' },
  resolved: { label: 'حل شده', color: 'secondary' },
  closed: { label: 'بسته شده', color: 'default' },
};

export function PriorityChip({ priority }: { priority: TicketPriority }) {
  const conf = priorityConfig[priority] ?? { label: priority, color: 'default' as const };
  return (
    <Chip
      label={conf.label}
      color={conf.color}
      size="small"
      variant="outlined"
      sx={{ borderRadius: '6px', fontWeight: 500 }}
    />
  );
}

export function StatusChip({ status }: { status: TicketStatus }) {
  const conf = statusConfig[status] ?? { label: status, color: 'default' as const };
  return (
    <Chip
      label={conf.label}
      color={conf.color}
      size="small"
      sx={{ borderRadius: '6px', fontWeight: 500 }}
    />
  );
}