"use client";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ActionButton from "../ActionButton";
import Field from "../Field";
import LoginTab from "../LoginTab";
import PasswordField from "../PasswordField";

export default function page() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack>
      <LoginTab />
      <Typography
        variant="body2"
        fontSize={{
          xs: 12,
          md: 16,
        }}
        sx={{ color: "text.secondary", mt: 2 }}
      >
        اطلاعات زیر را وارد کنید
      </Typography>
      <Field
        value={phoneNumber}
        setValue={setPhoneNumber}
        label="شماره موبایل"
      />
      <Stack mt={0.5}>
        <PasswordField password={password} setPassword={setPassword} />
      </Stack>
      <Link href={"/login/forget"} style={{ marginTop: 24 }}>
        <Typography
          variant="body2"
          sx={{ color: "#0091F8" }}
          fontSize={12}
          fontWeight={600}
        >
          فراموشی رمز عبور
        </Typography>
      </Link>
      <Typography
        variant="body2"
        sx={{ mt: 6, color: "text.muted" }}
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
      <Stack
        direction={"row"}
        gap={2}
        alignItems={"center"}
        sx={{ width: "100%" }}
        mt={3}
      >
        <Divider sx={{ flexGrow: 1 }} />
        <Typography
          variant="body1"
          fontSize={{
            xs: 10,
            md: 12,
          }}
          sx={{ whiteSpace: "nowrap", direction: "row" }}
        >
          حساب کاربری ندارید؟
          <Box
            component={"span"}
            sx={{
              color: "#0091F8",
              fontSize: {
                xs: 12,
                md: 14,
              },
              ml: 1,
            }}
          >
            <Link href={"/login/signup"}>ثبت نام</Link>
          </Box>
        </Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Stack>
    </Stack>
  );
}
