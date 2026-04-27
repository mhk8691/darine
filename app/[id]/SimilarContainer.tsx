"use client";
import { Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import PriceTables from "./PriceTable";
import MobileTable from "../Components/Tables/MobileTable";
import { TableGoldDataType } from "../core/Types";
import LaptopTable from "../Components/Tables/LaptopTable";

interface Props {
  data: TableGoldDataType[][];
}

export default function SimilarContainer({ data}: Props) {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {isUpMd ? (
        <Grid size={12} container spacing={3}>
          <Grid size={12}>
            <Typography
              variant="h6"
              fontWeight={700}
              fontSize={22}
              sx={{ color: "text.title" }}
            >
              قیمت طلا و سکه امروز
            </Typography>
          </Grid>
          <Grid size={6}>
            <PriceTables title="قیمت لحظه‌ای طلا" data={data[0]} />
          </Grid>
          <Grid size={6}>
            <PriceTables title="قیمت لحظه‌ای سکه" data={data[1]} />
          </Grid>
        </Grid>
      ) : (
        <Stack>
          <Typography
            variant="h6"
            fontSize={{
              xs: 14,
              md: 22,
            }}
            sx={{
              color: "text.title",
              mb: {
                xs: 1.5,
                md: 3,
              },
            }}
          >
            قیمت طلا و سکه
          </Typography>
          <LaptopTable items={data[0]} />
          <LaptopTable items={data[1]} />
        </Stack>
      )}
    </>
  );
}
