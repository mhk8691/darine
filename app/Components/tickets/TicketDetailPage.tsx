'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
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
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { PriorityChip, StatusChip } from './TicketChips';
import AttachmentPicker from './AttachmentPicker';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { TicketMessageType, TicketType } from '@/app/core/Types';
import { closeTicket, getTicket, getTicketMessages, sendTicketMessage } from '@/lib/tickets/tickets';

interface TicketDetailPageProps {
  ticketId: string;
}

export default function TicketDetailPage({ ticketId }: TicketDetailPageProps) {
  const router = useRouter();
  const [ticket, setTicket] = useState<TicketType | null>(null);
  const [messages, setMessages] = useState<TicketMessageType[]>([]);
  const [loading, setLoading] = useState(true);

  const [reply, setReply] = useState('');
  const [replyAttachment, setReplyAttachment] = useState<File | null>(null);
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
    
    // اگر messages درون ticketData ارائه‌شده بود یا از endpoint پیام‌ها آمد
    const finalMessages = messagesData ?? ticketData?.messages ?? [];
    setMessages(finalMessages);
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
    if ((!reply.trim() && !replyAttachment) || isClosed) return;
    setSending(true);
    const newMessage = await sendTicketMessage(ticketId, {
      message: reply.trim(),
      attachment: replyAttachment,
    });
    setSending(false);

    if (newMessage) {
      setMessages((prev) => [...prev, newMessage]);
      setReply('');
      setReplyAttachment(null);
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
      <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
        <Skeleton variant="text" width={200} height={40} />
        <Skeleton variant="rounded" height={100} sx={{ my: 2, borderRadius: '12px' }} />
        <Skeleton variant="rounded" height={300} sx={{ borderRadius: '12px' }} />
      </Container>
    );
  }

  if (!ticket) {
    return (
      <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
        <Typography color="text.secondary">تیکت یافت نشد</Typography>
        <Button sx={{ mt: 2 }} onClick={() => router.push('/tickets')}>
          بازگشت به لیست تیکت‌ها
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <IconButton onClick={() => router.push('/tickets')} size="small">
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
            <Typography variant="caption" color="text.subtitle" sx={{ display: 'block', mt: 0.5 }}>
              کد رهگیری: {ticket.tracking_code}
            </Typography>
            {ticket.description && (
              <Typography variant="body2" color="text.muted" sx={{ mt: 1 }}>
                {ticket.description}
              </Typography>
            )}
          </Box>

          {!isClosed && ticket.can_close !== false && (
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
          {ticket.category_name && (
            <Chip
              label={ticket.category_name}
              size="small"
              variant="outlined"
              sx={{ borderRadius: '6px' }}
            />
          )}
        </Stack>
      </Paper>

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
                  {msg.message && <Typography variant="body2">{msg.message}</Typography>}
                  {msg.attachment_url && (
                    <Box
                      component="a"
                      href={msg.attachment_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        mt: msg.message ? 1 : 0,
                        color: 'inherit',
                        textDecoration: 'none',
                        opacity: 0.85,
                        '&:hover': { opacity: 1, textDecoration: 'underline' },
                      }}
                    >
                      <InsertDriveFileOutlinedIcon fontSize="small" />
                      <Typography variant="caption">
                        {msg.attachment_name || 'مشاهده فایل پیوست'}
                      </Typography>
                    </Box>
                  )}
                </Paper>
                <Typography
                  variant="caption"
                  color="text.subtitle"
                  sx={{ display: 'block', mt: 0.5, px: 0.5 }}
                >
                  {msg.user_name || (msg.is_admin ? 'پشتیبانی' : 'شما')}
                </Typography>
              </Box>
            ))}
            <div ref={bottomRef} />
          </Stack>
        )}
      </Paper>

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
        <Stack spacing={1}>
          {replyAttachment && (
            <AttachmentPicker
              file={replyAttachment}
              onChange={setReplyAttachment}
              disabled={sending}
            />
          )}
          <Stack direction="row" spacing={1} alignItems="flex-end">
            {!replyAttachment && (
              <AttachmentPicker
                file={replyAttachment}
                onChange={setReplyAttachment}
                disabled={sending}
              />
            )}
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
              disabled={(!reply.trim() && !replyAttachment) || sending}
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
        </Stack>
      )}

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