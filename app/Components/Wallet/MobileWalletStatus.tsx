import { Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function MobileWalletStatus({
  visible,
  isDesktop,
}: {
  visible: boolean;
  isDesktop: boolean;
}) {
  return (
    <Stack direction={"row"} justifyContent={"center"}>
      <Stack
        direction={"row"}
        gap={2}
        alignItems="center"
        border={1}
        borderColor={"background.paper"}
        bgcolor={"background.default"}
        borderRadius={2.5}
        justifyContent={"center"}
        py={2}
        width={isDesktop ? "95%" : "100%"}
      >
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={0.5}
          width={"100%"}
        >
          {isDesktop && (
            <Image
              alt=""
              src={"/images/simple/goldWallet.svg"}
              width={26}
              height={100}
              style={{ height: "auto" }}
            />
          )}
          <Typography
            variant="body1"
            fontSize={{
              xs: 10,
              sm: 12,
            }}
            sx={{ color: "#C2C2BA" }}
          >
            موجودی طلا
          </Typography>
          <Stack
            direction={"row"}
            gap={0.5}
            alignItems={"center"}
            fontWeight={500}
          >
            <Typography
              variant="body1"
              fontSize={{
                xs: 14,
                sm: 16,
              }}
              sx={{ color: "text.title" }}
            >
              {visible ? "۰" : "***"}
            </Typography>
            <Typography
              variant="body1"
              fontSize={{
                xs: 10,
                sm: 12,
              }}
              fontWeight={500}
              sx={{ color: "text.title" }}
            >
              گرم
            </Typography>
          </Stack>
        </Stack>

        <Divider orientation="vertical" flexItem />

        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          gap={0.5}
        >
          {isDesktop && (
            <Image
              alt=""
              src={"/images/simple/irtWallet.svg"}
              width={26}
              height={100}
              style={{ height: "auto" }}
            />
          )}
          <Typography
            variant="body1"
            fontSize={{
              xs: 10,
              sm: 12,
            }}
            sx={{ color: "#C2C2BA" }}
          >
            موجودی تومان
          </Typography>
          <Stack
            direction={"row"}
            gap={0.5}
            alignItems={"center"}
            fontWeight={500}
          >
            <Typography
              variant="body1"
              fontSize={{
                xs: 14,
                sm: 16,
              }}
              sx={{ color: "text.title" }}
            >
              {visible ? "۰" : "***"}
            </Typography>
            <Typography
              variant="body1"
              fontSize={{
                xs: 10,
                sm: 12,
              }}
              fontWeight={500}
              sx={{ color: "text.title" }}
            >
              تومان
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
