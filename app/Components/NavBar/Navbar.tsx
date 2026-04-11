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
      position="fixed"
      zIndex={"1000"}
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
        {/* <Link href={"/dashboard"}>
          <Button
            variant="outlined"
            color="inherit"
            disableRipple
            sx={{
              px: 3,
              border: 1,
              borderRadius: 2,
              fontSize: 16,
              py: 1.2,
              "&:hover": {
                background: "rgb(16, 16, 15)",
              },
              fontWeight: "bold",
            }}
            startIcon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0026 9.99935C12.3038 9.99935 14.1693 8.13387 14.1693 5.83268C14.1693 3.5315 12.3038 1.66602 10.0026 1.66602C7.70142 1.66602 5.83594 3.5315 5.83594 5.83268C5.83594 8.13387 7.70142 9.99935 10.0026 9.99935Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M17.1604 18.3333C17.1604 15.1083 13.9521 12.5 10.0021 12.5C6.05208 12.5 2.84375 15.1083 2.84375 18.3333"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            }
          >
            پنل کاربری
          </Button>
        </Link> */}
      </Stack>
    </Stack>
  );
}
