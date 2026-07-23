'use client';

import * as React from 'react';
import {
  Box,
  Stack,
  Typography,
  Divider,
  Skeleton,
  IconButton,
  Button,
  useTheme,
} from '@mui/material';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ShieldMoonRoundedIcon from '@mui/icons-material/ShieldMoonRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import priceFormatter from '@/app/core/PriceFormater';
import { GuaranteePlan } from '@/app/core/Types';
import CustomModal from '@/app/Components/CustomModal/CustomModal';

interface Props {
  accessibleGold: number;
  accessibleToman: number;
  goldPrice: number;
  selectedPlan: GuaranteePlan | undefined;
  goldWeightNum: number;
  loading: boolean;
}

const fa = (n: number) => n.toLocaleString('fa-IR');

// تابع محاسبه تاریخ سررسید به شمسی
const calculateDueDate = (days: number): string => {
  if (!days) return '---';

  const today = new Date();
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + days);

  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(targetDate);
};

export default function GuaranteeInvoice({
  accessibleGold,
  accessibleToman,
  goldPrice,
  selectedPlan,
  goldWeightNum,
  loading,
}: Props) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // استیت‌های مربوط به مودال راهنما
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [modalData, setModalData] = React.useState<{ title: string; text: string }>({
    title: '',
    text: '',
  });

  const guaranteedPriceTotal = goldPrice * goldWeightNum;
  const feePercent = selectedPlan ? parseFloat(selectedPlan.service_fee_percent) : 0;
  const serviceFeeTotal = Math.floor((guaranteedPriceTotal * feePercent) / 100);

  const dueDateFormatted = React.useMemo(() => {
    return selectedPlan ? calculateDueDate(selectedPlan.duration_days) : '---';
  }, [selectedPlan]);

  // متون راهنما
  const helpTexts = {
    goldPrice: {
      title: 'راهنمای قیمت لحظه‌ای طلا',
      text: 'قیمت تضمین طلا همان قیمت لحظه ای طلاست. در زمان فعال‌سازی طرح، قیمت لحظه‌ای طلا ثبت می‌شود و مبنای محاسبه قرار می‌گیرد. اگر در روز سررسید قیمت طلا پایین‌تر از این قیمت باشد، اختلاف آن به‌صورت تومانی به شما پرداخت می‌شود.',
    },
    serviceFee: {
      title: 'راهنمای هزینه طرح تضمین طلا',
      text: 'هزینه طرح تضمین طلا مبلغی است که شما برای فعال‌سازی طرح تضمین قیمت پرداخت می‌کنید تا بتوانید از خدمت تضمین قیمت طلا در دارینه استفاده کرده و از ارزش طلای خود در برابر کاهش قیمت بازار محافظت کنید.',
    },
  };

  const handleOpenHelp = (type: 'goldPrice' | 'serviceFee') => {
    setModalData(helpTexts[type]);
    setModalOpen(true);
  };

  const rows = [
    {
      label: 'موجودی طلای شما',
      value: `${fa(accessibleGold)} گرم`,
      icon: <AccountBalanceWalletRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />,
    },
    {
      label: 'موجودی کیف پول تومان',
      value: `${priceFormatter(accessibleToman)} تومان`,
      icon: <AccountBalanceWalletRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />,
    },
    {
      label: 'قیمت لحظه‌ای طلا',
      value: `${priceFormatter(goldPrice)} تومان`,
      icon: <AccountBalanceWalletRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />,
      hasInfo: true,
      onInfoClick: () => handleOpenHelp('goldPrice'),
    },

    {
      label: 'تاریخ سررسید',
      value: dueDateFormatted,
      icon: <EventAvailableRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />,
    },
    {
      label: `هزینه طرح تضمین طلا`,
      value: `${priceFormatter(serviceFeeTotal)} تومان`,
      icon: <AccountBalanceWalletRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />,
      hasInfo: true,
      onInfoClick: () => handleOpenHelp('serviceFee'),
    },
  ];

  return (
    <>
      <Box
        sx={{
          bgcolor: isDark ? '#10100F' : '#FFFFFF',
          borderRadius: 4,
          border: `1px solid ${theme.palette.background.border}`,
          overflow: 'hidden',
          mb: 3,
        }}
      >
        {rows.map((row, index) => (
          <Box
            key={index}
            sx={{
              px: { xs: 1.5, sm: 2 },
              py: { xs: 1.25, sm: 2 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              bgcolor: isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)',
              borderBottom: index < rows.length - 1 ? `1px solid ${theme.palette.background.border}` : 'none',
            }}
          >
            <Stack direction="row" spacing={{ xs: 0.5, sm: 1 }} alignItems="center">
              {/* آیکون اصلی: مخفی در موبایل */}
              <Box sx={{ display: { xs: 'none', sm: 'inline-flex' }, alignItems: 'center' }}>
                {row.icon}
              </Box>

              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: 600,
                  fontSize: { xs: '0.72rem', sm: '0.75rem' }, // فونت کوچکتر در موبایل
                  whiteSpace: 'nowrap',
                }}
              >
                {row.label}
              </Typography>

              {row.hasInfo && (
                <IconButton
                  size="small"
                  onClick={row.onInfoClick}
                  sx={{
                    p: 0.2,
                    color: theme.palette.primary.main,
                    '&:hover': { bgcolor: 'rgba(252, 213, 53, 0.1)' },
                  }}
                >
                  <InfoRoundedIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
                </IconButton>
              )}
            </Stack>

            <Typography
              variant="body2"
              fontWeight={700}
              sx={{
                color: theme.palette.text.title,
                fontSize: { xs: '0.75rem', sm: '0.875rem' }, // فونت کوچکتر برای مقادیر و قیمت‌ها
                whiteSpace: 'nowrap',
              }}
            >
              {loading ? <Skeleton width={60} /> : row.value}
            </Typography>
          </Box>
        ))}

        <Divider sx={{ borderColor: theme.palette.background.border }} />

        <Box
          sx={{
            px: { xs: 1.5, sm: 2 },
            py: { xs: 1.5, sm: 2 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: isDark ? 'rgba(252, 213, 53, 0.05)' : 'rgba(252, 213, 53, 0.1)',
          }}
        >
          <Typography
            variant="body2"
            fontWeight={700}
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              whiteSpace: 'nowrap',
            }}
          >
            کارمزد قابل پرداخت
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={900}
            sx={{
              color: theme.palette.primary.main,
              fontSize: { xs: '0.85rem', sm: '1rem' }, // فونت فشرده‌تر برای کارمزد نهایی
              whiteSpace: 'nowrap',
            }}
          >
            {loading ? <Skeleton width={80} /> : `${priceFormatter(serviceFeeTotal)} تومان`}
          </Typography>
        </Box>
      </Box>

      {/* مودال راهنما */}
      <CustomModal
        open={modalOpen}
        setOpen={setModalOpen}
        modalStyle={{
          maxWidth: '90vw',
          width: 440,
          p: 3,
          bgcolor: isDark ? '#1C1C1A' : '#FFFFFF',
          borderRadius: 4,
          border: `1px solid ${theme.palette.background.border}`,
        }}
      >
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <InfoRoundedIcon sx={{ color: theme.palette.primary.main }} />
              <Typography variant="subtitle1" fontWeight={800} sx={{ color: theme.palette.text.title }}>
                {modalData.title}
              </Typography>
            </Stack>
            <IconButton size="small" onClick={() => setModalOpen(false)}>
              <CloseRoundedIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.8,
              textAlign: 'justify',
              mb: 3,
            }}
          >
            {modalData.text}
          </Typography>

          <Button
            fullWidth
            variant="contained"
            onClick={() => setModalOpen(false)}
            sx={{
              borderRadius: 2.5,
              fontWeight: 700,
              bgcolor: theme.palette.primary.main,
              color: '#10100F',
              '&:hover': {
                bgcolor: theme.palette.primary.light,
              },
            }}
          >
            متوجه شدم
          </Button>
        </Box>
      </CustomModal>
    </>
  );
}