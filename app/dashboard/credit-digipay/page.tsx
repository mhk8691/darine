import CreditContainer from "@/app/Components/CreditContainer/CreditContainer";
import { Box, Grid, Typography } from "@mui/material";
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
          title="خرید اعتباری با دیجی‌پی "
          options={[
            "خرید آنی طلا بدون نیاز به پرداخت نقدی",
            "امکان نقدکردن طلای خریداری شده در لحظه",
            "تحویل فیزیکی به‌صورت شمش در هر زمان",
          ]}
          tooltip="توجه: خرید شما با 5.5 درصد کارمزد محاسبه می‌شود."
          icon={
            <svg
              width="32"
              height="32"
              id="digipay"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="#0040ff"
            >
              <path
                fillRule="evenodd"
                d="M14 4.833A3.333 3.333 0 0010.667 1.5H4v1.111a3.333 3.333 0 003.333 3.333H14v-1.11zm0 3.334V7.056H7.333l-.125.002A3.333 3.333 0 004 10.388V16.5h1.111l.125-.002a3.333 3.333 0 003.208-3.331V11.5h2.223l.125-.002A3.333 3.333 0 0014 8.167z"
                clipRule="evenodd"
              ></path>
            </svg>
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
