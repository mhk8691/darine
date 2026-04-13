"use client";
import { Typography, Button } from "@mui/material";
import React, { useState } from "react";
import InputField from "../InputField/InputField";
import Card from "../Card/Card";

export default function GoldBuy() {
  const [value, setValue] = useState<null | number>(null);
  return (
    <Card style={{ gap: 3.5,  mt: 2, mb: 12,width:'50%' }}>
      <Typography variant="h6" fontSize={18} sx={{ color: "text.title" }}>
        خرید طلای قسطی
      </Typography>
      <Typography variant="h6" fontSize={18} fontWeight={500}>
        مبلغ مورد نظر خود برای خرید طلا را وارد کنید
      </Typography>
      <InputField
        placeholder="مبلغ مورد نظر"
        title="تومان"
        value={value}
        setValue={setValue}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ fontSize: 20, width: "100%" }}
      >
        خرید
      </Button>
    </Card>
  );
}
