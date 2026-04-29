"use client";

import { Close } from "@mui/icons-material";
import { Drawer, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const menuItems = [
  {
    title: "وام خرید کالا",
    link: "/dashboard/loan",
  },
  {
    title: "خرید قسطی طلا",
    link: "/dashboard/credit-menu",
  },
  {
    title: "خرید شمش طلا",
    link: "/gold-shop",
  },
  {
    title: "کارت هدیه سازمانی",
    link: "/gift-card",
  },

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

  { id: 3, title: "شعب دارینه", link: "/branches" },
  { id: 4, title: "مجوز های دارینه", link: "/license" },
  { id: 5, title: "همکاران دارینه", link: "/partners" },
];
export default function DrawerLink({ open, setOpen }: Props) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
      transitionDuration={{ enter: 300, exit: 300 }}
      PaperProps={{
        sx: {
          width: "100vw",
          p: 2,
          background: "rgb(16, 16, 15)",
        },
      }}
    >
      <Stack direction={"row"} justifyContent={"flex-end"}>
        <IconButton onClick={() => setOpen(false)} disableRipple>
          <Close fontSize="large" sx={{ color: "#ADADA9" }} />
        </IconButton>
      </Stack>
      <Stack direction={"column"} gap={2}>
        {menuItems.map((item) => (
          <Link href={item.link} key={item.link}>
            <Typography variant="body2" fontWeight={500}>
              {item.title}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Drawer>
  );
}
