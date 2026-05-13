'use client';

import { MinusSquareIcon, PlusSquareleIcon } from '@/app/Components/CustomIcons/CustomIcons';
import InputField from '@/app/Components/InputField/InputField';
import { IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface Props {
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  weight: string;
  setWeight: Dispatch<SetStateAction<string>>;
  setCount: Dispatch<SetStateAction<number>>;
  count: number;
}

const GOLD_RATE = 17610000;

export default function WeightDetermination({
  price,
  setPrice,
  weight,
  setWeight,
  count,
  setCount,
}: Props) {
  useEffect(() => {
    const w = Number(weight);
    if (!w) return;

    const newPrice = (w * GOLD_RATE).toString();

    if (price !== newPrice) {
      setPrice(newPrice);
    }
  }, [weight]);

  useEffect(() => {
    const p = Number(price);
    if (!p) return;

    const newWeight = (p / GOLD_RATE).toString();

    if (weight !== newWeight) {
      setWeight(newWeight);
    }
  }, [price]);

  return (
    <Stack direction="column" gap={4}>
      <InputField placeholder="وزن" title="گرم" value={weight} setValue={setWeight} />

      <InputField placeholder="معادل تومان" title="تومان" value={price} setValue={setPrice} />

      <TextField
        label="تعداد"
        value={`${count} عدد`}
        disabled
        sx={{
          '& .MuiInputBase-input.Mui-disabled': {
            color: 'text.primary',
            WebkitTextFillColor: 'text.primary',
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Stack direction="row" alignItems="center">
                  <IconButton disableRipple onClick={() => setCount((c) => c + 1)}>
                    <PlusSquareleIcon />
                  </IconButton>

                  <Typography>{count}</Typography>

                  <IconButton onClick={() => setCount((c) => Math.max(1, c - 1))} disableRipple>
                    <MinusSquareIcon />
                  </IconButton>
                </Stack>
              </InputAdornment>
            ),
          },
        }}
      />
    </Stack>
  );
}
