'use client';

import * as React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface GuaranteeNoticeProps {
  hasEnoughGold?: boolean;
  hasEnoughToman?: boolean;
}

export default function GuaranteeNotice({
  hasEnoughGold = true,
  hasEnoughToman = true,
}: GuaranteeNoticeProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const hasError = !hasEnoughGold || !hasEnoughToman;

  // تعیین استایل‌ها بر اساس وضعیت خطا
  const borderColor = hasError
    ? theme.palette.error.main
    : isDark
    ? 'rgba(109, 169, 225, 0.15)'
    : 'rgba(109, 169, 225, 0.2)';

  const bgColor = hasError
    ? isDark
      ? 'rgba(211, 47, 47, 0.08)'
      : 'rgba(211, 47, 47, 0.04)'
    : isDark
    ? 'rgba(109, 169, 225, 0.02)'
    : 'rgba(109, 169, 225, 0.04)';

  const iconColor = hasError ? theme.palette.error.main : theme.palette.secondary.main;

  return (
    <Stack direction={'column'} gap={1.5} sx={{ mt: 2 }}>
      {/* هشدار/خطای عدم موجودی کافی */}
      {hasError ? (
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="flex-start"
          sx={{
            p: 2,
            borderRadius: 3,
            border: `1px solid ${borderColor}`,
            bgcolor: bgColor,
            transition: 'all 0.3s ease',
          }}
        >
          <ErrorOutlineIcon sx={{ fontSize: 20, color: iconColor, mt: 0.2 }} />
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.error.main,
                display: 'block',
                lineHeight: 1.6,
                fontWeight: 700,
                textAlign: 'justify',
              }}
            >
              {!hasEnoughGold && !hasEnoughToman
                ? 'موجودی طلا و موجودی تومانی شما برای پرداخت کارمزد کافی نیست.'
                : !hasEnoughGold
                ? 'موجودی طلای قابل دسترس شما کمتر از وزن انتخابی است.'
                : 'موجودی تومانی شما جهت پرداخت کارمزد این طرح کافی نیست.'}
            </Typography>
          </Box>
        </Stack>
      ) : (
        /* پیام راهنمای عادی */
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="flex-start"
          sx={{
            p: 2,
            borderRadius: 3,
            border: `1px solid ${borderColor}`,
            bgcolor: bgColor,
            transition: 'all 0.3s ease',
          }}
        >
          <InfoOutlinedIcon sx={{ fontSize: 18, color: iconColor, mt: 0.2 }} />
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.secondary,
                display: 'block',
                lineHeight: 1.6,
                fontWeight: 500,
                textAlign: 'justify',
              }}
            >
              محاسبه قیمت مبنای تضمین بر اساس قیمت لحظه‌ای طلا در زمان ثبت انجام می‌شود. کارمزد از کیف پول تومانی کسر شده و طلای تضمین‌شده تا انقضای دوره بلوکه خواهد شد.
            </Typography>
          </Box>
        </Stack>
      )}
    </Stack>
  );
}