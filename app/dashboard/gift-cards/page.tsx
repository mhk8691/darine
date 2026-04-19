import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import { Grid } from "@mui/material";

export default function page() {
  return (
    <Grid container>
      <Grid size={12}>
        <OrderDetail
          title="لیست کارت‌های هدیه شما"
          toggleItems={[]}
          type="chip"
          emptyMessage="کارت هدیه‌ای توسط شما خریداری نشده است."
        />
      </Grid>
    </Grid>
  );
}
