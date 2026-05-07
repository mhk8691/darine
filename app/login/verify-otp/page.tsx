"use client";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ActionButton from "../SubmitButton";
import Field from "../Field";
import SendCode from "../SendCode";

export default function page() {
  const [verifyCode, setVerifyCode] = useState("");

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
        کد تایید
      </Typography>
      <Typography
        variant="body2"
        fontSize={{
          xs: 12,
          md: 14,
          xl: 16,
        }}
        sx={{ color: "text.secondary", mt: 3 }}
      >
        کد تایید ارسال شده به شماره موبایل 09961250980 را وارد کنید.
        <Box component={"span"} display={"block"}>
          کد تایید علاوه بر پیامک در پیامرسان بله نیز ارسال میشود.
        </Box>
      </Typography>

      <Field value={verifyCode} setValue={setVerifyCode} label="کد تایید" />
      <SendCode />
      <ActionButton title={"تایید"} />
    </Stack>
  );
}
