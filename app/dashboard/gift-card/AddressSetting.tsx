"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import AddAddress from "./AddAddress/AddAddress";
interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function AddressSetting({ open, setOpen }: Props) {
  return (
    <Stack direction={"column"} alignItems={"center"} gap={2}>
      <Stack
        component={"div"}
        onClick={() => setOpen(true)}
        sx={{ cursor: "pointer" }}
        direction={"column"}
        alignItems={"center"}
        gap={2}
      >
        <Image src={"/images/location.svg"} alt="" width={77} height={77} />
        <Typography
          variant="body2"
          fontSize={{
            xs: 12,
            sm: 18,
          }}
          sx={{ color: "#D9D9D3" }}
        >
          آدرس مورد نظر خود را اضافه کنید.
        </Typography>
      </Stack>
      {/* <AddressList /> */}
      <AddAddress open={open} setOpen={setOpen} />
    </Stack>
  );
}
