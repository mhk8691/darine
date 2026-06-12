'use client';

import React, { ReactNode } from 'react';

import { SxProps } from '@mui/material';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

interface Props {
  placeholder?: string;
  icon?: ReactNode;
  title?: string;
  value: string;
  setValue: (value: string) => void;
  style?: SxProps;
  multiline?: boolean;
  type?: 'text' | 'number';
}

export default function InputField({
  placeholder,
  title,
  icon,
  value,
  setValue,
  style,
  multiline = false,
  type = 'text',
}: Props) {

  // تبدیل امن به عدد
  const toNumber = (val: string) => {
    const num = Number(val);
    return isNaN(num) ? 0 : num;
  };

  // فرمت نمایش (رند 3 رقم اعشار + جلوگیری از خراب شدن تایپ)
  const formatNumber = (val: string) => {
    if (!val) return '';

    // اجازه تایپ اعشاری نیمه‌کاره
    if (val === '.' || val.endsWith('.')) return val;

    const num = Number(val);

    if (isNaN(num)) return '';

    if (num > 0 && num < 0.001) return '0';

    const rounded = Math.round(num * 1000) / 1000;

    const [intPart, decPart] = rounded.toString().split('.');

    const formattedInt = Number(intPart).toLocaleString('en-US');

    return decPart
      ? `${formattedInt}.${decPart}`
      : formattedInt;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    if (type === 'number') {
      val = val.replace(/[^0-9.]/g, '');

      const parts = val.split('.');
      if (parts.length > 2) {
        val = parts[0] + '.' + parts.slice(1).join('');
      }

      const [int, dec] = val.split('.');
      if (dec && dec.length > 3) {
        val = `${int}.${dec.slice(0, 3)}`;
      }
    }

    setValue(val);
  };

  return (
    <TextField
      placeholder={placeholder}
      value={type === 'number' ? formatNumber(value) : value}
      onChange={handleChange}
      inputMode={type === 'number' ? 'decimal' : 'text'}
      multiline={multiline}
      minRows={multiline ? 5 : undefined}
      fullWidth
      inputProps={{
        inputMode: type === 'number' ? 'decimal' : 'text',
      }}
      sx={{
        direction: 'ltr',

        '& .MuiInputBase-root': {
          borderRadius: '14px',
        },

        '& .MuiInputBase-input': {
          py: 0,
          minHeight: '56px',
          fontSize: '16px',
          textAlign: value ? 'right' : 'left',
        },

        ...style,
      }}
      slotProps={{
        input: {
          startAdornment: icon ? (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          ) : undefined,

          endAdornment: title ? (
            <InputAdornment position="end">
              <Divider orientation="vertical" flexItem sx={{ mr: 1 }} />
              <Typography sx={{ fontSize: 16, color: 'text.primary' }}>
                {title}
              </Typography>
            </InputAdornment>
          ) : undefined,
        },
      }}
    />
  );
}