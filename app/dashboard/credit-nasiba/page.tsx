import CreditContainer from "@/app/Components/CreditContainer/CreditContainer";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
const GoldenUnderline = ({ children }: { children: ReactNode }) => {
  return (
    <Box component="span" position="relative" display="inline-block">
      <Box
        width="120%"
        position="absolute"
        height={12}
        bgcolor="#8A751D"
        borderRadius="999px"
        bottom={2}
        left={"50%"}
        sx={{ transform: "translateX(-50%)" }}
        zIndex={0}
      />

      <Box component="span" position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
};
export default function page() {
  return (
    <Grid container>
      <Grid size={12}>
        <CreditContainer
          description="با استفاده از سرویس خرید اقساطی طلاسی، می‌توانید بدون نیاز به پرداخت نقدی، طلا بخرید."
          title="خرید اعتباری با نسیبا "
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
