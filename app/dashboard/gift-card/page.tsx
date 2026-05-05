import Container from "@/app/Components/Container/Container";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import { Grid } from "@mui/material";
import { Metadata } from "next";
import GiftStepper from "./GiftStepper";
import Title from "./Title";
import BackLink from "../BackLink";
export const metadata: Metadata = {
  title: "خرید کارت هدیه | دارینه",
  description: "",
};
export default function page() {
  return (
    <Grid container spacing={3}>
      <BackLink title='سفارش کارت هدیه' />
      <Grid size={12}>
        <Container
          style={{
            pb: {
              xs: 0,
              sm: 8,
            },
            px: {
              xs: 0,
              sm: 4,
            },
            border: {
              xs: 0,
              sm: 1,
            },
            borderColor: {
              sm: "background.paper",
            },
          }}
        >
          <Title />
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
