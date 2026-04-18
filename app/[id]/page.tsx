import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ChartGold from "../Components/ChartGold/ChartGold";
import Faq from "../Components/Faq/Faq";
import ApplicationDownload from "../Components/Tables/ApplicationDownload";
import GoldTable from "../Components/Tables/GoldTable";
import HowBuyGold from "../Components/Tables/HowBuyGold";
import TradeCard from "../Components/Tables/TradeCard";
import { FaqItem } from "../core/Types";
import Trading from "../dashboard/trades/Trading/Trading";
import PriceTables from "./PriceTable";

const faqData: FaqItem[] = [
  {
    id: "1",
    question:
      "طلای ۱۸ عیار چیست و چرا بیشتر در بازار جواهرات ایران استفاده می‌شود؟",
    answer:
      "طلای ۱۸ عیار شامل ۷۵٪ طلای خالص و ۲۵٪ فلزات دیگر است. این ترکیب باعث می‌شود طلا هم ارزشمند باشد و هم چکش‌خوار برای ساخت جواهرات، به همین دلیل برای ساخت جواهر در ایران استاندارد است.",
  },
  {
    id: "2",
    question: "واحدهای اندازه‌گیری طلا کدامند و هر کدام چه کاربردی دارند؟",
    answer: `گرم: رایج‌ترین واحد برای خرید و فروش طلا
مثقال: واحد سنتی ایرانی (۴٫۶۰۸ گرم) برای معاملات سنتی
اونس: واحد بین‌المللی (۳۱٫۱۰۳۵ گرم) برای قیمت جهانی
کیلوگرم: برای معاملات عمده و صنعتی
سکه‌های طلا: شامل سکه تمام، نیم، ربع و گرمی`,
  },
  {
    id: "3",
    question:
      "چطور می‌توانم قیمت طلای ۱۸ عیار امروز را به صورت لحظه‌ای مشاهده کنم؟",
    answer:
      "می‌توانید از سایت‌های تخصصی طلا مانند طلاسی و در همین صفحه یا کانال‌های اقتصادی معتبر استفاده کنید تا قیمت روزانه و لحظه‌ای طلای ۱۸ عیار را مشاهده کنید.",
  },
  {
    id: "4",
    question: "نوسانات قیمت طلای ۱۸ عیار به چه عواملی بستگی دارد؟",
    answer:
      "قیمت طلا تحت تاثیر عوامل جهانی، نرخ ارز، عرضه و تقاضا، تورم، سیاست‌های اقتصادی و تحولات سیاسی داخلی و خارجی قرار دارد.",
  },
  {
    id: "5",
    question: "تاثیر نرخ دلار، یورو و ریال بر قیمت طلا چگونه است؟",
    answer:
      "چون قیمت جهانی طلا با دلار اعلام می‌شود، نوسانات دلار و یورو و همچنین تغییرات ارزش ریال باعث افزایش یا کاهش قیمت ریالی طلا در ایران می‌شوند.",
  },
  {
    id: "6",
    question: "آیا عرضه و تقاضا در بازار داخلی طلا می‌تواند قیمت را تغییر دهد؟",
    answer:
      "بله، افزایش تقاضا در مناسبت‌ها یا کاهش عرضه باعث بالا رفتن قیمت می‌شود و برعکس رکود یا فروش طلا توسط مردم قیمت را کاهش می‌دهد.",
  },
  {
    id: "7",
    question:
      "چگونه تحولات سیاسی و اقتصادی داخلی و بین‌المللی روی قیمت طلای ۱۸ عیار تاثیر می‌گذارد؟",
    answer:
      "جنگ‌ها، انتخابات، تنش‌های سیاسی و اپیدمی‌ها می‌توانند قیمت طلا را موقتی بالا یا پایین ببرند. این تاثیر معمولاً کوتاه‌مدت و مقطعی است اما گاهی شدید و فوری اتفاق می‌افتد.",
  },
  {
    id: "8",
    question:
      "برای سرمایه‌گذاری کوتاه‌مدت و بلندمدت، طلای ۱۸ عیار گزینه مناسبی است؟",
    answer:
      "طلای ۱۸ عیار به دلیل نقدشوندگی بالا و استاندارد بودن در بازار ایران، برای سرمایه‌گذاری کوتاه‌مدت و بلندمدت مناسب است و بیشتر مردم از آن برای ذخیره ارزش استفاده می‌کنند.",
  },
];

const coinData = [
  { name: "سکه امامی", price: 18010000, unit: "تومان", persentage: -2.93 },
  {
    name: "سکه تمام بهار آزادی",
    price: 17990000,
    unit: "تومان",
    persentage: -3.36,
  },
  { name: "نیم سکه", price: 96400000, unit: "تومان", persentage: -7.21 },
  { name: "ربع سکه", price: 54300000, unit: "تومان", persentage: -9.19 },
  { name: "سکه گرمی", price: 27200000, unit: "تومان", persentage: -6.84 },
  { name: "سکه پارسیان", price: 21900000, unit: "تومان", persentage: -0.81 },
];

const goldData = [
  {
    name: "طلای 18 عیار (کرم)",
    price: 17575000,
    persentage: -0.81,
    unit: "تومان",
  },
  {
    name: "طلای 21 عیار (کرم)",
    price: 20504166,
    persentage: -0.81,
    unit: "تومان",
  },
  {
    name: "طلای 24 عیار (کرم)",
    price: 23316166,
    persentage: -0.81,
    unit: "تومان",
  },
  { name: "1 مشاغل طلا", price: 76131385, persentage: -0.81, unit: "تومان" },
  { name: "انس جهانی طلا", price: 4824, persentage: 0.81, unit: "دلار" },
  { name: "آرشده نقدی", price: 76131385, persentage: -0.81, unit: "تومان" },
  { name: "طلای دست دوم", price: 17340725, persentage: -0.81, unit: "تومان" },
];

export default function page() {
  return (
    <Container maxWidth={"xl"} sx={{ px: "40px !important", mt: 5 }}>
      <Grid container spacing={7}>
        <Grid size={12} container spacing={3}>
          <Grid size={12} container>
            <Grid size={8}>
              <Stack direction={"row"} gap={3.5} alignItems={"center"}>
                <Image
                  alt=""
                  src={"/images/gold.webp"}
                  width={80}
                  height={80}
                />
                <Typography
                  variant="h6"
                  fontSize={38}
                  sx={{ color: "text.title" }}
                >
                  قیمت طلای ۱۸ عیار
                </Typography>
              </Stack>
            </Grid>
            <Grid size={4}>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <TradeCard isDetail />
              </Stack>
            </Grid>
          </Grid>
          <Grid size={8}>
            <ChartGold
              positionPrice="top"
              cardStyle={{ pt: 3.5, pb: 2.5 }}
              chartHeight="240px"
            />
          </Grid>
          <Grid size={4}>
            <Trading />
          </Grid>
        </Grid>
        <Grid size={12}>
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={22}
            sx={{ color: "text.title" }}
          >
            قیمت طلای ۱۸ عیار امروز
          </Typography>
          <Typography
            variant="body2"
            fontSize={14}
            sx={{ color: "#C2C2BA", mb: 1.5, mt: 2 }}
          >
            بازه‌ی تغییرات قیمت ۲۴ ساعت تعیین شده است
          </Typography>
          <GoldTable
            data={[
              {
                currentRate: 17596000,
                minPriceDay: 17580000,
                maxPriceDay: 17831000,
                dayChange: "0.694-",
                monthChange: "4.246",
                weeklyChart: 1,
              },
            ]}
            heads={[
              "نرخ فعلی",
              "پایین‌ترین قیمت روز",
              "بالاترین قیمت روز",
              "تغییر ۱ روزه",
              "تغییر ۱ ماهه",
              "نمودار هفتگی",
            ]}
          />
        </Grid>
        <Grid size={12} container spacing={3}>
          <Grid size={12}>
            <Typography
              variant="h6"
              fontWeight={700}
              fontSize={22}
              sx={{ color: "text.title" }}
            >
              قیمت طلا و سکه امروز
            </Typography>
          </Grid>
          <Grid size={6}>
            <PriceTables title="قیمت لحظه‌ای طلا" data={goldData} />
          </Grid>
          <Grid size={6}>
            <PriceTables title="قیمت لحظه‌ای سکه" data={coinData} />
          </Grid>
        </Grid>
        <Grid size={12} container spacing={3}>
          <Grid size={6}>
            <ApplicationDownload />
          </Grid>
          <Grid size={6}>
            <HowBuyGold />
          </Grid>
        </Grid>
        <Grid size={12}>
          <Faq faqData={faqData} />
        </Grid>
      </Grid>
    </Container>
  );
}
