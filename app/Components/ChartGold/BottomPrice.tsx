import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import priceFormater from "../PriceFormater/PriceFormater";

export default function BottomPrice() {
  return (
    <>
      <Divider />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={1.5}
        mb={1}
        px={2}
      >
        <Stack direction={"column"} alignItems={"center"} gap={0.5}>
          <Typography variant="body2" sx={{color:'#C2C2BA'}}>
            بالاترین قیمت
          </Typography>
          <Typography variant="body1">{priceFormater(18680000)}</Typography>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} gap={0.5}>
          <Typography variant="body2" sx={{color:'#C2C2BA'}}>
            پایین‌ترین قیمت
          </Typography>
          <Typography variant="body1">{priceFormater(16320000)}</Typography>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} gap={0.5}>
          <Typography variant="body2" sx={{color:'#C2C2BA'}}>
            بالاترین قیمت
          </Typography>
          <Typography variant="body1" color="error">
            {(1.11).toLocaleString()} درصد
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
