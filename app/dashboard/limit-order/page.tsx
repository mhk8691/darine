import ChartGold from "@/app/Components/ChartGold/ChartGold";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import WalletStatus from "@/app/Components/Wallet/WalletStatus";
import { Grid } from "@mui/material";
import Trading from "./Trading";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "سفارش با قیمت | دارینه",
  description: "",
};
export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <WalletStatus />
      </Grid>
      <Grid size={12} container spacing={3}>
        <Grid size={4.8}>
          <Trading />
        </Grid>
        <Grid size={7.2}>
          <ChartGold
            positionPrice="bottom"
            cardStyle={{ pt: 5.5,px:2.5 }}
            priceStyle={{
              mt: 5,
              mb: 2.5,
            }}
            dividerStyle={{ mt: 5 }}
          />
        </Grid>
      </Grid>
      <Grid size={12}>
        <OrderDetail
          title="لیست معاملات اخیر"
          toggleItems={[]}
          type="chip"
          emptyMessage="سفارشی برای شما به ثبت نرسیده است"
        />
      </Grid>
    </Grid>
  );
}
