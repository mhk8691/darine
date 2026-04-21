import ChartGold from "@/app/Components/ChartGold/ChartGold";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import WalletStatus from "@/app/Components/Wallet/WalletStatus";
import { Grid } from "@mui/material";
import PriceAlert from "./PriceAlert";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "آلارم قیمت | دارینه",
  description: "",
};
export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <WalletStatus />
      </Grid>
      <Grid size={12} container>
        <Grid size={4.9}>
          <PriceAlert />
        </Grid>
        <Grid size={7.1}>
          <ChartGold
            positionPrice="bottom"
            cardStyle={{
              pt: "36px",
            }}
            priceStyle={{
              mt: 4,
              mb: 1.5,
            }}
            dividerStyle={{
              mt: 4,
            }}
          />
        </Grid>
      </Grid>
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
