"use client";

import InputField from "@/app/Components/InputField/InputField";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  weight: string;
  setWeight: Dispatch<SetStateAction<string>>;
}

const GOLD_RATE = 17610000;

export default function WeightDetermination({
  price,
  setPrice,
  weight,
  setWeight,
}: Props) {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    const w = Number(weight);
    if (!w) return;

    const newPrice = (w * GOLD_RATE).toString();

    if (price !== newPrice) {
      setPrice(newPrice);
    }
  }, [weight]);

  // price → weight
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
      <InputField
        placeholder="وزن"
        title="گرم"
        value={weight}
        setValue={setWeight}
      />

      <InputField
        placeholder="معادل تومان"
        title="تومان"
        value={price}
        setValue={setPrice}
      />

      <TextField
        label="تعداد"
        value={`${count} عدد`}
        disabled
        sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            color: "#EBEBE6",
            WebkitTextFillColor: "#EBEBE6",
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Stack direction="row" alignItems="center">
                  <IconButton
                    disableRipple
                    onClick={() => setCount((c) => c + 1)}
                  >
                    <Typography>+</Typography>
                  </IconButton>

                  <Typography>{count}</Typography>

                  <IconButton
                    onClick={() => setCount((c) => Math.max(1, c - 1))}
                    disableRipple
                  >
                    <Typography>-</Typography>
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
