import { MenuType } from "@/app/core/Types";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ProfileBtn from "./ProfileBtn";
import SubMenu from "./SubMenu";
import React from "react";
const menu: MenuType[] = [
  {
    title: "امکانات",
    subMenu: [
      {
        title: "وام خرید کالا",
        link: "/loan",
      },
      {
        title: "خرید قسطی طلا",
        link: "/credit-menu",
      },
      {
        title: "خرید شمش طلا",
        link: "/gold-shop",
      },
      {
        title: "کارت هدیه سازمانی",
        link: "/gift-card",
      },
    ],
  },
  {
    title: "قیمت طلا",
    subMenu: [
      {
        title: "قیمت طلا امروز",
        link: "/gold-price",
      },
      {
        title: "انس جهانی طلا",
        link: "/ons",
      },
      {
        title: "محاسبه قیمت طلا",
        link: "/calculator",
      },
      {
        title: "قیمت سکه امروز",
        link: "/coin-price",
      },
      {
        title: "قیمت سکه پارسیان",
        link: "/parsian",
      },
    ],
  },
  {
    title: "شعب دارینه",
    link: "/branches",
  },
  {
    title: "مجوز های دارینه",
    link: "/license",
  },
  {
    title: "همکاران دارینه",
    link: "/partners",
  },
];
export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        py: 2,
        px: 5,
        bgcolor: "background.default",
        width: "100%",
      }}
    >
      <Stack direction={"row"} gap={3} width={"61%"}>
        <Image
          src={"/images/logoDark.svg"}
          width={100}
          height={100}
          alt=""
          style={{
            width: "23%",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <Stack direction={"row"} gap={2.5} alignItems={"center"}>
          {menu.map((item, index) =>
            item.link ? (
              <Link href={item.link} key={index}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item.title}
                </Typography>
              </Link>
            ) : (
              <SubMenu key={item.title} item={item} />
            ),
          )}
        </Stack>
      </Stack>
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <ProfileBtn />
        <Button
          variant="outlined"
          color="secondary"
          disableRipple
          sx={{
            px: 1,
            border: 1,
            borderRadius: "5px",
            fontSize: 16,
            py: 1.2,
            "&:hover": {
              background: "rgb(16, 16, 15)",
            },
          }}
        >
          ورود به نقره سی
        </Button>

        <NotificationsIcon
          fontSize="large"
          sx={{
            color: "primary.light",
          }}
        />
        <DarkModeTwoToneIcon
          fontSize="large"
          sx={{
            color: "primary.light",
          }}
        />
      </Stack>
    </Stack>
  );
}
