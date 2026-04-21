import CreditContainer from "@/app/Components/CreditContainer/CreditContainer";
import GoldenUnderline from "@/app/Components/CreditContainer/GoldenUnderline";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "خرید اعتباری با نسیبا | دارینه",
  description: "",
};
export default function page() {
  return (
    <Grid container>
      <Grid size={12}>
        <CreditContainer
          description="با استفاده از سرویس خرید اقساطی طلاسی، می‌توانید بدون نیاز به پرداخت نقدی، طلا بخرید."
          title={
            <Typography variant="h6" fontSize={22}>
              خرید اعتباری با
              <Box component={"span"} color={"#007DFA"}>
                {" "}
                نسیبا
              </Box>
            </Typography>
          }
          options={[
            "خرید آنی طلا بدون نیاز به پرداخت نقدی",
            "امکان نقدکردن طلای خریداری شده در لحظه",
            "تحویل فیزیکی به‌صورت شمش در هر زمان",
          ]}
          tooltip="توجه: خرید شما با 3.5 درصد کارمزد محاسبه می‌شود."
          icon={
            <Image
              src={"/images/simple/nasiba.webp"}
              alt=""
              width={58}
              height={47}
            />
          }
          banner={
            <Typography
              variant="h6"
              sx={{
                wordSpacing: 7,
                flexDirection: "row",
                alignItems: "center",
                mt: 3,
              }}
            >
              خرید <GoldenUnderline>اقساطـــی</GoldenUnderline> طلا،{"  "}
              <GoldenUnderline> ساده‌تر </GoldenUnderline>
              {"  "} از <GoldenUnderline> همیشه </GoldenUnderline>
            </Typography>
          }
        />
      </Grid>
    </Grid>
  );
}
