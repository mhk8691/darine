"use client";

import InputField from "@/app/Components/InputField/InputField";
import { Stack, Button } from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState<number | null>(null);
  return (
    <Stack direction={"column"} gap={1} mt={3.5}>
      <InputField
        placeholder="شماره سریال روی کارت هدیه"
        setValue={setValue}
        value={value}
        style={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            "& fieldset": {
              borderColor: "#494949",
              borderWidth: "1px",
            },
            "&:hover fieldset": {
              borderColor: "#494949",
              borderWidth: "1px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#494949",
              borderWidth: "1px",
            },
            "&.Mui-disabled fieldset": {
              borderColor: "#494949",
              borderWidth: "1px",
            },
          },
        }}
      />
      <Stack direction={"row"} gap={2} mt={1}>
        <Button
          variant="contained"
          color="primary"
          sx={{ fontSize: 20, width: "70%", py: 1, borderRadius: 2 }}
        >
          ثبت
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          sx={{ fontSize: 20, width: "30%", py: 1, borderRadius: 2 }}
        >
          بازگشت
        </Button>
      </Stack>
    </Stack>
  );
}
