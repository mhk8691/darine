import Wallet from "@/app/Components/Wallet/Wallet";
import { Grid } from "@mui/material";
import React from "react";
import Trading from "./Trading/Trading";
import ChartGold from "@/app/Components/ChartGold/ChartGold";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import { ToggleItemsType } from "@/app/core/Types";
const items: ToggleItemsType[] = [
  { title: "خرید", value: "buy", id: 1 },
  { title: "فروش", value: "sell", id: 2 },
];
export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Wallet />
      </Grid>
      <Grid size={12} container>
        <Grid size={4.8}>
          <Trading />
        </Grid>
        <Grid size={7.2}>
          <ChartGold positionPrice="bottom" />
        </Grid>
      </Grid>
      <Grid size={12}>
        <OrderDetail
          title="لیست معاملات اخیر"
          toggleItems={items}
          type="chip"
          emptyMessage="معامله ای برای شما به ثبت نرسیده است"
        />
      </Grid>
    </Grid>
  );
}
