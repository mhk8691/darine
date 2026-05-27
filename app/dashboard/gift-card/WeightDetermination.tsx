'use client';

import { MinusSquareIcon, PlusSquareleIcon } from '@/app/Components/CustomIcons/CustomIcons';
import InputField from '@/app/Components/InputField/InputField';
import { IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { Dispatch, SetStateAction} from 'react';
import { useAssets } from '../../AssetsProvider';

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
const {assets} = useAssets()
const handlePriceChange =  async (val: string) => {
    setPrice(val);
    const num = Number(val);
    if (!isNaN(num)) {
      setWeight(String(num / assets?.current_gold_price));
    } else {
      setWeight('');
    }
  };

  const handleWeightChange =async (val: string) => {
    setWeight(val);
    const num = Number(val);
    if (!isNaN(num)) {
      setPrice(String(num * assets?.current_gold_price));
    } else {
      setPrice('');
    }
  };
  return (
    <Stack direction="column" gap={4}>
      <InputField type='number' placeholder="وزن" title="گرم" value={weight} setValue={handleWeightChange} />

      <InputField type='number' placeholder="معادل تومان" title="تومان" value={price} setValue={handlePriceChange} />

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
                  <IconButton   onClick={() => setCount((c) => c + 1)}>
                    <PlusSquareleIcon />
                  </IconButton>

                  <Typography>{count}</Typography>

                  <IconButton onClick={() => setCount((c) => Math.max(1, c - 1))}  >
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
