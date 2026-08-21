'use client';

import * as React from 'react';
import { Chip } from '@mui/material';
import { GuaranteeStatus } from '@/app/core/Types';

interface Props {
  status: GuaranteeStatus;
  label: string;
}

export default function GuaranteeStatusChip({ status, label }: Props) {
  const getStyle = () => {
    switch (status) {
      case 'ACTIVE':
        return { color: '#2E7D32', bgcolor: 'rgba(46, 125, 50, 0.1)' };
      case 'CANCELLED':
        return { color: '#D32F2F', bgcolor: 'rgba(211, 47, 47, 0.1)' };
      case 'EXECUTED':
        return { color: '#0288D1', bgcolor: 'rgba(2, 136, 209, 0.1)' };
      case 'EXPIRED':
        return { color: '#757575', bgcolor: 'rgba(117, 117, 117, 0.1)' };
      default:
        return { color: '#757575', bgcolor: 'rgba(117, 117, 117, 0.1)' };
    }
  };

  const style = getStyle();

  return (
    <Chip
      label={label}
      size="small"
      sx={{
        color: style.color,
        bgcolor: style.bgcolor,
        fontWeight: 700,
        fontSize: '0.75rem',
        borderRadius: 2,
      }}
    />
  );
}