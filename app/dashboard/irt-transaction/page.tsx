import Card from "@/app/Components/Container/Container";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import WalletStatus from "@/app/Components/Wallet/WalletStatus";
import { ToggleItemsType } from "@/app/core/Types";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Grid, Stack, Typography } from "@mui/material";
import Transaction from "./Transaction";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "تراکنش های تومان | دارینه",
  description: "",
};
const items: ToggleItemsType[] = [
  {
    title: "واریز",
    value: "deposit",
    id: 1,
    emptyMessage: "واریزی برای شما به ثبت نرسیده است",
  },
  {
    title: "واریز مستقیم",
    value: "directDeposit",
    id: 2,
    emptyMessage: "واریز باشناسه ای برای شما به ثبت نرسیده است",
  },
  {
    title: "واریز ارزی",
    value: "currencyDeposit",
    id: 3,
    emptyMessage: "واریزی برای شما به ثبت نرسیده است",
  },
  {
    title: "برداشت",
    value: "withdraw",
    id: 4,
    emptyMessage: "برداشتی برای شما به ثبت نرسیده است",
  },
  {
    title: "برداشت به نقره سی",
    value: "silverWithdraw",
    id: 5,
    emptyMessage: "برداشتی برای شما به ثبت نرسیده است",
  },
];

export default function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 2,

        lg: 3,
      }}
    >
      <Grid size={12}>
        <WalletStatus />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 4.8,
        }}
        order={{
          xs: 2,
          md: 1,
        }}
      >
        <Transaction />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 7.2,
        }}
        order={{
          xs: 1,
          md: 2,
        }}
      >
        <Card
          style={{
            color: "#EF8011",
            px: {
              xs: 2,
              sm: 4,
            },
            py: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <InfoOutlinedIcon />
            <Typography
              variant="h6"
              fontSize={{
                xs: 14,
                md: 22,
              }}
            >
              توجه
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              md: 16,
            }}
            sx={{ color: "text.secondary", mt: "10px" }}
          >
            واریز ریالی فقط از حساب بانکی به نام خودتان امکان‌پذیر است. در غیر
            این صورت، مبلغ در حالت انتظار قرار می‌گیرد و پس از پیگیری شما، طی ۳
            روز کاری به حساب شما باز می‌گردد.
          </Typography>
        </Card>
      </Grid>
      <Grid size={12} order={3}>
        <OrderDetail
          title="لیست تراکنش های اخیر"
          toggleItems={items}
          type="chip"
        />
      </Grid>
    </Grid>
  );
}
