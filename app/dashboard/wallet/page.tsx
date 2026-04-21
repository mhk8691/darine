import CircleAnimation from "@/app/Components/CircleAnimation/CircleAnimation";
import Card from "@/app/Components/Container/Container";
import OrderDetail from "@/app/Components/OrderDetail/OrderDetail";
import Wallet from "@/app/Components/Wallet/Wallet";
import priceFormater from "@/app/core/PriceFormater";
import { ToggleItemsType } from "@/app/core/Types";
import { Grid, Stack, Typography } from "@mui/material";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "کیف پول | دارینه",
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
    title: "واریز از نقره سی",
    value: "silverDeposit",
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
    <Grid container spacing={3}>
      <Grid size={6}>
        <Wallet type="wallet" />
        <Card
          style={{
            py: 2.5,
            justifyContent: "center",
            flexDirection: "row",
            mt: 3,
          }}
        >
          <Typography variant="h2" fontSize={12}>
            نمودار دارایی پس از ۲ روز بعد از اولین خرید شما فعال میشود.
          </Typography>
        </Card>
      </Grid>
      <Grid size={6}>
        <Card
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Stack direction={"row"} gap={2} alignItems={'center'}>
            <CircleAnimation type="red" />
            <Typography variant="body2" sx={{ color: "#C2C2BA" }}>
              قیمت فعلی طلا ۱۸ عیار:
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={0.5} alignItems={"center"}>
            <Typography
              variant="body1"
              fontSize={20}
              sx={{ color: "text.title" }}
              fontWeight={500}
            >
              {priceFormater(17329000)}
            </Typography>
            <Typography
              variant="body1"
              fontSize={18}
              sx={{ color: "text.title" }}
              fontWeight={500}
            >
              تومان
            </Typography>
          </Stack>
        </Card>
        <Card style={{ mb: 3 }}>
          <Typography
            variant="h2"
            fontSize={22}
            sx={{ color: "text.primary" }}
            fontWeight={"900"}
          >
            خلاصه فعالیت‌های شما
          </Typography>
          <Stack mt={4.5} direction={"column"} gap={2.5}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="body1" sx={{ color: "#C2C2BA" }}>
                مجموع دارایی شما
              </Typography>

              <Typography variant="h6" sx={{ color: "text.title" }}>
                *** تومان
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="body1" sx={{ color: "#C2C2BA" }}>
                سود شما
              </Typography>

              <Typography variant="h6" sx={{ color: "success.main" }}>
                *** تومان
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="body1" sx={{ color: "#C2C2BA" }}>
                طلا برداشت شده
              </Typography>

              <Typography variant="h6" sx={{ color: "text.title" }}>
                *** گرم
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="body1" sx={{ color: "#C2C2BA" }}>
                کارت هدیه های خریداری شده
              </Typography>

              <Typography variant="h6" sx={{ color: "text.title" }}>
                *** تومان
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="body1" sx={{ color: "#C2C2BA" }}>
                کارت هدیه های دریافت شده
              </Typography>

              <Typography variant="h6" sx={{ color: "text.title" }}>
                *** تومان
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="body1" sx={{ color: "#C2C2BA" }}>
                تومان درانتظار پردازش
              </Typography>

              <Typography variant="h6" sx={{ color: "text.title" }}>
                *** تومان
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="body1" sx={{ color: "#C2C2BA" }}>
                طلا درانتظار پردازش
              </Typography>

              <Typography variant="h6" sx={{ color: "text.title" }}>
                *** گرم
              </Typography>
            </Stack>
          </Stack>
        </Card>
        <Stack mt={3}>
          <OrderDetail
            type="chip"
            title="لیست تراکنش‌‌های اخیر"
            toggleItems={items}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
