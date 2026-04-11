"use client";
import { Stack, SvgIcon, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Card from "../Card/Card";
import { usePathname } from "next/navigation";
interface ItemsType {
  name: string;
  image: string;
  link?: string;
}
const items: ItemsType[] = [
  {
    name: "داشبورد",
    image: "/images/appbar/home-active-dark.svg",
    link: "/dashboard",
  },
  {
    name: "خرید و فروش",
    image: "/images/appbar/trade-active-dark.svg",
    link: "/dashboard/trades",
  },
  {
    name: "کیف پول",
    image: "/images/appbar/wallet-active-dark.svg",
    link: "/dashboard/wallet",
  },
  {
    name: "کارت هدیه",
    image: "/images/appbar/giftCard-active-dark.svg",
    link: "/dashboard/gift-card-menu",
  },
  {
    name: "واریز و برداشت",
    image: "/images/appbar/irtTransaction-active-dark.svg",
    link: "/dashboard/irt-transaction",
  },
  {
    name: "تحویل فیزیکی",
    image: "/images/appbar/shop-active-dark.svg",
    link: "/dashboard/gold-receive",
  },
  {
    name: "گزارش ها",
    image: "/images/appbar/reports-active-dark.svg",
    link: "/dashboard/reports",
  },
  {
    name: "بیشتر",
    image: "/images/appbar/more-dark.svg",
  },
];

export default function AppBar() {
  const pathname = usePathname();
  return (
    <Card
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        border: "none",
        pb: 0,
        bgcolor: "background.default",
        borderRadius: 1,
      }}
    >
      {items.map((item, index) => (
        <Stack
          component={item.link ? Link : "div"}
          href={item.link}
          key={index}
          direction={"column"}
          gap={0.5}
          alignItems={"center"}
        >
          <Image
            alt={item.name}
            width={100}
            height={100}
            src={item.image}
            style={{
              width: "32px",
              height: "32px",
              objectFit: "contain",
              scale: pathname === item.link ? 1.15 : 1,
              transition: "all .3s ease",
            }}
          />
          <Typography
            variant="body1"
            fontSize={16}
            sx={{
              color: pathname === item.link ? "text.primary" : "#C2C2BA",
              scale: pathname === item.link ? 1.1 : 1,
              transition: "all .3s ease",
            }}
          >
            {item.name}
          </Typography>
          {item.link && (
            <SvgIcon
              sx={{
                mt: 0.5,
                width: "48px",
                height: 16,
                scale: pathname === item.link ? 1 : 0,
                opacity: pathname === item.link ? 1 : 0,
                transition: "all .3s ease",
              }}
              color="primary"
            >
              <svg
                width="48"
                height="16"
                viewBox="0 0 48 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48 16C44.3774 15.9998 13.5849 16.0001 0 16C14.4906 16 12.9323 0 24 0C36.2264 0 33.5094 15.9999 48 16Z"
                  fill="currentColor"
                ></path>
              </svg>
            </SvgIcon>
          )}
        </Stack>
      ))}
    </Card>
  );
}
