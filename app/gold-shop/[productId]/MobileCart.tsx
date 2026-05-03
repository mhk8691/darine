"use client";
import priceFormater from "@/app/core/PriceFormater";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import Counter from "./Counter";

export default function MobileCart() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down("md"));
  if (!isDesktop) return null;
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={"background.default"}
      position={"fixed"}
      bottom={0}
      width={"100%"}
      p={2}
      sx={{ boxShadow: "0 0 20px background.paper" }}
    >
      <Stack direction={"row"} gap={1}>
        <Link href={"/gold-shop-basket"}>
          <Stack bgcolor={"primary.main"} p={1.5} borderRadius={2}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25 6.39192V5.58358C6.25 3.70858 7.75833 1.86692 9.63333 1.69192C11.8667 1.47525 13.75 3.23358 13.75 5.42525V6.57525"
                stroke="#10100F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7.49937 18.3327H12.4994C15.8494 18.3327 16.4494 16.991 16.6244 15.3577L17.2494 10.3577C17.4744 8.32435 16.891 6.66602 13.3327 6.66602H6.66603C3.1077 6.66602 2.52437 8.32435 2.74937 10.3577L3.37437 15.3577C3.54937 16.991 4.14937 18.3327 7.49937 18.3327Z"
                stroke="#10100F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12.9121 10.0007H12.9196"
                stroke="#10100F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7.07811 10.0007H7.08559"
                stroke="#10100F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Stack>
        </Link>
        <Counter />
      </Stack>
      <Stack direction={"column"} gap={1} alignItems={"flex-end"}>
        <Typography
          variant="body1"
          sx={{ color: "text.subtitle", fontSize: 12 }}
        >
          قیمت
        </Typography>
        <Typography variant="body2" fontSize={16}>
          {priceFormater(25294657)}
          <Box component={"span"} fontSize={12}>
            تومان
          </Box>
        </Typography>
      </Stack>
    </Stack>
  );
}
