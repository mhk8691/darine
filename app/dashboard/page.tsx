import { Grid, Typography } from "@mui/material";
import ChartGold from "../Components/ChartGold/ChartGold";
import Wallet from "../Components/Wallet/Wallet";
import Trading from "./trades/Trading/Trading";
import Card from "../Components/Card/Card";

export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12} container>
        <Grid size={4.8}>
          <Wallet type="dashboard" />
        </Grid>
        <Grid size={7.2}>
          <ChartGold positionPrice="both" chartHeight="176px" />
        </Grid>
      </Grid>
      <Grid size={12} container>
        <Grid size={5.5}>
          <Trading />
        </Grid>
        <Grid size={6.5}>
          <Card
            style={{
              py: 25.4,
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Typography variant="h2" fontSize={12}>
              نمودار دارایی پس از ۲ روز بعد از اولین خرید شما فعال میشود.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
