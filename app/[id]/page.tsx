import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ChartGold from "../Components/Chart/ChartGold";
import Faq from "../Components/Faq/Faq";
import ApplicationDownload from "../Components/Tables/ProductTable/ApplicationDownload";
import HowBuyGold from "../Components/Tables/ProductTable/HowBuyGold";
import TradeCard from "../Components/Tables/ProductTable/TradeCard";
import { FaqItem } from "../core/Types";
import Trading from "../dashboard/trades/Trading/Trading";
import { data as goldData } from "../gold-price/page";
import ProductTableContainer from "./ProductTableContainer";
import SimilarContainer from "./SimilarContainer";

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

interface Props {
  params: { productId: string };
}

export default function page({ params }: Props) {
  console.log(params.productId);
  const newData = [goldData[0].data];
  newData.push(goldData[1].data);
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        px: {
          xs: "16px !important",
          md: "24px !important",
          lg: "40px !important",
        },
        mt: 5,
      }}
    >
      <Grid container spacing={7}>
        <Grid size={12} container spacing={3}>
          <Grid size={12} container spacing={1.5}>
            <Grid
              size={{
                xs: 12,
                md: 7,
                lg: 7.5,
              }}
            >
              <Stack
                direction={"row"}
                gap={{
                  xs: 1,
                  md: 3.5,
                }}
                alignItems={"center"}
              >
                <Stack
                  width={{
                    xs: "40px",
                    md: "80px",
                  }}
                  height={{
                    xs: "40px",
                    md: "80px",
                  }}
                >
                  <Image
                    alt=""
                    src={"/images/gold.webp"}
                    width={80}
                    height={80}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Stack>
                <Typography
                  variant="h6"
                  fontSize={{
                    xs: 16,
                    md: 38,
                  }}
                  fontWeight={600}
                  sx={{ color: "text.title" }}
                >
                  قیمت طلای ۱۸ عیار
                </Typography>
              </Stack>
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 5,
                lg: 4.5,
              }}
            >
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <TradeCard isDetail />
              </Stack>
            </Grid>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 7,
              lg: 7.5,
            }}
          >
            <ChartGold
              positionPrice="top"
              cardStyle={{ pt: 3.5, pb: 2.5 }}
              chartHeight="240px"
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 5,
              lg: 4.5,
            }}
          >
            <Trading />
          </Grid>
        </Grid>
        <Grid size={12}>
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={{
              xs: 14,
              md: 22,
            }}
            sx={{ color: "text.title" }}
          >
            قیمت طلای ۱۸ عیار امروز
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 10,
              md: 14,
            }}
            sx={{
              color: "text.muted",
              mb: 1.5,
              mt: {
                xs: 1,
                md: 2,
              },
            }}
          >
            بازه‌ی تغییرات قیمت ۲۴ ساعت تعیین شده است
          </Typography>
          <ProductTableContainer />
        </Grid>
        <SimilarContainer data={newData} />
        <Grid size={12} container spacing={3}>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <ApplicationDownload />
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
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
