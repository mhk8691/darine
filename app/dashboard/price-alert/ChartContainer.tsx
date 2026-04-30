"use client";
import ChartGold from "@/app/Components/ChartGold/ChartGold";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export default function ChartContainer() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      {isDesktop && (
        <Grid
          size={{
            xs: 12,
            md: 7.1,
          }}
        >
          <ChartGold
            positionPrice="bottom"
            priceStyle={{
              mt: {
                xs: 2,
                md: 6,
                lg: 3.5,
              },
              mb: {
                xs: 0,
                lg: 1,
              },
            }}
            cardStyle={{
              pt: {
                xs: 2,
                md: 6,
                lg: 4.5,
              },
              height: "100%",
            }}
            dividerStyle={{
              mt: {
                xs: 0,
                md: 4,
              },
            }}
          />
        </Grid>
      )}
    </>
  );
}
