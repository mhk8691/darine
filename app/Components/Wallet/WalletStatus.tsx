"use client";
import priceFormater from "@/app/core/PriceFormater";
import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import CircleAnimation from "../CircleAnimation/CircleAnimation";
import Card from "../Containers/Container/Container";
import MobileWalletStatus from "./MobileWalletStatus";

export default function WalletStatus() {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  useEffect(() => {
    const stored = localStorage.getItem("eyeState");
    if (stored !== null) {
      setVisible(stored === "true");
    }
  }, []);
  return (
    <>
      {isDesktop ? (
        <Grid
          container
          spacing={{
            xs: 1,
            md: 3,
          }}
          mb={{
            xs: 0,
            sm: 2,
            lg: 0,
          }}
        >
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
              <Typography
                variant="body1"
                fontSize={14}
                sx={{ color: "text.muted" }}
              >
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
              <Typography
                variant="body1"
                fontSize={14}
                sx={{ color: "text.muted" }}
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
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                py: "27px",
              }}
            >
              <Stack
                display={{
                  xs: "none",
                  md: "flex",
                }}
              >
                <CircleAnimation type="red" />
              </Stack>
              <Stack direction={"column"} gap={0.5} justifyContent={"center"}>
                <Typography
                  variant="body1"
                  fontSize={14}
                  sx={{ color: "text.muted" }}
                >
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
              </Stack>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <MobileWalletStatus isDesktop={isDesktop} visible={visible} />
      )}
    </>
  );
}
