"use client";
import { Stack } from "@mui/material";
import OrderDetail from "./Components/OrderDetail/OrderDetail";

export default function page() {
  return (
    <Stack
      width={"100%"}
      height={"150vh"}
      bgcolor={"background.paper"}
      justifyContent={"center"}
      direction={"row"}
      alignItems={"center"}
    >
      <Stack width={"95%"}>
        <OrderDetail
          title="لیست معاملات اخیر"
          emptyMessage="معامله ای برای شما به ثبت نرسیده است"
          type="chip"
        />
      </Stack>
    </Stack>
  );
}
