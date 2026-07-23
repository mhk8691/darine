'use client';

import * as React from 'react';
import { Box, Typography, ToggleButtonGroup, ToggleButton, Skeleton, useTheme } from '@mui/material';
import { GuaranteePlan } from '@/app/core/Types';

interface Props {
  plans: GuaranteePlan[];
  selectedPlanId: number | null;
  onSelectPlan: (planId: number) => void;
  loading: boolean;
}

export default function DurationSelector({
  plans,
  selectedPlanId,
  onSelectPlan,
  loading,
}: Props) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  if (loading) {
    return <Skeleton variant="rounded" height={58} sx={{ borderRadius: 3, mb: 3 }} />;
  }

  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="body2"
        fontWeight={700}
        sx={{ color: theme.palette.text.primary, mb: 1.5, px: 0.5 }}
      >
        ۱. انتخاب دوره تعهد
      </Typography>
      <ToggleButtonGroup
        value={selectedPlanId}
        exclusive
        onChange={(_, value) => {
          if (value !== null) onSelectPlan(value);
        }}
        fullWidth
        sx={{
          bgcolor: isDark ? '#10100F' : '#FFFFFF',
          borderRadius: 3,
          p: 0.5,
          border: `1px solid ${theme.palette.background.border}`,
          '& .MuiToggleButton-root': {
            border: 'none',
            borderRadius: 2.5,
            py: { xs: 0.8, sm: 1.2 },
            px: { xs: 0.5, sm: 1.5 },
            color: theme.palette.text.subtitle,
            fontWeight: 700,
            flex: 1,
            display: 'flex',
            flexDirection: 'column', // 👈 چیدمان عمودی نام و کارمزد برای جلوگیری از شکستن افقی
            gap: 0.2,
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '&.Mui-selected': {
              bgcolor: isDark ? '#292926' : '#EFEEEC',
              color: isDark ? theme.palette.primary.main : '#1C1C1A',
            },
            '&.Mui-selected:hover': {
              bgcolor: isDark ? '#292926' : '#EFEEEC',
            },
          },
        }}
      >
        {plans.map((plan) => (
          <ToggleButton key={plan.id} value={plan.id}>
            <Typography
              component="span"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '0.78rem', sm: '0.9rem' },
                whiteSpace: 'nowrap',
              }}
            >
              {plan.name}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: { xs: '0.65rem', sm: '0.75rem' },
                color: theme.palette.text.subtitle,
                whiteSpace: 'nowrap',
              }}
            >
              کارمزد {plan.service_fee_percent}٪
            </Typography>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}