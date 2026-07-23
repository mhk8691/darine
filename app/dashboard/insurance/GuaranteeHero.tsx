'use client';

import * as React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import ShieldMoonRoundedIcon from '@mui/icons-material/ShieldMoonRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function GuaranteeHero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        flex: { md: '0 0 280px', lg: '0 0 320px' },
        px: { xs: 2.5, sm: 3, md: 3.5 },
        pt: { xs: 2.5, md: 4 },
        pb: { xs: 2.5, md: 4 },
        // 👈 خط عمودی جداکننده که حالا تمام ارتفاع کانتینر را می‌پوشاند
        borderInlineEnd: { md: `1px solid ${theme.palette.background.border}` },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Stack
        alignItems={{ xs: 'center', md: 'flex-start' }}
        textAlign={{ xs: 'center', md: 'left' }}
      >
        <Box
          sx={{
            width: { xs: 56, sm: 64, md: 72 },
            height: { xs: 56, sm: 64, md: 72 },
            borderRadius: 4,
            background: isDark
              ? 'linear-gradient(135deg, rgba(252, 213, 53, 0.15) 0%, rgba(252, 213, 53, 0.02) 100%)'
              : 'linear-gradient(135deg, #FDE378 0%, #FCD535 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
            boxShadow: isDark ? 'none' : '0 8px 20px rgba(252, 213, 53, 0.3)',
            border: isDark ? '1px solid rgba(252, 213, 53, 0.2)' : 'none',
          }}
        >
          <ShieldMoonRoundedIcon
            sx={{
              fontSize: { xs: 28, sm: 32, md: 36 },
              color: isDark ? theme.palette.primary.main : '#10100F',
            }}
          />
        </Box>
        <Typography
          variant="h5"
          fontWeight={800}
          sx={{
            color: theme.palette.text.title,
            letterSpacing: '-0.5px',
            mb: 1,
            fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.6rem' },
          }}
        >
          تضمین قیمت دارینه
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.subtitle,
            lineHeight: 1.8,
            maxWidth: { xs: 360, md: '100%' },
          }}
        >
          با فعال‌سازی این طرح، نوسانات منفی بازار طلا در روز سررسید کاملاً جبران شده و دارینه خسارت شما را پرداخت می‌کند.
        </Typography>

        <Stack spacing={1.5} sx={{ display: { xs: 'none', md: 'flex' }, mt: 3, width: '100%' }}>
          {[
            'پوشش کامل افت قیمت طلا در سررسید',
            'واریز خسارت به کیف پول پس از تایید',
            'آزادسازی خودکار طلا در پایان دوره',
          ].map((item) => (
            <Stack key={item} direction="row" spacing={1} alignItems="flex-start">
              <CheckCircleRoundedIcon
                sx={{
                  fontSize: 18,
                  color: theme.palette.primary.main,
                  mt: 0.2,
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: 500,
                  lineHeight: 1.7,
                }}
              >
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}