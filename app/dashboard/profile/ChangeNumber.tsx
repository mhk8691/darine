"use client";

import InputField from "@/app/Components/InputField/InputField";
import { Stack, Button } from "@mui/material";
import { useState } from "react";

export default function ChangeNumber() {
  const [value, setValue] = useState<number | null>(null);
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1} mt={5}>
      <InputField
        placeholder="شماره تلفن جدید"
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
          width: "79%",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ fontSize: 16, py: 1.6, borderRadius: 2,px:3 }}
      >
        ارسال کد
      </Button>
    </Stack>
  );
}
