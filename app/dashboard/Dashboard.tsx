"use client";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Container from "../Components/Container/Container";
import Trading from "./limit-order/Trading";
import MobileAppbar from "./MobileAppbar";
import Banners from "./Banners";

export default function Dashboard() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      {isDesktop ? (
        <>
          <Grid
            size={{
              md: 5.5,
              xs: 12,
            }}
          >
            <Trading />
          </Grid>
          <Grid
            size={{
              md: 6.5,
              xs: 12,
            }}
          >
            <Container
              style={{
                height: {
                  xs: 160,
                  md: 400,
                },
                justifyContent: "center",
                flexDirection: "row",
                alignItems: {
                  xs: "flex-start",
                  md: "center",
                },
              }}
            >
              <Typography variant="h2" fontSize={12}>
                نمودار دارایی پس از ۲ روز بعد از اولین خرید شما فعال میشود.
              </Typography>
            </Container>
          </Grid>
        </>
      ) : (
        <>
          <Grid size={12}>
            <MobileAppbar />
          </Grid>
          <Grid size={12}>
            <Banners />
          </Grid>
        </>
      )}
    </>
  );
}
