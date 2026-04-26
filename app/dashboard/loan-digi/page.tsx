import CreditContainer from "@/app/Components/CreditContainer/CreditContainer";
import GoldenUnderline from "@/app/Components/CreditContainer/GoldenUnderline";
import { Box, Grid, Typography } from "@mui/material";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "دریافت اعتبار خرید دیجی پی | دارینه",
  description: "",
};
export default function page() {
  return (
    <Grid container>
      <Grid size={12}>
        <CreditContainer
          description="در سرویس اعتبار خرید طلاسی، می‌توانید با سپرده‌گذاری در کیف پول خود، از دیجی‌پی بین ۱۰ تا ۱۰۰ میلیون تومان اعتبار خرید کالا دریافت کنید. این اعتبار در کیف پول دیجی‌پی شما شارژ می‌شود و قابل استفاده در فروشگاه‌های طرف قرارداد دیجی‌پی است."
          title={
            <Typography
              variant="h6"
              fontSize={{
                xs: 16,
                sm: 22,
              }}
            >
              دریافت اعتبار
              <Box component={"span"} color={"#007DFA"}>
                {" "}
                دیجی پی
              </Box>
            </Typography>
          }
          descriptionSize={16}
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
          optionTitle="نکات مهم:"
          options={[
            " مبلغ سپرده‌(% بیشتر از اعتبار خرید درخواستی)، نقش ضامن دارد و تا زمانی که در کیف پول طلاسی باقی بماند، اعتبار شما فعال خواهد بود.",
            " با این سپرده می‌توانید در طلاسی طلا خرید و فروش کنید، اما امکان برداشت ریالی یا تحویل فیزیکی آن وجود ندارد.",
            " بازپرداخت خرید اقساطی از طریق دیجی‌پی انجام می‌شود و ارتباطی با طلاسی ندارد.",
          ]}
          banner={
            <Typography
              variant="h6"
              sx={{
                wordSpacing: 1,
                flexDirection: "row",
                alignItems: "center",
                mt: 3,
              }}
              fontSize={{
                xs: 14,
                sm: 22,
              }}
            >
              اعتبار خرید کالا <GoldenUnderline>بدون ضامن</GoldenUnderline> ، با
              پشتوانه <GoldenUnderline>طلاسی</GoldenUnderline>
            </Typography>
          }
        />
      </Grid>
    </Grid>
  );
}
