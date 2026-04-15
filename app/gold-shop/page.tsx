import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Faq from "../Components/Faq/Faq";
import { FaqItem } from "../core/Types";
import ProductsContainer from "./ProductsContainer";
import Status from "./Status";
const faqData: FaqItem[] = [
  {
    id: "1",
    question: "آیا خرید شمش طلا در طلاسی امن است؟",
    answer:
      "بله. طلاسی دارای مجوزهای قانونی و زیرساخت معاملاتی امن است و تمامی تراکنش‌ها به‌صورت شفاف انجام می‌شود.",
  },
  {
    id: "2",
    question: "آیا خرید آنلاین شمش طلا اجرت دارد؟",
    answer:
      "خیر، تنها در زمان تحویل فیزیکی اجرت ساخت پرداخت می‌کنید. خرید و فروش آنلاین فقط شامل کارمزد ۱٪ است. (اپلیکیشن ۰.۵٪)",
  },
  {
    id: "3",
    question: "حداقل موجودی برای تحویل شمش چقدر است؟",
    answer:
      "حداقل موجودی مورد نیاز برای تحویل فیزیکی طلا، ۳۰ سوت (میلی گرم) است.",
  },
  {
    id: "4",
    question: "آیا می‌توانم شمش را قسطی بخرم؟",
    answer:
      "بله. طلاسی امکان خرید قسطی بدون ضامن و با چک صیادی یا سفته الکترونیک را فراهم کرده است.",
  },
  {
    id: "5",
    question: "آیا می‌توانم قیمت دلخواه برای خرید مشخص کنم؟",
    answer:
      "بله. با ابزار سفارش با قیمت در طلاسی می‌توانید تعیین کنید در چه قیمتی خرید انجام شود.",
  },
];
export default function page() {
  return (
    <>
      <Status />

      <Container maxWidth={"xl"} sx={{ px: "40px !important", mt: 5 }}>
        <Grid container gap={6}>
          <Grid size={12}>
            <Stack direction={"row"} gap={3.5} alignItems={"center"}>
              <Image
                alt=""
                src={"/images/titleImg.webp"}
                width={80}
                height={80}
              />
              <Typography
                variant="h6"
                fontSize={30}
                sx={{ color: "text.title" }}
              >
                خرید شمش طلا
              </Typography>
            </Stack>
          </Grid>
          <Grid size={12}>
            <ProductsContainer title="شمش های ۱۸ عیار" />
          </Grid>
          <Grid size={12}>
            <ProductsContainer title="شمش های ۲۴ عیار" />
          </Grid>
          <Grid size={12}>
            <ProductsContainer title="شمش های پارسیان" />
          </Grid>
          <Grid size={12}>
            <Faq faqData={faqData} titleStyle={{ fontSize: 30 }} />
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ mt: 11.5 }} />
    </>
  );
}
