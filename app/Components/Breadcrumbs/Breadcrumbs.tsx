"use client";

import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import NavigateBeforeSharp from "@mui/icons-material/NavigateBeforeSharp";
import { usePathname } from "next/navigation";

const breadcrumbNameMap: Record<string, string> = {
  "gold-shop": "خرید شمش طلا",
  "gift-card": "کارت هدیه طلا",
  "gold-price": "قیمت طلا",
  geram18: "قیمت طلای ۱۸ عیار",
  calculator: "محاسبه قیمت طلا",
  "coin-price": "قیمت سکه",
  parsian: "قیمت سکه پارسیان",
  faq: "سوالات متداول",
  rules: "قوانین دارینه",
};

const exactHiddenRoutes = [
  "/branches",
  "/license",
  "/partners",
  "/about-us",
  "/login/login-password",
  "/login/login-otp",
  "/login/forget",
  "/login/signup",
];

const prefixHiddenRoutes = ["/login", "/dashboard"];

export default function CustomBreadcrumbs() {
  const pathname = usePathname();

  const shouldHide =
    exactHiddenRoutes.includes(pathname) ||
    prefixHiddenRoutes.some((route) => pathname.startsWith(route));

  if (shouldHide) return null;

  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Breadcrumbs
        separator={<NavigateBeforeSharp fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          px: 5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Link underline="hover" color="inherit" href="/" fontSize={12}>
          خرید طلای آب شده
        </Link>

        {pathnames.map((value, index) => {
          const isId = /^[a-f0-9]{24}$/.test(value);

          const href = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          const label = isId
            ? "جزئیات محصول"
            : breadcrumbNameMap[value] || decodeURIComponent(value);

          return isLast ? (
            <Typography key={href} color="text.primary" fontSize={12}>
              {label}
            </Typography>
          ) : (
            <Link
              key={href}
              underline="hover"
              color="inherit"
              href={href}
              fontSize={12}
            >
              {label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Stack>
  );
}
