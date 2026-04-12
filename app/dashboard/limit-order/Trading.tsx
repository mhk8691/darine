"use client";
import Card from "@/app/Components/Card/Card";
import CustomTabs from "@/app/Components/Tabs/CustomTabs";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

import Trade from "./Trade";
const tabs = ["خرید ", "فروش"];
const children: ReactNode[] = [
  <Trade key={1} type="buy" />,
  <Trade key={2} type="sell" />,
];
export default function Trading() {
  return (
    <Card style={{ px: 0 }}>
      <Typography variant="h6" fontSize={22} mb={1} px={4}>
        خرید و فروش طلا
      </Typography>
      <CustomTabs tabList={tabs}>{children}</CustomTabs>
    </Card>
  );
}
