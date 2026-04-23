"use client";
import Card from "@/app/Components/Container/Container";
import CustomTabs from "@/app/Components/Tabs/CustomTabs";
import { Divider, Stack, useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ReactNode, useEffect, useState } from "react";
import Trading from "./Trading";

const tabs = [{ title: "فروش " }];
const children: ReactNode[] = [<Trading key={1} />];

export default function MarginTrade() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("eyeState");
    if (stored !== null) {
      setVisible(stored === "true");
    }
  }, []);

  return (
    <Card style={{ px: 0 }}>
      <Stack px={4}>
        {isDesktop && (
          <Typography variant="h6" fontSize={22}>
            سفارش تعهدی
          </Typography>
        )}
      </Stack>
      {!isDesktop && (
        <>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={0.5}
          >
            <Typography variant="body1" fontSize={14} sx={{ color: "#C2C2BA" }}>
              موجودی طلا
            </Typography>
            <Stack direction={"row"} gap={0.5} alignItems={"center"}>
              <Typography
                variant="body1"
                fontSize={18}
                fontWeight={500}
                sx={{ color: "text.title" }}
              >
                {visible ? "۰" : "***"}
              </Typography>
              <Typography
                variant="body1"
                fontSize={14}
                fontWeight={500}
                sx={{ color: "text.title" }}
              >
                گرم
              </Typography>
            </Stack>
          </Stack>
          <Divider sx={{ mt: 3 }} />
        </>
      )}
      {isDesktop ? (
        <CustomTabs tabList={tabs}>{children}</CustomTabs>
      ) : (
        <>{children}</>
      )}
    </Card>
  );
}