"use client";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ActionButton from "../SubmitButton";
import LoginTab from "../LoginTab";
import LoginPassForm from "./LoginPassForm";

export default function page() {


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
    <LoginPassForm>
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
    </LoginPassForm>
    
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
