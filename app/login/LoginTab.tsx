"use client";
import { Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LoginTab() {
  const pathname = usePathname();
  return (
    <Stack direction={"column"} gap={1.5}>
      <Typography
        variant="h6"
        fontWeight={"500"}
        fontSize={{
          xs: 16,
          md: 22,
        }}
        sx={{ color: "text.title" }}
      >
        ورود
      </Typography>
      <Stack direction={"row"} alignItems={"center"} gap={3}>
        <Link href={"/login/login-password"}>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography
              variant="body2"
              fontSize={{
                xs:12,
                md:14
              }}
              sx={{
                color:
                  pathname === "/login/login-password/"
                    ? "text.primary"
                    : "#C2C2BA",
                mb: 1.5,
              }}
              fontWeight={pathname === "/login/login-password/" ? 600: 500}
            >
              ورود با رمز عبور
            </Typography>
            {pathname === "/login/login-password/" && (
              <Divider
                sx={{
                  border: 2,
                  borderRadius: 3,
                  width: "120%",
                  borderColor: "primary.main",
                }}
              />
            )}
          </Stack>
        </Link>
        <Link href={"/login/login-otp"}>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography
              variant="body2"
              fontSize={{
                xs:12,
                md:14
              }}
              sx={{
                color:
                  pathname === "/login/login-otp/" ? "text.primary" : "#C2C2BA",
                mb: 1.5,
              }}
              fontWeight={pathname === "/login/login-otp/" ? 600: 500}
            >
              ورود با رمز یکبار مصرف
            </Typography>
            {pathname === "/login/login-otp/" && (
              <Divider
                sx={{
                  border: 2,
                  borderRadius: 3,
                  width: "110%",
                  borderColor: "primary.main",
                }}
              />
            )}
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
}
