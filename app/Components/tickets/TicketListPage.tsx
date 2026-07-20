'use client';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Typography,
  Stack,
  Button,
  Badge,
  Skeleton,
  Fab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { PriorityChip, StatusChip } from './TicketChips';
import CreateTicketDialog from './CreateTicketDialog';
import { TicketType } from '@/app/core/Types';
import { getTickets, getUnreadCount } from '@/lib/tickets/tickets';
import Container from '../Containers/Container/Container';

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function TicketRow({ ticket, onClick }: { ticket: TicketType; onClick: () => void }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'stretch', sm: 'center' },
        gap: { xs: 1.5, sm: 2 },
        p: { xs: 2, sm: 2.5 },
        borderRadius: '12px',
        border: '1px solid',
        borderColor: 'background.border',
        bgcolor: 'background.paper',
        cursor: 'pointer',
        transition: 'border-color 0.15s, background-color 0.15s',
        '&:hover': {
          borderColor: 'primary.main',
        },
      }}
    >
      {/* شماره تیکت */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          width: 44,
          height: 44,
          flexShrink: 0,
          borderRadius: '10px',
          bgcolor: 'background.default',
        }}
      >
        <Typography variant="caption" fontWeight={700} color="text.subtitle">
          #{ticket.id}
        </Typography>
      </Box>

      {/* عنوان و توضیحات */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            color="text.title"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {ticket.title}
          </Typography>
          {!!ticket.unread_count && (
            <Badge badgeContent={ticket.unread_count} color="error" />
          )}
        </Stack>
        <Typography
          variant="body2"
          color="text.muted"
          sx={{
            mt: 0.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {ticket.description}
        </Typography>
      </Box>

      {/* چیپ‌های وضعیت و اولویت */}
      <Stack
        direction="row"
        spacing={1}
        sx={{ flexShrink: 0, order: { xs: 2, sm: 0 } }}
      >
        <StatusChip status={ticket.status} />
        <PriorityChip priority={ticket.priority} />
      </Stack>

      {/* تاریخ */}
      <Typography
        variant="caption"
        color="text.subtitle"
        sx={{
          flexShrink: 0,
          width: { sm: 110 },
          textAlign: { xs: 'left', sm: 'center' },
          order: { xs: 3, sm: 0 },
        }}
      >
        {formatDate(ticket.created_at)}
      </Typography>

      {/* فلش */}
      <ChevronLeftIcon
        sx={{
          display: { xs: 'none', sm: 'block' },
          color: 'text.subtitle',
          flexShrink: 0,
        }}
      />
    </Box>
  );
}

export default function TicketListPage() {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [loading, setLoading] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const loadTickets = useCallback(async () => {
    setLoading(true);
    const [ticketsData, unread] = await Promise.all([getTickets(), getUnreadCount()]);
    setTickets(ticketsData ?? []);
    setUnreadCount(unread ?? 0);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadTickets();
  }, [loadTickets]);

  return (
    <Container style={{
            px: {
              xs: 0,
              sm: 4,
            },
            border: {
              xs: 0,
              sm: 1,
            },
            borderColor: {
              sm: 'background.paper',
            },
          }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h5" fontWeight={700} color="text.title">
              تیکت‌های پشتیبانی
            </Typography>
            {unreadCount > 0 && (
              <Badge badgeContent={unreadCount} color="error" sx={{ ml: 1.5 }} />
            )}
          </Stack>
          <Typography variant="body2" color="text.subtitle" sx={{ mt: 0.5 }}>
            مشکلات و سوالات خود را ثبت کنید تا تیم پشتیبانی بررسی کند
          </Typography>
        </Box>

        {!isMobile && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => setDialogOpen(true)}
            sx={{ borderRadius: '8px', px: 3, fontWeight: 700, whiteSpace: 'nowrap' }}
          >
            ثبت تیکت جدید
          </Button>
        )}
      </Stack>

      {loading ? (
        <Stack spacing={1.5}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} variant="rounded" height={isMobile ? 96 : 76} sx={{ borderRadius: '12px' }} />
          ))}
        </Stack>
      ) : tickets.length === 0 ? (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            px: 2,
            borderRadius: '12px',
            border: '1px dashed',
            borderColor: 'background.border',
          }}
        >
          <ConfirmationNumberOutlinedIcon sx={{ fontSize: 48, color: 'text.subtitle', mb: 1 }} />
          <Typography variant="body1" color="text.secondary">
            هنوز تیکتی ثبت نکرده‌اید
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => setDialogOpen(true)}
            sx={{ borderRadius: '8px', mt: 2 }}
          >
            ثبت اولین تیکت
          </Button>
        </Box>
      ) : (
        <Stack spacing={1.5}>
          {tickets.map((ticket) => (
            <TicketRow
              key={ticket.id}
              ticket={ticket}
              onClick={() => router.push(`/dashboard/tickets/${ticket.id}`)}
            />
          ))}
        </Stack>
      )}

      {isMobile && (
        <Fab
          color="primary"
          onClick={() => setDialogOpen(true)}
          sx={{ position: 'fixed', bottom: 24, left: 24 }}
          aria-label="ثبت تیکت جدید"
        >
          <AddIcon />
        </Fab>
      )}

      <CreateTicketDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onCreated={loadTickets}
      />
    </Container>
  );
}
