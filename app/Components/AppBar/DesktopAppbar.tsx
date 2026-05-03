"use client";
import { Stack, SvgIcon, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Card from "../Container/Container";
import ModalNavigation from "./ModalNavigation";
import { ActiveArrowIcon } from "../CustomIcons/CustomIcons";
interface ItemsType {
  name: string;
  image: string;
  link?: string;
}
const AppbarItems: ItemsType[] = [
  {
    name: "داشبورد",
    image: "/images/appbar/home-active-dark.svg",
    link: "/dashboard/",
  },
  {
    name: "خرید و فروش",
    image: "/images/appbar/trade-active-dark.svg",
    link: "/dashboard/trades/",
  },
  {
    name: "کیف پول",
    image: "/images/appbar/wallet-active-dark.svg",
    link: "/dashboard/wallet/",
  },
  {
    name: "کارت هدیه",
    image: "/images/appbar/giftCard-active-dark.svg",
    link: "/dashboard/gift-card-menu/",
  },
  {
    name: "واریز و برداشت",
    image: "/images/appbar/irtTransaction-active-dark.svg",
    link: "/dashboard/irt-transaction/",
  },
  {
    name: "تحویل فیزیکی",
    image: "/images/appbar/shop-active-dark.svg",
    link: "/dashboard/gold-receive/",
  },
  {
    name: "گزارش ها",
    image: "/images/appbar/reports-active-dark.svg",
    link: "/dashboard/reports/",
  },
  {
    name: "بیشتر",
    image: "/images/appbar/more-dark.svg",
  },
];

export default function DesktopAppbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <Card
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          border: "none",
          pb: 0,
          bgcolor: "background.default",
          borderRadius: 2,
        }}
      >
        {AppbarItems.map((item, index) => (
          <Stack
            component={item.link ? Link : "div"}
            href={item.link}
            onClick={() => {
              !item.link ? setOpen(true) : setOpen(false);
            }}
            key={index}
            direction={"column"}
            gap={1}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
          >
            <Stack
              width={{
                xs: 28,
                md: 32,
              }}
              height={{
                xs: 28,
                md: 32,
              }}
            >
              <Image
                alt={item.name}
                width={100}
                height={100}
                src={item.image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  scale: pathname === item.link ? 1.15 : 1,
                  transition: "all .3s ease",
                }}
              />
            </Stack>
            <Typography
              variant="body1"
              fontSize={{
                xs: 12,
                md: 16,
              }}
              sx={{
                color: pathname === item.link ? "text.primary" : "text.muted",
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
                <ActiveArrowIcon />
              </SvgIcon>
            )}
          </Stack>
        ))}
      </Card>
      <ModalNavigation open={open} setOpen={setOpen} />
    </>
  );
}
