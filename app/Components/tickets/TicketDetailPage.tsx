'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container as MuiContainer,
  Typography,
  Stack,
  Paper,
  TextField,
  IconButton,
  Button,
  Skeleton,
  Avatar,
} from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import { PriorityChip, StatusChip } from './TicketChips';
import AttachmentPicker from './AttachmentPicker';
import { TicketMessageType, TicketType } from '@/app/core/Types';
import { closeTicket, getTicket, getTicketMessages, sendTicketMessage } from '@/lib/tickets/tickets';
import Container from '../Containers/Container/Container';
import CustomModal from '../CustomModal/CustomModal';

function formatTime(iso?: string) {
  if (!iso) return '';
  try {
    return new Intl.DateTimeFormat('fa-IR', {
      hour: '2-digit',
      minute: '2-digit',
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
  const [replyAttachment, setReplyAttachment] = useState<File | null>(null);
  const [sending, setSending] = useState(false);

  const [closeDialogOpen, setCloseDialogOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  // رفرنس کانتینر چت برای اسکرول داخلی دقیق
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = (smooth = true) => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: smooth ? 'smooth' : 'auto',
      });
    }
  };

  const loadData = useCallback(async () => {
    setLoading(true);
    const [ticketData, messagesData] = await Promise.all([
      getTicket(ticketId),
      getTicketMessages(ticketId),
    ]);
    setTicket(ticketData ?? null);
    
    const finalMessages = messagesData ?? ticketData?.messages ?? [];
    setMessages(finalMessages);
    setLoading(false);
  }, [ticketId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // اسکرول هوشمند فقط درون باکس پیام‌ها
  useEffect(() => {
    if (!loading && messages.length > 0) {
      scrollToBottom(true);
    }
  }, [messages.length, loading]);

  const isClosed = ticket?.status === 'closed' || ticket?.status === 'resolved';

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
      <MuiContainer maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
        <Skeleton variant="rounded" height={70} sx={{ borderRadius: '16px', mb: 2 }} />
        <Skeleton variant="rounded" height={480} sx={{ borderRadius: '16px' }} />
      </MuiContainer>
    );
  }

  if (!ticket) {
    return (
      <MuiContainer maxWidth="md" sx={{ py: 5, textAlign: 'center' }}>
        <Typography color="text.secondary" variant="h6">تیکت مورد نظر یافت نشد</Typography>
        <Button variant="contained" sx={{ mt: 2, borderRadius: '10px' }} onClick={() => router.push('/tickets')}>
          بازگشت به تیکت‌ها
        </Button>
      </MuiContainer>
    );
  }

  return (
    <Container
      style={{
        px: { xs: 0, sm: 4 },
        border: { xs: 0, sm: 1 },
        borderColor: { sm: 'background.paper' },
      }}
    >
      {/* Container اصلی چت به سبک پیام‌رسان */}
      <Paper
        elevation={3}
        sx={{
          borderRadius: { xs: '12px', sm: '20px' },
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: { xs: '85vh', sm: '80vh' },
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        {/* ۱. هدر چت (Chat Header - ریسپانسیو بدون غیب شدن هیچ متنی) */}
        <Box
          sx={{
            p: { xs: 1.25, sm: 2 },
            bgcolor: 'background.paper',
            borderBottom: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'stretch', sm: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 1.25, sm: 2 },
            zIndex: 2,
          }}
        >
          {/* بخش راست: دکمه بازگشت، آواتار و مشخصات تیکت (بدون محدودیت طول متن) */}
          <Stack
            direction="row"
            alignItems="flex-start"
            spacing={{ xs: 1, sm: 1.5 }}
            sx={{ width: '100%', minWidth: 0, flex: 1 }}
          >
            <IconButton
              onClick={() => router.push('/dashboard/tickets')}
              size="small"
              edge="start"
              sx={{
                p: { xs: 0.75, sm: 1 },
                bgcolor: 'action.hover',
                flexShrink: 0,
                mt: 0.25,
                '&:hover': { bgcolor: 'action.selected' },
              }}
            >
              <ArrowForwardIcon fontSize="small" />
            </IconButton>

            <Avatar
              sx={{
                width: { xs: 36, sm: 44 },
                height: { xs: 36, sm: 44 },
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                flexShrink: 0,
              }}
            >
              <SupportAgentIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </Avatar>

            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{
                  fontSize: { xs: '0.85rem', sm: '0.95rem' },
                  lineHeight: 1.35,
                  color: 'text.primary',
                  wordBreak: 'break-word',
                }}
              >
                {ticket.title}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  fontSize: { xs: '0.725rem', sm: '0.75rem' },
                  mt: 0.4,
                  display: 'block',
                  wordBreak: 'break-all',
                }}
              >
                کد رهگیری: {ticket.tracking_code}
              </Typography>
            </Box>
          </Stack>

          {/* بخش چپ: وضعیت، اولویت و دکمه بستن (چیدمان بهینه در موبایل) */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: 'space-between', sm: 'flex-end' }}
            spacing={1}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              flexShrink: 0,
              pt: { xs: 0.75, sm: 0 },
              borderTop: { xs: '1px dashed', sm: 'none' },
              borderColor: { xs: 'divider' },
            }}
          >
            <Stack direction="row" spacing={0.75} alignItems="center" sx={{ flex: 1 }}>
              <StatusChip status={ticket.status} />
              <PriorityChip priority={ticket.priority} />
            </Stack>

            {!isClosed && ticket.can_close !== false && (
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => setCloseDialogOpen(true)}
                startIcon={<CancelOutlinedIcon fontSize="small" />}
                sx={{
                  borderRadius: '8px',
                  whiteSpace: 'nowrap',
                  px: 1.25,
                  py: 0.4,
                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                  flexShrink: 0,
                }}
              >
                بستن تیکت
              </Button>
            )}
          </Stack>
        </Box>

        {/* ۲. بدنه گفتگو (Chat Messages List) */}
        <Box
          ref={chatContainerRef}
          sx={{
            flex: 1,
            p: { xs: 1.5, sm: 2.5 },
            overflowY: 'auto',
            bgcolor: (theme) =>
              theme.palette.mode === 'dark' ? '#0f172a' : '#f1f5f9',
            backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 0)`,
            backgroundSize: '16px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          {messages.length === 0 ? (
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', my: 'auto' }}>
              هیچ پیامی ارسال نشده است. اولین پیام را شما بفرستید!
            </Typography>
          ) : (
            messages.map((msg) => {
              const isMe = !msg.is_admin;
              return (
                <Box
                  key={msg.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isMe ? 'flex-end' : 'flex-start',
                  }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 1.5,
                      px: 2,
                      maxWidth: { xs: '88%', sm: '65%' },
                      borderRadius: isMe
                        ? '16px 16px 2px 16px'
                        : '16px 16px 16px 2px',
                      bgcolor: isMe ? 'primary.main' : 'background.paper',
                      color: isMe ? 'primary.contrastText' : 'text.primary',
                      position: 'relative',
                      wordBreak: 'break-word',
                    }}
                  >
                    {!isMe && (
                      <Typography
                        variant="caption"
                        fontWeight={700}
                        color="primary.main"
                        sx={{ display: 'block', mb: 0.5 }}
                      >
                        {msg.user_name || 'پشتیبانی'} (پشتیبان پلتفرم)
                      </Typography>
                    )}

                    {msg.message && (
                      <Typography variant="body2" sx={{ lineHeight: 1.6, whitespace: 'pre-line' }}>
                        {msg.message}
                      </Typography>
                    )}

                    {/* فایل پیوست */}
                    {msg.attachment_url && (
                      <Paper
                        variant="outlined"
                        component="a"
                        href={msg.attachment_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mt: msg.message ? 1 : 0,
                          p: 1,
                          borderRadius: '8px',
                          bgcolor: isMe ? 'rgba(255,255,255,0.15)' : 'action.hover',
                          color: 'inherit',
                          textDecoration: 'none',
                          transition: '0.2s',
                          '&:hover': { opacity: 0.8 },
                        }}
                      >
                        <InsertDriveFileOutlinedIcon fontSize="small" />
                        <Typography variant="caption" noWrap sx={{ maxWidth: 180 }}>
                          {msg.attachment_name || 'دانلود فایل پیوست'}
                        </Typography>
                      </Paper>
                    )}

                    {/* زمان و آیکون تیک */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: 0.5,
                        mt: 0.5,
                        opacity: 0.75,
                      }}
                    >
                      <Typography variant="caption" sx={{ fontSize: '0.68rem' }}>
                        {formatTime((msg as any).created_at)}
                      </Typography>
                      {isMe && <DoneAllIcon sx={{ fontSize: 14 }} />}
                    </Box>
                  </Paper>
                </Box>
              );
            })
          )}
        </Box>

        {/* ۳. بخش ارسال پیام (Input Area) */}
        <Box
          sx={{
            p: 1.5,
            bgcolor: 'background.paper',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          {isClosed ? (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
              sx={{ py: 1, color: 'text.secondary' }}
            >
              <LockOutlinedIcon fontSize="small" />
              <Typography variant="body2">
                این تیکت بسته شده است و امکان ارسال پیام جدید وجود ندارد.
              </Typography>
            </Stack>
          ) : (
            <Stack spacing={1}>
              {/* نمایش فایل پیوست پیش از ارسال */}
              {replyAttachment && (
                <Box sx={{ px: 1 }}>
                  <AttachmentPicker
                    file={replyAttachment}
                    onChange={setReplyAttachment}
                    disabled={sending}
                  />
                </Box>
              )}

              <Stack direction="row" spacing={1} alignItems="center">
                {/* دکمه پیوست فایل */}
                {!replyAttachment && (
                  <AttachmentPicker
                    file={replyAttachment}
                    onChange={setReplyAttachment}
                    disabled={sending}
                  />
                )}

                {/* ورودی متن */}
                <TextField
                  fullWidth
                  multiline
                  maxRows={4}
                  size="small"
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
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '24px',
                      bgcolor: 'action.hover',
                      '& fieldset': { borderColor: 'transparent' },
                      '&:hover fieldset': { borderColor: 'divider' },
                      '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                    },
                  }}
                />

                {/* دکمه ارسال دایره‌ای */}
                <IconButton
                  color="primary"
                  onClick={handleSend}
                  disabled={(!reply.trim() && !replyAttachment) || sending}
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    boxShadow: 2,
                    '&:hover': { bgcolor: 'primary.dark' },
                    '&.Mui-disabled': { bgcolor: 'action.disabledBackground' },
                  }}
                >
                  <SendRoundedIcon sx={{ transform: 'scaleX(-1)', fontSize: 20 }} />
                </IconButton>
              </Stack>
            </Stack>
          )}
        </Box>
      </Paper>

      {/* کاستوم مودال بستن تیکت */}
      <CustomModal open={closeDialogOpen} setOpen={setCloseDialogOpen}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <Typography variant="h6" fontWeight={700}>
            بستن تیکت
          </Typography>
          <Typography variant="body2" color="text.secondary">
            آیا از بستن این تیکت مطمئن هستید؟ پس از بستن، امکان ارسال پیام جدید وجود نخواهد داشت.
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ mt: 2 }}>
            <Button
              onClick={() => setCloseDialogOpen(false)}
              color="inherit"
              disabled={closing}
              sx={{ borderRadius: '8px' }}
            >
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
          </Stack>
        </Stack>
      </CustomModal>
    </Container>
  );
}