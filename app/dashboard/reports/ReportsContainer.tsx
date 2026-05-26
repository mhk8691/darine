'use client'
import CustomTabs from "@/app/Components/Tabs/CustomTabs"
import { ReactNode, useEffect, useState } from "react";
import TradesTable from "./TradesTable";
import DepositTable from "./DepositTable";
import WithdrawTable from "./WithdrawTable";
import { getReports } from "@/lib/getReports/getReports";
import { isAxiosError } from "axios";
import { showSnackbar } from "@/app/Components/Snackbar/Snackbar";
const tabs = [
  { title: 'معاملات' },
  { title: 'واریز' },
  { title: 'برداشت' },
  // {
  //   title:'سفارش ها'
  // }
];

const tabUrl = ['gold', 'deposit', 'withdraw'];
export default function ReportsContainer() {
  const [tradeParams,setTradeParams] = useState('buy')
    const [depositParams,setDepositParams] = useState('paymentGateway')
    const [withdrawParams,setWithdrawParams] = useState('bankAccount')
      const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try{
  const response = await getReports(tabUrl[value],tabUrl[value] === 'gold' ? tradeParams:tabUrl[value] === 'deposit' ? depositParams:withdrawParams);
      setData(response || []);
      }
    
      catch (error: unknown) {
    if (isAxiosError(error)) {
      showSnackbar(error.response?.data.message);
    }
  }
    };
    getData();
  }, [value,tradeParams,depositParams,withdrawParams]);
  const children: ReactNode[] = [
  <TradesTable  setTradeParams={setTradeParams} data={data}  key={1} />,
  <DepositTable  data={data} setDepositParams={setDepositParams}  key={2} />,
  <WithdrawTable data={data} setWithdrawParams={setWithdrawParams}   key={3} />,
  // <OrdersTable  data={data} key={4} />,
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
