import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AddressList from "./AddressList";

export default function AddressSetting() {
  return (
    <Stack direction={"column"} alignItems={"center"} gap={2}>
      {/* <Image src={"/images/location.svg"} alt="" width={77} height={77} />
      <Typography variant="body2" fontSize={18} sx={{ color: "#D9D9D3" }}>
        آدرس مورد نظر خود را اضافه کنید.
      </Typography> */}
      <AddressList />
    </Stack>
  );
}
