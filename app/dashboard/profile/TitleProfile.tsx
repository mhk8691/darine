"use client";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

export default function TitleProfile() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      {isDesktop && (
        <Typography variant="h6" fontSize={22} sx={{ color: "text.title" }}>
          اطلاعات پروفایل شما
        </Typography>
      )}
    </>
  );
}
