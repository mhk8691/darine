"use client";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ActionButton from "../ActionButton";
import Field from "../Field";

export default function page() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Stack>
      <Typography
        variant="h6"
        fontWeight={"500"}
        fontSize={{
          xs: 16,
          md: 22,
        }}
        sx={{ color: "text.title" }}
      >
        فراموشی رمز عبور
      </Typography>
      <Typography
        variant="body2"
        fontSize={{
          xs: 12,
          sm: 16,
        }}
        sx={{ color: "#D9D9D3", mt: 3 }}
      >
        شماره موبایل خود را وارد کنید
      </Typography>

      <Field
        value={phoneNumber}
        setValue={setPhoneNumber}
        label="شماره موبایل"
      />
      <Typography
        variant="body2"
        sx={{
          mt: {
            xs: 4.5,
            md: 9,
          },
          color: "#C2C2BA",
        }}
        fontSize={{
          xs: 10,
          md: 12,
        }}
        fontWeight={500}
      >
        ورود شما به منزله قبول‌{" "}
        <Link
          href={"/roules"}
          style={{
            color: "#0091F8",
          }}
        >
          قوانین و مقررات‌
        </Link>{" "}
        طلاسی می‌باشد.
      </Typography>
      <ActionButton title={"ادامه"} />
    </Stack>
  );
}
