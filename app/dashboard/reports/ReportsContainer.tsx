'use client'
import CustomTabs from "@/app/Components/Tabs/CustomTabs"
import { ReactNode, useEffect, useState } from "react";
import TradesTable from "./TradesTable";
import DepositTable from "./DepositTable";
import WithdrawTable from "./WithdrawTable";
import GiftTable from "./GiftTable";
import ReceiveTable from "./ReceiveTable";
import { getReports } from "@/lib/getReports/getReports";
const tabs = [
  { title: 'معاملات' },
  { title: 'واریز' },
  { title: 'برداشت' },
  { title: 'کارت هدیه' },
  { title: 'تحویل فیزیکی' },
];
const children: ReactNode[] = [
  <TradesTable key={1} />,
  <DepositTable key={2} />,
  <WithdrawTable key={3} />,
  <GiftTable key={4} />,
  <ReceiveTable key={5} />,
];
const tabUrl = ['trades', 'deposits', 'withdrawals', 'giftcards', 'physical_orders'];
export default function ReportsContainer() {
      const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getReports(tabUrl[value]);
      setData(response);
    };
    getData();
  }, [value]);
  return (
         <CustomTabs
            tabList={tabs}
            style={{
              width: 'auto',
              fontSize: 18,
              mb: 0.5,
            }}
            lineHeight="6px"
            tabsStyle={{ px: 0, mt: 3, minWidth: 'auto' }}
            tabStyle={{ minWidth: 'auto' }}
            noPadding={true}
            setCustomValue={setValue}
          >
            {children}
          </CustomTabs>
  )
}
