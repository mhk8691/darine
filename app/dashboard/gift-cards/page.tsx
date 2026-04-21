import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import { Grid } from "@mui/material";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "لیست کارت هدیه | دارینه",
  description: "",
};
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
