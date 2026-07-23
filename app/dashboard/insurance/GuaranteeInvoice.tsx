'use client';

import * as React from 'react';
import { Box, Stack, Typography, Divider, Skeleton, useTheme } from '@mui/material';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ShieldMoonRoundedIcon from '@mui/icons-material/ShieldMoonRounded';
import priceFormatter from '@/app/core/PriceFormater';
import { GuaranteePlan } from '@/app/core/Types';

interface Props {
  accessibleGold: number;
  accessibleToman: number;
  goldPrice: number;
  selectedPlan: GuaranteePlan | undefined;
  goldWeightNum: number;
  loading: boolean;
}

const fa = (n: number) => n.toLocaleString('fa-IR');

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

  // محاسبات مقادیر فاکتور
  const guaranteedPriceTotal = goldPrice * goldWeightNum;
  const feePercent = selectedPlan ? parseFloat(selectedPlan.service_fee_percent) : 0;
  const serviceFeeTotal = (guaranteedPriceTotal * feePercent) / 100;

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
      label: 'قیمت لحظه‌ای طلا (۱۸ عیار)',
      value: `${priceFormatter(goldPrice)} تومان`,
      icon: <AccountBalanceWalletRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />,
    },
    {
      label: 'ارزش کل طلای انتخابی',
      value: `${priceFormatter(guaranteedPriceTotal)} تومان`,
      icon: <ShieldMoonRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />,
    },
    {
      label: `هزینه کارمزد (${selectedPlan?.service_fee_percent || 0}٪)`,
      value: `${priceFormatter(serviceFeeTotal)} تومان`,
      icon: <AccountBalanceWalletRoundedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main }} />,
    },
  ];

  return (
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
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)',
            borderBottom: index < rows.length - 1 ? `1px solid ${theme.palette.background.border}` : 'none',
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            {row.icon}
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 600 }}>
              {row.label}
            </Typography>
          </Stack>
          <Typography variant="body2" fontWeight={700} sx={{ color: theme.palette.text.title }}>
            {loading ? <Skeleton width={70} /> : row.value}
          </Typography>
        </Box>
      ))}

      <Divider sx={{ borderColor: theme.palette.background.border }} />

      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: isDark ? 'rgba(252, 213, 53, 0.05)' : 'rgba(252, 213, 53, 0.1)',
        }}
      >
        <Typography variant="body2" fontWeight={700} sx={{ color: theme.palette.text.primary }}>
          کارمزد قابل پرداخت
        </Typography>
        <Typography variant="subtitle1" fontWeight={900} sx={{ color: theme.palette.primary.main }}>
          {loading ? <Skeleton width={90} /> : `${priceFormatter(serviceFeeTotal)} تومان`}
        </Typography>
      </Box>
    </Box>
  );
}