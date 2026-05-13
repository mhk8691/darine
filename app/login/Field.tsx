'use client';
import { SxProps, TextField } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label?: string;
  placeholder?: string;
  style?: SxProps;
}

export default function Field({ value, setValue, label, placeholder, style }: Props) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="outlined"
      placeholder={placeholder}
      sx={{
        width: '100%',
        mt: 2.5,
        '& .MuiOutlinedInput-root': {
          fontSize: {
            xs: 14,
            sm: 16,
          },
          borderRadius: placeholder ? 2 : 2.5,
        },
        '& .MuiInputLabel-root': {
          color: 'text.muted',
          fontSize: {
            xs: '14px',
            sm: '16px',
          },
        },
        ...style,
      }}
    />
  );
}
