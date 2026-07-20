'use client';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Button,
  Badge,
  Skeleton,
  Fab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
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
      <Container
          style={{
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
          }}
        >
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
        <Grid container spacing={2}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Grid size={{xs:12,sm:6,lg:4}}  key={i}>
              <Skeleton variant="rounded" height={140} sx={{ borderRadius: '12px' }} />
            </Grid>
          ))}
        </Grid>
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
        <Grid container spacing={2}>
          {tickets.map((ticket) => (
            <Grid size={{xs:12,sm:6,lg:4}} key={ticket.id}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: '12px',
                  borderColor: 'background.border',
                  bgcolor: 'background.paper',
                  height: '100%',
                }}
              >
                <CardActionArea
                  onClick={() => router.push(`/dashboard/tickets/${ticket.id}`)}
                  sx={{ height: '100%', p: 0.5 }}
                >
                  <CardContent>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      spacing={1}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={700}
                        color="text.title"
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: 'vertical',
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
                        mt: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        minHeight: '2.6em',
                      }}
                    >
                      {ticket.description}
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                      <StatusChip status={ticket.status} />
                      <PriorityChip priority={ticket.priority} />
                    </Stack>

                    <Typography variant="caption" color="text.subtitle" sx={{ mt: 1.5, display: 'block' }}>
                      {formatDate(ticket.created_at)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
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
