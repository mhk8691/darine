"use client";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ActionButton from "../ActionButton";
import Field from "../Field";
import LoginTab from "../LoginTab";

export default function page() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  // const [disable, setDisable] = useState(true);

  return (
    <Stack>
      <LoginTab />
      <Typography
        variant="body2"
        fontSize={16}
        sx={{ color: "#D9D9D3", mt: 2 }}
      >
        اطلاعات زیر را وارد کنید
      </Typography>
      <Field
        value={phoneNumber}
        setValue={setPhoneNumber}
        label="شماره موبایل"
      />
      <Stack mt={0.5}>
        <Field value={password} setValue={setPassword} label="رمز ورود" />
      </Stack>
      <Link href={"/login/forget"}>
        <Typography
          variant="body2"
          sx={{ color: "#0091F8", mt: 3 }}
          fontSize={12}
          fontWeight={500}
        >
          فراموشی رمز عبور
        </Typography>
      </Link>
      <Typography
        variant="body2"
        sx={{ mt: 6, color: "#C2C2BA" }}
        fontSize={12}
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
          fontSize={12}
          sx={{ whiteSpace: "nowrap", direction: "row" }}
        >
          حساب کاربری ندارید؟
          <Box component={"span"} sx={{ color: "#0091F8", fontSize: 14,ml:1 }}>
            <Link href={"/login/signup"}>ثبت نام</Link>
          </Box>
        </Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Stack>
    </Stack>
  );
}
