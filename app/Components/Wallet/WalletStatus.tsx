"use client";
import priceFormater from "@/app/core/PriceFormater";
import { Grid, Stack, Typography } from "@mui/material";
import Card from "../Container/Container";
import { useEffect, useState } from "react";

export default function WalletStatus() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("eyeState");
    if (stored !== null) {
      setVisible(stored === "true");
    }
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid size={4}>
        <Card
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
            py: "27px",
          }}
        >
          <Typography variant="body1" fontSize={14} sx={{ color: "#C2C2BA" }}>
            موجودی طلا
          </Typography>
          <Stack direction={"row"} gap={0.5} alignItems={"center"}>
            <Typography
              variant="body1"
              fontSize={20}
              fontWeight={500}
              sx={{ color: "text.title" }}
            >
              {visible ? "۰" : "***"}
            </Typography>
            <Typography
              variant="body1"
              fontSize={18}
              fontWeight={500}
              sx={{ color: "text.title" }}
            >
              گرم
            </Typography>
          </Stack>
        </Card>
      </Grid>
      <Grid size={4}>
        <Card
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
            py: "27px",
          }}
        >
          <Typography variant="body1" fontSize={14} sx={{ color: "#C2C2BA" }}>
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
              fontSize={20}
              sx={{ color: "text.title" }}
            >
              {visible ? "۰" : "***"}
            </Typography>
            <Typography
              variant="body1"
              fontSize={18}
              fontWeight={500}
              sx={{ color: "text.title" }}
            >
              تومان
            </Typography>
          </Stack>
        </Card>
      </Grid>
      <Grid size={4}>
        <Card
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
            py: "27px",
          }}
        >
          <Typography variant="body1" fontSize={14} sx={{ color: "#C2C2BA" }}>
            قیمت فعلی طلا ۱۸ عیار
          </Typography>
          <Stack direction={"row"} gap={0.5} alignItems={"center"}>
            <Typography
              variant="body1"
              fontSize={20}
              sx={{ color: "text.title" }}
              fontWeight={500}
            >
              {priceFormater(17329000)}
            </Typography>
            <Typography
              variant="body1"
              fontSize={18}
              sx={{ color: "text.title" }}
              fontWeight={500}
            >
              تومان
            </Typography>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}
