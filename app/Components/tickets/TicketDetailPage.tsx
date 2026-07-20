'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Typography,
  Stack,
  Paper,
  TextField,
  IconButton,
  Button,
  Skeleton,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Container as MuiContainer
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { PriorityChip, StatusChip } from './TicketChips';
import { TicketMessageType, TicketType } from '@/app/core/Types';
import { closeTicket, getTicket, getTicketMessages, sendTicketMessage } from '@/lib/tickets/tickets';
import Container from '../Containers/Container/Container';

function formatTime(iso: string) {
  try {
    return new Intl.DateTimeFormat('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

interface TicketDetailPageProps {
  ticketId: string;
}

export default function TicketDetailPage({ ticketId }: TicketDetailPageProps) {
  const router = useRouter();
  const [ticket, setTicket] = useState<TicketType | null>(null);
  const [messages, setMessages] = useState<TicketMessageType[]>([]);
  const [loading, setLoading] = useState(true);

  const [reply, setReply] = useState('');
  const [sending, setSending] = useState(false);

  const [closeDialogOpen, setCloseDialogOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    const [ticketData, messagesData] = await Promise.all([
      getTicket(ticketId),
      getTicketMessages(ticketId),
    ]);
    setTicket(ticketData ?? null);
    setMessages(messagesData ?? []);
    setLoading(false);
  }, [ticketId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  const isClosed = ticket?.status === 'closed';

  const handleSend = async () => {
    if (!reply.trim() || isClosed) return;
    setSending(true);
    const newMessage = await sendTicketMessage(ticketId, { message: reply.trim() });
    setSending(false);

    // در صورت خطا، خود sendTicketMessage با showSnackbar پیام را نمایش می‌دهد
    if (newMessage) {
      setMessages((prev) => [...prev, newMessage]);
      setReply('');
    }
  };

  const handleClose = async () => {
    setClosing(true);
    const success = await closeTicket(ticketId);
    setClosing(false);
    setCloseDialogOpen(false);

    if (success) {
      await loadData();
    }
  };

  if (loading) {
    return (
      <MuiContainer maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
        <Skeleton variant="text" width={200} height={40} />
        <Skeleton variant="rounded" height={100} sx={{ my: 2, borderRadius: '12px' }} />
        <Skeleton variant="rounded" height={300} sx={{ borderRadius: '12px' }} />
      </MuiContainer>
    );
  }

  if (!ticket) {
    return (
      <MuiContainer maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
        <Typography color="text.secondary">تیکت یافت نشد</Typography>
        <Button sx={{ mt: 2 }} onClick={() => router.push('/dashboard/tickets')}>
          بازگشت به لیست تیکت‌ها
        </Button>
      </MuiContainer>
    );
  }

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
      {/* هدر */}
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <IconButton onClick={() => router.push('/dashboard/tickets')} size="small">
          <ArrowForwardIcon fontSize="small" />
        </IconButton>
        <Typography variant="body2" color="text.subtitle">
          بازگشت به لیست تیکت‌ها
        </Typography>
      </Stack>

      <Paper
        variant="outlined"
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: '12px',
          borderColor: 'background.border',
          bgcolor: 'background.paper',
          mb: 3,
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'flex-start' }}
          spacing={2}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h6" fontWeight={700} color="text.title">
              {ticket.title}
            </Typography>
            <Typography variant="body2" color="text.muted" sx={{ mt: 1 }}>
              {ticket.description}
            </Typography>
          </Box>

          {!isClosed && (
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => setCloseDialogOpen(true)}
              sx={{ borderRadius: '8px', whiteSpace: 'nowrap' }}
            >
              بستن تیکت
            </Button>
          )}
        </Stack>

        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <StatusChip status={ticket.status} />
          <PriorityChip priority={ticket.priority} />
          {typeof ticket.category === 'object' && ticket.category && (
            <Chip
              label={ticket.category.name}
              size="small"
              variant="outlined"
              sx={{ borderRadius: '6px' }}
            />
          )}
        </Stack>
      </Paper>

      {/* بدنه پیام‌ها */}
      <Typography variant="subtitle2" color="text.subtitle" sx={{ mb: 1 }}>
        گفتگو
      </Typography>

      <Paper
        variant="outlined"
        sx={{
          borderRadius: '12px',
          borderColor: 'background.border',
          bgcolor: 'background.default',
          p: { xs: 1.5, sm: 2 },
          minHeight: 240,
          maxHeight: 480,
          overflowY: 'auto',
        }}
      >
        {messages.length === 0 ? (
          <Typography variant="body2" color="text.subtitle" sx={{ textAlign: 'center', py: 4 }}>
            هنوز پیامی ثبت نشده است
          </Typography>
        ) : (
          <Stack spacing={1.5}>
            {messages.map((msg) => (
              <Box
                key={msg.id}
                sx={{
                  alignSelf: msg.is_admin ? 'flex-start' : 'flex-end',
                  maxWidth: { xs: '85%', sm: '70%' },
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 1.5,
                    borderRadius: '10px',
                    bgcolor: msg.is_admin ? 'background.paper' : 'primary.light',
                    color: msg.is_admin ? 'text.primary' : '#10100F',
                    border: msg.is_admin ? '1px solid' : 'none',
                    borderColor: 'background.border',
                  }}
                >
                  <Typography variant="body2">{msg.message}</Typography>
                </Paper>
                <Typography
                  variant="caption"
                  color="text.subtitle"
                  sx={{ display: 'block', mt: 0.5, px: 0.5 }}
                >
                  {msg.is_admin ? 'پشتیبانی' : 'شما'} · {formatTime(msg.created_at)}
                </Typography>
              </Box>
            ))}
            <div ref={bottomRef} />
          </Stack>
        )}
      </Paper>

      {/* باکس ارسال پیام */}
      <Divider sx={{ my: 2, borderColor: 'background.border' }} />

      {isClosed ? (
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            p: 2,
            borderRadius: '12px',
            bgcolor: 'background.paper',
            border: '1px dashed',
            borderColor: 'background.border',
          }}
        >
          <LockOutlinedIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
          <Typography variant="body2" color="text.subtitle">
            این تیکت بسته شده و امکان ارسال پیام جدید وجود ندارد
          </Typography>
        </Stack>
      ) : (
        <Stack direction="row" spacing={1} alignItems="flex-end">
          <TextField
            fullWidth
            multiline
            maxRows={4}
            placeholder="پیام خود را بنویسید..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            disabled={sending}
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            disabled={!reply.trim() || sending}
            sx={{
              bgcolor: 'primary.main',
              color: '#10100F',
              borderRadius: '8px',
              '&:hover': { bgcolor: 'primary.light' },
              '&.Mui-disabled': { bgcolor: 'background.paper' },
            }}
          >
            <SendIcon sx={{ transform: 'scaleX(-1)' }} fontSize="small" />
          </IconButton>
        </Stack>
      )}

      {/* دیالوگ تایید بستن تیکت */}
      <Dialog open={closeDialogOpen} onClose={() => setCloseDialogOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>بستن تیکت</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary">
            آیا از بستن این تیکت مطمئن هستید؟ پس از بستن، امکان ارسال پیام جدید وجود نخواهد داشت.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setCloseDialogOpen(false)} color="inherit" disabled={closing}>
            انصراف
          </Button>
          <Button
            onClick={handleClose}
            color="error"
            variant="contained"
            disabled={closing}
            sx={{ borderRadius: '8px' }}
          >
            {closing ? 'در حال بستن...' : 'بستن تیکت'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
