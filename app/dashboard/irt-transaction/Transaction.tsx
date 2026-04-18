"use client";
import Card from "@/app/Components/Container/Container";
import CustomTabs from "@/app/Components/Tabs/CustomTabs";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
const tabs = [{ title: "واریز" }, { title: "برداشت" }];
const children: ReactNode[] = [<Deposit key={1} />, <Withdraw key={2} />];
export default function Transaction() {
  return (
    <Card style={{ px: 0 }}>
      <Typography variant="h6" fontSize={22} mb={1} px={4}>
        واریز و برداشت
      </Typography>
      <CustomTabs tabList={tabs}>{children}</CustomTabs>
    </Card>
  );
}
