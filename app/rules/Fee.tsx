"use client";
import { Divider, Stack, Typography, useTheme } from "@mui/material";

export default function Fee() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  return (
    <Stack
      py={3}
      px={2}
      mt={2}
      direction={"column"}
      gap={2.5}
      bgcolor={isDarkMode ? "#B29727" : "#FFFBEB"}
      borderRadius={2}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 14,
          }}
          sx={{ color: "text.title" }}
        >
          کارمزد خرید
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 14,
          }}
          sx={{ color: "text.title" }}
        >
          ۱ درصد
        </Typography>
      </Stack>
      <Divider sx={{ borderStyle: "dashed", borderColor: "primary.main" }} />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 14,
          }}
          sx={{ color: "text.title" }}
        >
          کارمزد خرید
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            xs: 12,
            sm: 14,
          }}
          sx={{ color: "text.title" }}
        >
          ۱ درصد
        </Typography>
      </Stack>
    </Stack>
  );
}
