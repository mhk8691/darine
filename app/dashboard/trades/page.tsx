import ChartGold from "@/app/Components/ChartGold/ChartGold";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import WalletStatus from "@/app/Components/Wallet/WalletStatus";
import { ToggleItemsType } from "@/app/core/Types";
import { Grid } from "@mui/material";
import Trading from "./Trading/Trading";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "خرید و فروش طلا | دارینه",
  description: "",
};
const items: ToggleItemsType[] = [
  {
    title: "خرید",
    value: "buy",
    id: 1,
    emptyMessage: "معامله ای برای شما به ثبت نرسیده است",
  },
  {
    title: "فروش",
    value: "sell",
    id: 2,
    emptyMessage: "معامله ای برای شما به ثبت نرسیده است",
  },
];
export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <WalletStatus />
      </Grid>
      <Grid size={12} container direction={"row"}>
        <Grid size={4.8}>
          <Trading />
        </Grid>
        <Grid size={7.2} height={"100%"}>
          <ChartGold
            positionPrice="bottom"
            priceStyle={{
              mt: 3,
            }}
          />
        </Grid>
      </Grid>
      <Grid size={12}>
        <OrderDetail
          title="لیست معاملات اخیر"
          toggleItems={items}
          type="chip"
        />
      </Grid>
    </Grid>
  );
}
