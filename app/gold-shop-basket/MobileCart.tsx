import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Counter from "../gold-shop/[productId]/Counter";
const items = [
  {
    id: 1,
    title: "شمش طلاسی 1 گرمی 18 عیار",
    weight: "۲.۶۲۵ گرم",
    price: "۴۵,۰۴۲,۰۸۶",
    count: 1,
    total: "۴۵,۰۴۲,۰۸۶ تومان",
    image: "/images/product.webp",
  },
  {
    id: 2,
    title: "شمش طلاسی 1 گرمی 18 عیار",
    weight: "۲.۶۲۵ گرم",
    price: "۴۵,۰۴۲,۰۸۶",
    count: 1,
    total: "۴۵,۰۴۲,۰۸۶ تومان",
    image: "/images/product.webp",
  },
];

export default function MobileCart() {
  return (
    <Stack direction={"column"} gap={2}>
      {items.map((item) => (
        <Stack
          key={item.id}
          border={1}
          borderColor={"background.paper"}
          p={2}
          borderRadius={2}
          direction={"column"}
          gap={2}
        >
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <Image src={item.image} alt={item.title} width={64} height={64} />
            <Stack direction={"column"} gap={1}>
              <Typography
                variant="body2"
                sx={{ color: "text.title" }}
                fontWeight={"bold"}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.title" }}
                fontSize={12}
              >
                {item.weight}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.title" }}
                fontSize={12}
              >
                {item.price} تومان
              </Typography>
            </Stack>
          </Stack>
          <Counter />
        </Stack>
      ))}
    </Stack>
  );
}
