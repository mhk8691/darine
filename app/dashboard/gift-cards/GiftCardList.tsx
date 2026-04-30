"use client";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

export default function GiftCardList() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid size={12}>
      <OrderDetail
        title={isDesktop ? "لیست کارت‌های هدیه شما" : ''}
        toggleItems={[]}
        type="chip"
        emptyMessage="کارت هدیه‌ای توسط شما خریداری نشده است."
      />
    </Grid>
  );
}
