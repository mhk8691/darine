'use client';

import { SxProps, TextField, TextFieldProps } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label?: string;
  placeholder?: string;
  style?: SxProps;
  textFieldProps?: TextFieldProps;
  type?: 'number' | 'text';
}

export default function Field({
  value,
  setValue,
  label,
  placeholder,
  style,
  textFieldProps,
  type = 'text',
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (type === 'number') {
      setValue(val.replace(/\D/g, ''));
      return;
    }

    setValue(val);
  };

  return (
    <TextField
      {...textFieldProps}
      label={label}
      value={value}
      onChange={handleChange}
      variant="outlined"
      placeholder={placeholder}
      inputProps={{
        ...(textFieldProps?.inputProps || {}),
        inputMode: type === 'number' ? 'numeric' : 'text',
        ...(type === 'number' && {
          pattern: '[0-9]*',
        }),
      }}
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