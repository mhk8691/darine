'use client';

import { MinusSquareIcon, PlusSquareleIcon } from '@/app/Components/CustomIcons/CustomIcons';
import InputField from '@/app/Components/InputField/InputField';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { getAssets } from '@/lib/getAssets/getAssets';
import { IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface Props {
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  weight: string;
  setWeight: Dispatch<SetStateAction<string>>;
  setCount: Dispatch<SetStateAction<number>>;
  count: number;
}


export default function WeightDetermination({
  price,
  setPrice,
  weight,
  setWeight,
  count,
  setCount,
}: Props) {
    const [livePrice,setLivePrice] = useState(0)
  useEffect(() => {
  const handleLivePrice = async () => {
    try {
      const response = await getAssets();
      setLivePrice(response.current_gold_price);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }
  };
  
  handleLivePrice();
  
  const interval = setInterval(() => {
    handleLivePrice();
  }, 45000); 

  return () => clearInterval(interval);
}, []);
const handlePriceChange =  async (val: string) => {
    setPrice(val);
    const num = Number(val);
    if (!isNaN(num)) {
      setWeight(String(num / livePrice));
    } else {
      setWeight('');
    }
  };

  const handleWeightChange =async (val: string) => {
    setWeight(val);
    const num = Number(val);
    if (!isNaN(num)) {
      setPrice(String(num * livePrice));
    } else {
      setPrice('');
    }
  };
  return (
    <Stack direction="column" gap={4}>
      <InputField placeholder="وزن" title="گرم" value={weight} setValue={handleWeightChange} />

      <InputField placeholder="معادل تومان" title="تومان" value={price} setValue={handlePriceChange} />

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
