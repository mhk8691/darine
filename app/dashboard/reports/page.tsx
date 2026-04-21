import Card from "@/app/Components/Container/Container";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import CustomTabs from "@/app/Components/Tabs/CustomTabs";
import { ToggleItemsType } from "@/app/core/Types";
import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "گزارشات | دارینه",
  description: "",
};

const dealItems: ToggleItemsType[] = [
  { title: "خرید", value: "buy", id: 1, emptyMessage: "معامله ای برای شما به ثبت نرسیده است" },
  { title: "فروش", value: "sell", id: 2, emptyMessage: "معامله ای برای شما به ثبت نرسیده است" },
];
const depositItems: ToggleItemsType[] = [
  { title: "درگاه پرداخت", value: "paymentGateway", id: 1, emptyMessage: "واریزی برای شما به ثبت نرسیده است" },
  { title: "واریز مستقیم", value: "directDeposit", id: 2, emptyMessage: "واریز باشناسه ای برای شما به ثبت نرسیده است" },
  {
    title: "واریز از نقره سی",
    value: "silverDeposit",
    id: 3,
    emptyMessage: "واریزی برای شما به ثبت نرسیده است",
  },
];
const withdrawItems: ToggleItemsType[] = [
  {
    title: "برداشت به حساب بانکی",
    value: "bankAccount",
    id: 1,
    emptyMessage: "برداشتی برای شما به ثبت نرسیده است",
  },
  { title: "برداشت به نقره سی", value: "silver", id: 2, emptyMessage: "برداشتی برای شما به ثبت نرسیده است" },
];
const giftItems: ToggleItemsType[] = [
  { title: "خریداری شده", value: "buy", id: 1, emptyMessage: "کارت هدیه‌ای توسط شما خریداری نشده است." },
  { title: "دریافت شده", value: "receive", id: 2, emptyMessage: "کارت هدیه‌ای برای شما به ثبت نرسیده است" },
];
const receiveItems: ToggleItemsType[] = [
  { title: "حضوری", value: "buy", id: 1, emptyMessage: "سفارشی برای شما به ثبت نرسیده است" },
  { title: "درب منزل", value: "recive", id: 2, emptyMessage: "سفارشی برای شما به ثبت نرسیده است" },
];
const autoItems: ToggleItemsType[] = [
  { title: "کارت", value: "card", id: 1, emptyMessage: "کارتی برای شما به ثبت نرسیده است" },
  { title: "واریز", value: "deposit", id: 2, emptyMessage: "واریزی برای شما به ثبت نرسیده است" },
];

const children: ReactNode[] = [
  <OrderDetail key={1} noCard toggleItems={dealItems} type="toggle" />,
  <OrderDetail key={2} noCard toggleItems={depositItems} type="toggle" />,
  <OrderDetail key={3} noCard toggleItems={withdrawItems} type="toggle" />,
  <OrderDetail key={4} noCard toggleItems={giftItems} type="toggle" />,
  <OrderDetail key={5} noCard toggleItems={receiveItems} type="toggle" />,
  <OrderDetail key={6} noCard toggleItems={[]} type="toggle" emptyMessage={'سفارشی برای شما به ثبت نرسیده است'} />,
  <OrderDetail key={7} noCard toggleItems={[]} type="toggle" emptyMessage={'اعتباری برای شما به ثبت نرسیده است'} />,
  <OrderDetail key={8} noCard toggleItems={autoItems} type="toggle" />,
  ,
];
const tabs = [
  { title: "معاملات" },
  { title: "واریز" },
  { title: "برداشت" },
  { title: "کارت هدیه" },
  { title: "تحویل فیزیکی" },
  { title: "سفارش با قیمت" },
  { title: "اعتبار خرید" },
  { title: "پس‌انداز خودکار" },
];
export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card>
          <Typography variant="h6" fontSize={22}>
            گزارش ها
          </Typography>
          <CustomTabs
            tabList={tabs}
            style={{
              width: "auto",
              fontSize: 18,
              mb: 0.5,
            }}
            lineHeight="6px"
            tabsStyle={{ px: 0, mt: 3 }}
            noPadding={true}
          >
            {children}
          </CustomTabs>
        </Card>
      </Grid>
    </Grid>
  );
}
