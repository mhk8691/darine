'use client';

import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Grid,
  Skeleton,
  Divider,
  Alert,
  IconButton,
  useTheme,
} from '@mui/material';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import GuaranteeStatusChip from './GuaranteeStatusChip';
import { guaranteeService } from '@/lib/guaranteeService/guaranteeService';
import { UserGuaranteeDetail, UserGuaranteeListItem } from '@/app/core/Types';
import CustomModal from '@/app/Components/CustomModal/CustomModal';
import priceFormatter from '@/app/core/PriceFormater';
import { formatDate } from '@/app/core/FormatDate';

export interface UserGuaranteesListRef {
  refreshList: () => void;
}

const UserGuaranteesList = React.forwardRef<UserGuaranteesListRef>((_, ref) => {
  const theme = useTheme();
  const [guarantees, setGuarantees] = React.useState<UserGuaranteeListItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedId, setSelectedId] = React.useState<number | null>(null);
  const [detail, setDetail] = React.useState<UserGuaranteeDetail | null>(null);
  const [detailLoading, setDetailLoading] = React.useState(false);
  const [actionLoading, setActionLoading] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [feedback, setFeedback] = React.useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // دریافت لیست
  const fetchGuarantees = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await guaranteeService.getUserGuarantees();
      setGuarantees(res.data);
    } catch {
      // Handle error
    } finally {
      setLoading(false);
    }
  }, []);

  // ارائه تابع ریفرش برای کامپوننت پدر
  React.useImperativeHandle(ref, () => ({
    refreshList: () => {
      fetchGuarantees();
    },
  }));

  React.useEffect(() => {
    fetchGuarantees();
  }, [fetchGuarantees]);

  // باز کردن مدال جزئیات
  const handleOpenDetail = async (id: number) => {
    setSelectedId(id);
    setModalOpen(true);
    setDetailLoading(true);
    setFeedback(null);
    try {
      const res = await guaranteeService.getGuaranteeDetail(id);
      setDetail(res.data);
    } catch {
      setFeedback({ type: 'error', message: 'خطا در دریافت جزئیات طرح' });
    } finally {
      setDetailLoading(false);
    }
  };

  // اکشن لغو طرح
  const handleCancel = async () => {
    if (!selectedId) return;
    setActionLoading(true);
    setFeedback(null);
    try {
      const res = await guaranteeService.cancelGuarantee(selectedId);
      setFeedback({ type: 'success', message: res.message });
      fetchGuarantees();
      if (detail) {
        setDetail({
          ...detail,
          status: res.data.status,
          status_display: res.data.status_display,
          can_cancel: res.data.can_cancel,
          can_execute: res.data.can_execute,
        });
      }
    } catch (err: any) {
      setFeedback({
        type: 'error',
        message: err?.response?.data?.message || 'خطا در لغو طرح تضمین',
      });
    } finally {
      setActionLoading(false);
    }
  };

  // اکشن اجرای طرح
  const handleExecute = async () => {
    if (!selectedId) return;
    setActionLoading(true);
    setFeedback(null);
    try {
      const res = await guaranteeService.executeGuarantee(selectedId);
      setFeedback({ type: 'success', message: res.message });
      fetchGuarantees();
      if (detail) {
        setDetail({
          ...detail,
          status: res.data.status,
          status_display: res.data.status_display,
          can_cancel: res.data.can_cancel,
          can_execute: res.data.can_execute,
        });
      }
    } catch (err: any) {
      setFeedback({
        type: 'error',
        message: err?.response?.data?.message || 'خطا در اجرای طرح تضمین',
      });
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <Grid container spacing={2}>
        {[1, 2].map((i) => (
          <Grid key={i} size={{ xs: 12, md: 6 }}>
            <Skeleton variant="rounded" height={160} sx={{ borderRadius: 3 }} />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (guarantees.length === 0) {
    return (
      <Box textAlign="center" py={5}>
        <ShieldRoundedIcon sx={{ fontSize: 48, color: 'text.disabled', mb: 1 }} />
        <Typography variant="body1" color="text.secondary">
          شما در حال حاضر هیچ طرح تضمین فعالی ندارید.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Grid container spacing={2}>
        {guarantees.map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 6 }}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: 3,
                borderColor: theme.palette.background.border,
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                },
              }}
            >
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1.5}>
                  <Typography variant="subtitle1" fontWeight={800}>
                    {item.plan_name}
                  </Typography>
                  <GuaranteeStatusChip status={item.status} label={item.status_display} />
                </Stack>

                <Stack spacing={1} mb={2}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="caption" color="text.secondary">
                      وزن طلا:
                    </Typography>
                    <Typography variant="body2" fontWeight={700}>
                      {item.gold_weight} گرم
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="caption" color="text.secondary">
                      قیمت تضمین‌شده:
                    </Typography>
                    <Typography variant="body2" fontWeight={700}>
                      {priceFormatter(item.guaranteed_price)} تومان
                    </Typography>
                  </Stack>
              
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="caption" color="text.secondary">
                      تاریخ سررسید:
                    </Typography>
                    <Typography variant="body2">
                      {item.end_date_shamsi} ({item.days_remaining} روز باقی‌مانده)
                    </Typography>
                  </Stack>
                </Stack>

                <Button
                  variant="outlined"
                  fullWidth
                  size="small"
                  onClick={() => handleOpenDetail(item.id)}
                  sx={{ borderRadius: 2 }}
                >
                  مشاهده جزئیات و مدیریت
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* مدال اختصاصی جزئیات و اکشن‌ها */}
      <CustomModal open={modalOpen} setOpen={setModalOpen}>
        <Box sx={{ p: 2 }}>
          {/* هدر مدال */}
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" fontWeight={800}>
              {detailLoading ? <Skeleton width={140} /> : detail?.plan_name}
            </Typography>
            <IconButton size="small" onClick={() => setModalOpen(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Stack>

          <Divider sx={{ mb: 2 }} />

          {/* پیغام بازخورد */}
          {feedback && (
            <Alert severity={feedback.type} sx={{ mb: 2, borderRadius: 2 }}>
              {feedback.message}
            </Alert>
          )}

          {/* محتوای جزئیات */}
          {detailLoading ? (
            <Stack spacing={1.5} my={2}>
              <Skeleton height={24} />
              <Skeleton height={24} />
              <Skeleton height={24} />
            </Stack>
          ) : detail ? (
            <Stack spacing={1.5} mb={3}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="body2" color="text.secondary">
                  وضعیت:
                </Typography>
                <GuaranteeStatusChip status={detail.status} label={detail.status_display} />
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">
                  وزن طلا:
                </Typography>
                <Typography variant="body2" fontWeight={700}>
                  {detail.gold_weight} گرم
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">
                  قیمت تضمین‌شده:
                </Typography>
                <Typography variant="body2" fontWeight={700}>
                  {priceFormatter(detail.guaranteed_price)} تومان
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">
                  کارمزد پرداخت‌شده:
                </Typography>
                <Typography variant="body2">
                  {priceFormatter(detail.service_fee)} تومان
                </Typography>
              </Stack>
                   <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary">
                قیمت سررسید:
                    </Typography>
                    <Typography variant="body2" fontWeight={700}>
                      {priceFormatter(detail.executed_price)} تومان
                    </Typography>
                  </Stack>
               
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary">
               مبلغ پرداخت شده:
                    </Typography>
                    <Typography variant="body2" fontWeight={700}>
                      {priceFormatter(detail.user_payout)} تومان
                    </Typography>
                  </Stack>
               <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">
                 تاریخ شروع:
                </Typography>
                <Typography variant="body2">
                  {formatDate(detail.start_date)} 
                </Typography>
              </Stack>
                <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">
                 تاریخ سررسید:
                </Typography>
                <Typography variant="body2">
                  {formatDate(detail.end_date)} 
                </Typography>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">
                  روزهای باقی‌مانده:
                </Typography>
                <Typography variant="body2" fontWeight={700}>
                  {detail.days_remaining} روز
                </Typography>
              </Stack>
              <Typography variant="body2" color="info">
                توجه: در صورت لغو طرح تضمین، کارمزد پرداختی شما بابت طرح تضمین قابل استرداد نیست.
              </Typography>
            </Stack>
          ) : null}

          {/* دکمه‌های اکشن */}
          <Stack direction="row" spacing={1} justifyContent="flex-end" pt={1}>
            {detail?.can_cancel && (
              <Button
                variant="outlined"
                color="error"
                startIcon={<CancelOutlinedIcon />}
                onClick={handleCancel}
                disabled={actionLoading}
                fullWidth
              >
                لغو طرح
              </Button>
            )}

            {detail?.can_execute && (
              <Button
                variant="contained"
                color="primary"
                startIcon={<PlayCircleOutlineRoundedIcon />}
                onClick={handleExecute}
                disabled={actionLoading}
                fullWidth
              >
                اجرای طرح
              </Button>
            )}

            <Button
              variant="text"
              color="inherit"
              onClick={() => setModalOpen(false)}
              sx={{ minWidth: 80 }}
            >
              بستن
            </Button>
          </Stack>
        </Box>
      </CustomModal>
    </Box>
  );
});

UserGuaranteesList.displayName = 'UserGuaranteesList';

export default UserGuaranteesList;