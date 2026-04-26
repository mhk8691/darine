"use client";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import InputField from "../InputField/InputField";
import Container from "../Container/Container";

export default function GoldBuy() {
  const [value, setValue] = useState<null | number>(null);
  return (
    <Container
      style={{
        gap: 3.5,
        mt: 2,
        width: {
          xs: "100%",
          sm: "600px",
        },
        px: {
          xs: 2,
          sm: 4,
        },
        py: {
          xs: 1.5,
          sm: 3,
        },
      }}
    >
      <Typography
        variant="h6"
        fontSize={{
          xs: 14,
          sm: 18,
        }}
        sx={{ color: "text.title" }}
      >
        خرید طلای قسطی
      </Typography>
      <Typography
        variant="h6"
        fontSize={{
          xs: 12,
          sm: 18,
        }}
        fontWeight={500}
      >
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
        sx={{
          fontSize: {
            xs: 14,
            sm: 20,
          },
          width: "100%",
          borderRadius: 2,
          py: {
            xs: 1.3,
            sm: 1,
          },
        }}
      >
        خرید
      </Button>
    </Container>
  );
}
