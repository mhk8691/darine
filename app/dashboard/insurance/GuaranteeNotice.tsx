'use client';

import * as React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function GuaranteeNotice() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Stack
      direction="row"
      spacing={1.5}
      alignItems="flex-start"
      sx={{
        p: 2,
        borderRadius: 3,
        border: `1px solid ${isDark ? 'rgba(109, 169, 225, 0.15)' : 'rgba(109, 169, 225, 0.2)'}`,
        bgcolor: isDark ? 'rgba(109, 169, 225, 0.02)' : 'rgba(109, 169, 225, 0.04)',
      }}
    >
      <InfoOutlinedIcon sx={{ fontSize: 18, color: theme.palette.secondary.main, mt: 0.2 }} />
      <Box>
        <Typography
          variant="caption"
          sx={{
            color: theme.palette.text.secondary,
            display: 'block',
            lineHeight: 1.6,
            fontWeight: 500,
            textAlign:'justify'
          }}
        >
          محاسبه قیمت مبنای تضمین بر اساس قیمت لحظه‌ای طلا در زمان ثبت انجام می‌شود. کارمزد از کیف پول تومانی کسر شده و طلای تضمین‌شده تا انقضای دوره بلوکه خواهد شد.
        </Typography>
      </Box>
    </Stack>
  );
}