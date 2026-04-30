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
  
      {isDesktop ? (
        <CustomTabs tabList={tabs}>{children}</CustomTabs>
      ) : (
        <>{children}</>
      )}
    </Card>
  );
}