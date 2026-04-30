"use client";

import NavigateBeforeSharp from "@mui/icons-material/NavigateBeforeSharp";
import { Breadcrumbs, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  "/gold-shop-basket",
];

const prefixHiddenRoutes = ["/login", "/dashboard"];

export default function CustomBreadcrumbs() {
  const pathname = usePathname();
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const checkPageStatus = async () => {
      try {
        const res = await fetch(pathname, { method: "HEAD" });
        if (res.status === 404) {
          setIsNotFound(true);
        }
      } catch (error: unknown) {
        setIsNotFound(true);
      }
    };

    checkPageStatus();
  }, [pathname]);

  const shouldHide =
    exactHiddenRoutes.includes(pathname) ||
    prefixHiddenRoutes.some((route) => pathname.startsWith(route)) ||
    isNotFound;

  if (shouldHide) return null;

  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Breadcrumbs
        separator={<NavigateBeforeSharp fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          px: {
            xs: "16px !important",
            md: "24px !important",
            lg: "40px !important",
          },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mt: {
            xs: 0,
            sm: 3,
          },
        }}
      >
        <Link color="inherit" href="/">
          <Typography
            variant="body2"
            fontSize={12}
            sx={{
              transition: "all .3s ease",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            خرید طلای آب شده
          </Typography>
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
              color="inherit"
              href={href}
              style={{ fontSize: 12 }}
            >
              <Typography
                variant="body2"
                fontSize={12}
                sx={{
                  transition: "all .3s ease",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {label}
              </Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
    </Stack>
  );
}
