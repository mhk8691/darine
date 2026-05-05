"use client";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export default function Title() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      {isDesktop && (
        <Typography variant="h6" fontSize={22} sx={{ color: "text.title" }}>
          سفارش کارت هدیه
        </Typography>
      )}
    </>
  );
}
