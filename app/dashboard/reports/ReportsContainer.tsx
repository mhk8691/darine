'use client'
import CustomTabs from "@/app/Components/Tabs/CustomTabs"
import { ReactNode, useEffect, useState } from "react";
import TradesTable from "./TradesTable";
import DepositTable from "./DepositTable";
import WithdrawTable from "./WithdrawTable";
import { getReports } from "@/lib/getReports/getReports";
import OrdersTable from "./OrdersTable";
const tabs = [
  { title: 'معاملات' },
  { title: 'واریز' },
  { title: 'برداشت' },
  {
    title:'سفارش ها'
  }
];

const tabUrl = ['gold', 'deposit', 'withdraw',  'orders'];
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
  const children: ReactNode[] = [
  <TradesTable   data={data}  key={1} />,
  <DepositTable  data={data}  key={2} />,
  <WithdrawTable data={data}   key={3} />,
  <OrdersTable  data={data} key={4} />,
];
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
