import React from "react";
import Container from "../Container/Container";
import Typography from "@mui/material/Typography";
import priceFormater from "@/app/core/PriceFormater";
import { Box, Stack, Button } from "@mui/material";
import Link from "next/link";
interface Props {
  isDetail: boolean;
}
export default function TradeCard({ isDetail }: Props) {
  return (
    <Container
      style={{
        py: 1.5,
        px: 2,
        border: 1,
        borderColor: "primary.main",
        bgcolor: "#292926",
        width: isDetail ? "100%" : "50%",
        height: "100%",
      }}
    >
      <Stack
        direction={isDetail ? "row-reverse" : "column"}
        justifyContent={isDetail ? "space-between" : "center"}
        alignItems={isDetail ? "center" : "flex-start"}
      >
        <Typography variant="body2" sx={{ color: "#ADADA9" }} fontSize={10}>
          ۱۶:۳۷:۲۲ - ۲۵ فروردین ۱۴۰۵
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#C2C2BA", mt: isDetail ? 0 : 1.5 }}
          fontSize={14}
        >
          قیمت لحظه‌ای طلا ۱۸ عیار(گرم)
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"flex-end"}
        justifyContent={"space-between"}
        mb={isDetail ? 1.5 : 0}
      >
        <Typography
          variant="body2"
          sx={{ color: "text.title", mt: 1.5 }}
          fontSize={20}
        >
          {priceFormater(17785000)}{" "}
          <Box component={"span"} fontSize={16}>
            تومان
          </Box>
        </Typography>
        <Stack
          direction={isDetail ? "row" : "column"}
          gap={1}
          alignItems={"center"}
        >
          <Typography variant="body2" fontSize={10} sx={{ color: "#75751" }}>
            (۲۴ ساعت)
          </Typography>
          <Stack
            bgcolor={"#691818"}
            color={"#D12F2F"}
            borderRadius={1.5}
            px={1}
            py={0.5}
          >
            -0.875٪
          </Stack>
        </Stack>
      </Stack>
      {!isDetail && (
        <Link href={"/dashboard/trades"}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: 12,
              fontWeight: "600",
              borderRadius: 2,
              py: 1,
              mt: 2,
            }}
          >
            خرید طلای آب شده
          </Button>
        </Link>
      )}
    </Container>
  );
}
