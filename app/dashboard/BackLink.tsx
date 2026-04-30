"use client";

import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

export default function BackLink({ title }: { title: string }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  if(!isMobile) return null
  return (
    <Stack
      direction={"row"}
      gap={1}
      alignItems={"center"}
      component={"div"}
      onClick={() => router.back()}
    >
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.7441 4.94141L17.8025 9.99974L12.7441 15.0581"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M3.63477 10H17.6598"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <Typography
        variant="body1"
        fontWeight={600}
        sx={{ color: "text.title", mb: 0.5 }}
      >
        {title}
      </Typography>
    </Stack>
  );
}
