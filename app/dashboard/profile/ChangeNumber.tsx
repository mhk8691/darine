'use client';

import InputField from '@/app/Components/InputField/InputField';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';

export default function ChangeNumber() {
  const [value, setValue] = useState('');
  return (
    <Stack
      direction={'row'}
      gap={1}
      mt={{
        xs: 2,
        sm: 5,
      }}
      width={'100%'}
    >
      <InputField
        placeholder="شماره تلفن جدید"
        setValue={setValue}
        value={value}
        style={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            '& fieldset': {
              borderColor: '#494949',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: '#494949',
              borderWidth: '1px',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#494949',
              borderWidth: '1px',
            },
            '&.Mui-disabled fieldset': {
              borderColor: '#494949',
              borderWidth: '1px',
            },
          },
          width: {
            xs: '70%',
            sm: '80%',
            md: '75%',
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: {
            xs: 14,
            sm: 16,
          },
          py: 1.6,
          borderRadius: 2,
          width: {
            xs: '30%',
            sm: '20%',
            md: '25%',
          },
          fontWeight: '600',
        }}
      >
        ارسال کد
      </Button>
    </Stack>
  );
}
