"use client";
import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function DesktopImage() {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isDownMd && (
        <Grid size={12}>
          <Stack direction={"row"} justifyContent={"center"} mt={3}>
            <Image
              src={"/images/submitGiftCardDark.webp"}
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
