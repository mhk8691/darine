import Card from "@/app/Components/Container/Container";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import CustomTabs from "@/app/Components/Tabs/CustomTabs";
import { ToggleItemsType } from "@/app/core/Types";
import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";
const dealItems: ToggleItemsType[] = [
  { title: "خرید", value: "buy", id: 1 },
  { title: "فروش", value: "sell", id: 2 },
];
const depositItems: ToggleItemsType[] = [
  { title: "درگاه پرداخت", value: "paymentGateway", id: 1 },
  { title: "واریز مستقیم", value: "directDeposit", id: 2 },
  { title: "واریز از نقره سی", value: "silverDeposit", id: 3 },
];
const withdrawItems: ToggleItemsType[] = [
  { title: "برداشت به حساب بانکی", value: "bankAccount", id: 1 },
  { title: "برداشت به نقره سی", value: "silver", id: 2 },
];
const giftItems: ToggleItemsType[] = [
  { title: "خریداری شده", value: "buy", id: 1 },
  { title: "دریافت شده", value: "receive", id: 2 },
];
const receiveItems: ToggleItemsType[] = [
  { title: "حضوری", value: "buy", id: 1 },
  { title: "درب منزل", value: "recive", id: 2 },
];
const autoItems: ToggleItemsType[] = [
  { title: "کارت", value: "card", id: 1 },
  { title: "واریز", value: "deposit", id: 2 },
];

const children: ReactNode[] = [
  <OrderDetail
    key={1}
    emptyMessage="معامله ای برای شما به ثبت نرسیده است"
    noCard
    toggleItems={dealItems}
    type="toggle"
  />,
  <OrderDetail
    key={2}
    emptyMessage="واریزی برای شما به ثبت نرسیده است"
    noCard
    toggleItems={depositItems}
    type="toggle"
  />,
  <OrderDetail
    key={3}
    emptyMessage="برداشتی برای شما به ثبت نرسیده است"
    noCard
    toggleItems={withdrawItems}
    type="toggle"
  />,
  <OrderDetail
    key={4}
    emptyMessage="کارت هدیه‌ای توسط شما خریداری نشده است."
    noCard
    toggleItems={giftItems}
    type="toggle"
  />,
  <OrderDetail
    key={5}
    emptyMessage="سفارشی برای شما به ثبت نرسیده است"
    noCard
    toggleItems={receiveItems}
    type="toggle"
  />,
  <OrderDetail
    key={6}
    emptyMessage="سفارشی برای شما به ثبت نرسیده است"
    noCard
    toggleItems={[]}
    type="toggle"
  />,
  <OrderDetail
    key={7}
    emptyMessage="اعتباری برای شما به ثبت نرسیده است"
    noCard
    toggleItems={[]}
    type="toggle"
  />,
  <OrderDetail
    key={8}
    emptyMessage="کارتی برای شما به ثبت نرسیده است"
    noCard
    toggleItems={autoItems}
    type="toggle"
  />,
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
