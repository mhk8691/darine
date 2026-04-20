import { MenuType } from "@/app/core/Types";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ButtonGroupe from "./ButtonGroupe";
import SubMenu from "./SubMenu";
const menu: MenuType[] = [
  {
    id: 1,
    title: "امکانات",
    subMenu: [
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
    ],
  },
  {
    id: 2,
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
  { id: 3, title: "شعب دارینه", link: "/branches" },
  { id: 4, title: "مجوز های دارینه", link: "/license" },
  { id: 5, title: "همکاران دارینه", link: "/partners" },
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
          {menu.map((item) =>
            item.link ? (
              <Link href={item.link} key={item.id}>
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
              <SubMenu key={item.id} item={item} />
            ),
          )}
        </Stack>
      </Stack>
      <ButtonGroupe />
    </Stack>
  );
}
