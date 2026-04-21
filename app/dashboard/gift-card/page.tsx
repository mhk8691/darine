import Container from "@/app/Components/Container/Container";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import { Grid, Typography } from "@mui/material";
import GiftStepper from "./GiftStepper";

export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Container style={{pb:8}}>
          <Typography variant="h6" fontSize={22} sx={{ color: "text.title" }}>
            سفارش کارت هدیه
          </Typography>
          <GiftStepper />
        </Container>
      </Grid>
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
