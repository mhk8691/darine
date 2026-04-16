"use client";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import ActionButton from "../ActionButton";
import Field from "../Field";
import SendCode from "../SendCode";

export default function page() {
  const [verifyCode, setVerifyCode] = useState("");

  return (
    <Stack>
      <Typography
        variant="h6"
        fontWeight={"500"}
        fontSize={22}
        sx={{ color: "text.title" }}
      >
        کد تایید
      </Typography>
      <Typography
        variant="body2"
        fontSize={16}
        sx={{ color: "#D9D9D3", mt: 3 }}
      >
        کد تایید ارسال شده به شماره موبایل 09961250980 را وارد کنید. کد تایید
        علاوه بر پیامک در پیامرسان بله نیز ارسال میشود.
      </Typography>

      <Field value={verifyCode} setValue={setVerifyCode} label="کد تایید" />
      <SendCode />
      <ActionButton title={"تایید"} />
    </Stack>
  );
}
