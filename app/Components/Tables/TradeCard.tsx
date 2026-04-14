import React from "react";
import Container from "../Container/Container";
import Typography from "@mui/material/Typography";
import priceFormater from "@/app/core/PriceFormater";
import { Box, Stack, Button } from "@mui/material";

export default function TradeCard() {
  return (
    <Container
      style={{
        py: 1.5,
        px:2,
        border: 1,
        borderColor: "primary.main",
        bgcolor: "#292926",
        width: "50%",
        height:'100%'
      }}
    >
      <Typography variant="body2" sx={{ color: "#ADADA9" }} fontSize={10}>
        ۱۶:۳۷:۲۲ - ۲۵ فروردین ۱۴۰۵
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#C2C2BA", mt: 1.5 }}
        fontSize={14}
      >
        قیمت لحظه‌ای طلا ۱۸ عیار(گرم)
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"flex-end"}
        justifyContent={"space-between"}
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
        <Stack direction={'column'} gap={1} alignItems={'center'}> 
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
      <Button
        variant="contained"
        color="primary"
        sx={{ fontSize: 12, fontWeight: "600", borderRadius: 2, py: 1, mt: 2 }}
      >
        خرید طلای آب شده
      </Button>
    </Container>
  );
}
