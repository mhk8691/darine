import OrderDetail from "@/app/Components/Tables/DetailTable/OrderDetail";
import { Grid } from "@mui/material";
import { Metadata } from "next";
import BackLink from "../BackLink";
import GiftCardList from "./GiftCardList";
export const metadata: Metadata = {
  title: "لیست کارت هدیه | دارینه",
  description: "",
};
export default function page() {
  return (
    <Grid container>
      <BackLink title="لیست کارت های هدیه شما" />

      <GiftCardList />
    </Grid>
  );
}
