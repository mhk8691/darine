import Container from "@/app/Components/Container/Container";
import GoldCard from "@/app/Components/GoldCard/GoldCard";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import WalletStatus from "@/app/Components/Wallet/WalletStatus";
import { ToggleItemsType } from "@/app/core/Types";
import { Grid } from "@mui/material";
import Cart from "./Cart";
import Sort from "./Sort";
const items: ToggleItemsType[] = [
  { title: "تحویل درب منزل", value: "doorstepdelivery", id: 1,emptyMessage:'سفارشی برای شما به ثبت نرسیده است' },
  { title: "تحویل حضوری", value: "personDelivery", id: 2,emptyMessage:'سفارشی برای شما به ثبت نرسیده است' },
];

export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <WalletStatus />
      </Grid>
      <Grid size={12}>
        <Container style={{ pb: 11 }}>
          <Sort />
          <Grid container spacing={1} mt={3}>
            <Grid size={8} container spacing={2}>
              <Grid size={4}>
                <GoldCard />
              </Grid>
              <Grid size={4}>
                {" "}
                <GoldCard />
              </Grid>
              <Grid size={4}>
                {" "}
                <GoldCard />
              </Grid>
            </Grid>
            <Grid size={4}>
              <Cart />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid size={12}>
        <OrderDetail
          type="chip"
          title="لیست تحویل‌های اخیر"
          toggleItems={items}
        />
      </Grid>
    </Grid>
  );
}
