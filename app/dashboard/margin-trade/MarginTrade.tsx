"use client";
import Card from "@/app/Components/Container/Container";
import CustomTabs from "@/app/Components/Tabs/CustomTabs";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import Trading from "./Trading";
const tabs = [{ title: "فروش " }];
const children: ReactNode[] = [<Trading key={1} />];
export default function MarginTrade() {
  return (
    <Card style={{ px: 0 }}>
      <Stack px={4}>
        <Typography variant="h6" fontSize={22}>
          سفارش تعهدی
        </Typography>
      </Stack>
      <CustomTabs tabList={tabs}>{children}</CustomTabs>
    </Card>
  );
}
