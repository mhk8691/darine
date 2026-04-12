import ChartGold from "@/app/Components/ChartGold/ChartGold";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import WalletStatus from "@/app/Components/Wallet/WalletStatus";
import { Grid } from "@mui/material";
import Trading from "./Trading";

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
          <ChartGold positionPrice="bottom" />
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
