import Card from "@/app/Components/Container/Container";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import WalletStatus from "@/app/Components/Wallet/WalletStatus";
import { ToggleItemsType } from "@/app/core/Types";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Grid, Stack, Typography } from "@mui/material";
import Transaction from "./Transaction";
const items: ToggleItemsType[] = [
  { title: "واریز", value: "deposit", id: 1, emptyMessage: "واریزی برای شما به ثبت نرسیده است" },
  { title: "واریز مستقیم", value: "directDeposit", id: 2, emptyMessage: "واریز باشناسه ای برای شما به ثبت نرسیده است" },
  { title: "واریز ارزی", value: "currencyDeposit", id: 3, emptyMessage: "واریزی برای شما به ثبت نرسیده است" },
  { title: "برداشت", value: "withdraw", id: 4, emptyMessage: "برداشتی برای شما به ثبت نرسیده است" },
  {
    title: "برداشت به نقره سی",
    value: "silverWithdraw",
    id: 5,
    emptyMessage: "برداشتی برای شما به ثبت نرسیده است",
  },
];

export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <WalletStatus />
      </Grid>
      <Grid size={4.8}>
        <Transaction />
      </Grid>
      <Grid size={7.2}>
        <Card
          style={{
            color: "#EF8011",
          }}
        >
          <Stack direction={"row"} alignItems={"flex-end"} gap={1}>
            <Typography variant="body2" fontSize={16}>
              <InfoOutlinedIcon sx={{ mt: 1 }} />
            </Typography>
            <Typography variant="h6" fontSize={22} sx={{ mb: 0.3 }}>
              توجه
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: "10px" }}
          >
            واریز ریالی فقط از حساب بانکی به نام خودتان امکان‌پذیر است. در غیر
            این صورت، مبلغ در حالت انتظار قرار می‌گیرد و پس از پیگیری شما، طی ۳
            روز کاری به حساب شما باز می‌گردد.
          </Typography>
        </Card>
      </Grid>
      <Grid size={12}>
        <OrderDetail
          title="لیست تراکنش های اخیر"
          toggleItems={items}
          type="chip"
        />
      </Grid>
    </Grid>
  );
}
