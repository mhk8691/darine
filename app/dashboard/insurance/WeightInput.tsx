'use client';

import * as React from 'react';
import { Box, Typography, Skeleton, useTheme } from '@mui/material';
import InputField from '@/app/Components/InputField/InputField'; // مسیر کامپوننت InputField پروژه

interface Props {
  goldWeight: string;
  setGoldWeight: (val: string) => void;
  accessibleGold: number;
  loading: boolean;
}

export default function WeightInput({
  goldWeight,
  setGoldWeight,
  accessibleGold,
  loading,
}: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="body2"
        fontWeight={700}
        sx={{ color: theme.palette.text.primary, mb: 1.5, px: 0.5 }}
      >
        ۲. مقدار طلای جهت تضمین (گرم)
      </Typography>

      {loading ? (
        <Skeleton variant="rounded" height={56} sx={{ borderRadius: '8px' }} />
      ) : (
        <>
          <InputField
            type="number"
            placeholder="مثال: ۵"
            title="وزن طلا به گرم"
            value={goldWeight}
            setValue={setGoldWeight}
          />
          <Typography
            variant="body2"
            color="primary"
            component="div"
            sx={{
              display: 'inline-flex',
              width: 'fit-content',
              mt: 1,
              ml: 1,
              cursor: 'pointer',
              fontWeight: 600,
            }}
            onClick={() => setGoldWeight(accessibleGold.toString())}
          >
            موجودی طلای دردسترس: {accessibleGold.toLocaleString('fa-IR')} گرم
          </Typography>
        </>
      )}
    </Box>
  );
}