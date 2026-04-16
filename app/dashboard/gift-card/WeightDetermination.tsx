import InputField from "@/app/Components/InputField/InputField";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function WeightDetermination() {
  const [weight, setWeight] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    if (!weight) return;
    setPrice(weight * 17610000);
  }, [weight, setWeight, setPrice, price]);
  return (
    <Stack direction={"column"} gap={4}>
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
                <Stack direction={"row"} gap={0} alignItems={"center"}>
                  <IconButton
                    onClick={() => setCount((prev) => prev && prev + 1)}
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
                        stroke="#95958f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 16V8"
                        stroke="#95958f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="#95958f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </IconButton>
                  <Typography variant="body2">{count}</Typography>
                  <IconButton
                    onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
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
                        stroke="#95958f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="#95958f"
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
