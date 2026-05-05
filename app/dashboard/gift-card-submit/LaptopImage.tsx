"use client";
import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function LaptopImage() {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const isDarkMode = theme.palette.mode === "dark";
  return (
    <>
      {isDownMd && (
        <Grid size={12}>
          <Stack direction={"row"} justifyContent={"center"} mt={3}>
            <Image
              src={`/images/${isDarkMode ? "submitGiftCardDark" : "submitGiftCard"}.webp`}
              alt=""
              width={"320"}
              height={"321"}
            />
          </Stack>
        </Grid>
      )}
    </>
  );
}
