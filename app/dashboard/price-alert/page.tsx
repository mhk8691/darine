import ChartGold from "@/app/Components/ChartGold/ChartGold";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import WalletStatus from "@/app/Components/Wallet/WalletStatus";
import { Grid } from "@mui/material";
import PriceAlert from "./PriceAlert";
import { Metadata } from "next";
import ChartContainer from "./ChartContainer";
export const metadata: Metadata = {
  title: "آلارم قیمت | دارینه",
  description: "",
};
export default function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 0,
        sm: 1,
        lg: 3,
      }}
    >
      <Grid size={12}>
        <WalletStatus />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 4.9,
        }}
      >
        <PriceAlert />
      </Grid>
      <ChartContainer />
      <Grid size={12}>
        <OrderDetail
          type="chip"
          emptyMessage="آلارمی برای شما به ثبت نرسیده است"
          title="لیست آلارم‌های اخیر"
          toggleItems={[]}
        />
      </Grid>
    </Grid>
  );
}
