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
            color: "text.primary",
            WebkitTextFillColor: "text.primary",
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 12H16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 16V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </IconButton>

                  <Typography>{count}</Typography>

                  <IconButton
                    onClick={() => setCount((c) => Math.max(1, c - 1))}
                    disableRipple
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 12H16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
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
