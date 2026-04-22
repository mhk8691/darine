import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Calculator from "./Calculator";
import Link from "next/link";
import { FaqItem } from "../core/Types";
import Faq from "../Components/Faq/Faq";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "محاسبه قیمت آنلاین | دارینه",
  description: "",
};
const faqData: FaqItem[] = [
  {
    id: "1",
    question: "چگونه می‌توانم قیمت نهایی طلای خود را محاسبه کنم؟",
    answer:
      "با وارد کردن وزن طلا، اجرت ساخت و قیمت روز طلا در ماشین حساب آنلاین، قیمت نهایی طلای شما به‌صورت خودکار محاسبه خواهد شد.",
  },
  {
    id: "2",
    question: "آیا مالیات بر ارزش افزوده برای کل طلا محاسبه می‌شود؟",
    answer:
      "خیر، از دی‌ماه ۱۴۰۰ به بعد، اصل طلای خریداری‌شده از مالیات معاف است و مالیات فقط برای اجرت ساخت و سود فروشنده محاسبه می‌شود.",
  },
  {
    id: "3",
    question: "تفاوت قیمت خرید و فروش طلا چیست؟",
    answer:
      "قیمت خرید پایین‌تر است و شامل اجرت، مالیات و کارمزد می‌شود، در حالی که قیمت فروش با کسر سود طلافروش و افت قیمت به مشتری پرداخت می‌شود.",
  },
  {
    id: "4",
    question: "طلای آب شده بدون اجرت چیست و چه مزیتی دارد؟",
    answer:
      "طلای آب‌شده بدون اجرت، طلایی است که فقط قیمت روز طلا در آن محاسبه می‌شود و هزینه اجرت ساخت ندارد. این گزینه برای پس‌انداز و سرمایه‌گذاری مناسب است.",
  },
  {
    id: "5",
    question: "آیا محاسبه آنلاین قیمت طلا دقیق است؟",
    answer:
      "بله، ابزارهای معتبر با استفاده از نرخ روز طلا و فرمول‌های دقیق، قیمت نهایی را به صورت آنلاین و لحظه‌ای محاسبه می‌کنند.",
  },
  {
    id: "6",
    question: "تخمین‌زن طلا چیست و چه کاربردی دارد؟",
    answer:
      "تخمین‌زن طلا ابزاری برای محاسبه سریع قیمت طلاست که به ویژه برای افرادی که معاملات مکرر انجام می‌دهند، مفید است.",
  },
  {
    id: "7",
    question:
      "آیا می‌توانم قیمت طلای ۱۸ عیار و ۲۴ عیار را به‌صورت آنلاین محاسبه کنم؟",
    answer:
      "بله، در ابزارهای آنلاین می‌توانید وزن و عیار طلای خود را وارد کنید تا قیمت نهایی با در نظر گرفتن اجرت، مالیات و کارمزد محاسبه شود.",
  },
];
export default function page() {
  return (
    <>
      <Container maxWidth={"lg"} sx={{ mt: 5 }}>
        <Stack direction={"column"} gap={0.5} alignItems={"center"}>
          <Typography
            variant="h6"
            fontSize={22}
            sx={{ color: "text.title" }}
            fontWeight={700}
          >
            محاسبه قیمت طلا به صورت آنلاین
          </Typography>
          <Typography
            variant="h6"
            fontSize={14}
            sx={{ color: "text.primary" }}
            fontWeight={700}
          >
            قیمت روز طلا ۲۷ فروردین ۱۴۰۵ : 17,612,000 تومان
          </Typography>
          <Typography variant="h6" fontSize={12} sx={{ color: "#D9D9D9" }}>
            بر اساس فرمول محاسبه اتحادیه طلا
          </Typography>
        </Stack>
        <Grid container spacing={3} mt={4}>
          <Calculator />
        </Grid>
        <Grid
          size={12}
          gap={3}
          flexDirection={"column"}
          display={"flex"}
          mt={3}
        >
          <Stack direction={"column"} gap={2}>
            <Typography
              variant="h6"
              fontSize={22}
              fontWeight={"700"}
              sx={{ color: "text.title" }}
            >
              محاسبه قیمت نهایی طلا
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              whiteSpace={"pre-line"}
              lineHeight={"32px"}
            >
              {`در زمان خرید طلا از طلا فروشی، یکی از عوامل موثر در قیمت نهایی محصول، اجرت ساخت است. در این صفحه، با وارد کردن اطلاعات لازم، می‌توانید با استفاده از ماشین حساب طلا قیمت نهایی طلای خود را محاسبه کنید و قیمت نهایی هر گرم طلای مورد نظر را مشاهده فرمایید.`}
              <br />
              پیشنهاد طلاسی به شما،
              <Box
                component={"span"}
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <Link href={""}>خرید طلای آب ‌شده</Link>
              </Box>{" "}
              با هدف پس‌انداز طلاهای کم‌اجرت و بدون اجرت است. شما می‌توانید به
              راحتی در طلاسی و با مبلغ دلخواه، طلای بدون اجرت خرید و فروش کنید.
            </Typography>
          </Stack>
          <Stack direction={"column"} gap={2}>
            <Typography
              variant="h6"
              fontSize={22}
              fontWeight={"700"}
              sx={{ color: "text.title" }}
            >
              نحوه محاسبه طلا
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              whiteSpace={"pre-line"}
              lineHeight={"32px"}
            >
              برای محاسبه طلا باید اجرت ساخت، سود طلافروش، مالیات، قیمت روز طلا
              و وزن طلا را در نظر داشته باشید. با فرمول زیر می‌توانید به‌راحتی
              حتی با ماشین حساب شخصی نیز قیمت نهایی طلا را محاسبه کنید:
              <br />
              <Box component={"span"} fontWeight={"700"}>
                قیمت نهایی طلا = وزن طلا × قیمت روز طلا × (۱ + اجرت ساخت) × (۱ +
                سود طلا فروش) + مالیات اجرت و سود طلا فروش
              </Box>
              <br />
              در نظر داشته باشید که برای محاسبه مبلغ نهایی، وزن سنگ و سایر موارد
              غیرطلا باید از وزن کل کسر شود.
            </Typography>
          </Stack>
          <Stack direction={"column"} gap={2}>
            <Typography
              variant="h6"
              fontSize={22}
              fontWeight={"700"}
              sx={{ color: "text.title" }}
            >
              محاسبه مالیات طلا
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              whiteSpace={"pre-line"}
              lineHeight={"32px"}
            >
              از دی‌ماه سال ۱۴۰۰، اصل طلای خریداری‌شده از مالیات بر ارزش افزوده
              معاف شده است و مالیات تنها برای اجرت ساخت و سود فروشنده محاسبه
              می‌شود.
            </Typography>
          </Stack>
          <Stack direction={"column"} gap={2}>
            <Typography
              variant="h6"
              fontSize={22}
              fontWeight={"700"}
              sx={{ color: "text.title" }}
            >
              محاسبه آنلاین قیمت طلا
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              whiteSpace={"pre-line"}
              lineHeight={"32px"}
            >
              تصور کنید قصد خرید یک قطعه طلا دارید. برای اطمینان از اینکه بهترین
              قیمت را پرداخت می‌کنید، به چه منبعی مراجعه خواهید کرد؟ در گذشته،
              پیدا کردن قیمت دقیق طلا کاری زمان‌بر و دشوار بود. اما امروزه، با
              چند کلیک ساده، می‌توانید به‌صورت آنلاین و لحظه‌ای{" "}
              <Box
                component={"span"}
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <Link href={""}>قیمت طلا</Link>
              </Box>{" "}
              را در هر کجای دنیا محاسبه کنید.
              <br />
              در این مقاله، به بررسی ابزارها و روش‌های مختلف محاسبه آنلاین قیمت
              طلا خواهیم پرداخت که یکی از آن‌ها محاسبه آنلاین قیمت طلای آب شده
              است؛ گزینه‌ای کاربردی برای کسانی که به دنبال خرید طلای بدون اجرت
              هستند.
            </Typography>
          </Stack>
          <Stack direction={"column"} gap={2}>
            <Typography
              variant="h6"
              fontSize={22}
              fontWeight={"700"}
              sx={{ color: "text.title" }}
            >
              فرمول محاسبه قیمت طلا و اجرت آن
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              whiteSpace={"pre-line"}
              lineHeight={"32px"}
            >
              برای محاسبه قیمت نهایی طلا و جواهرات، طلافروشان از فرمول مشخصی
              استفاده می‌کنند. در این فرمول، ابتدا وزن طلای ساخته‌شده را در نظر
              می‌گیرند و سپس با در نظر گرفتن اجرت ساخت، کارمزد معامله و قیمت روز
              هر گرم طلا، بهای نهایی محاسبه می‌شود.
              <br />
              <Box component={"span"} fontWeight={"bold"} color={"text.title"}>
                قیمت نهایی = وزن طلا × (مالیات بر ارزش افزوده + کارمزد معامله +
                اجرت ساخت + قیمت یک گرم طلا)
              </Box>
              <br />
              در این محاسبه، مالیات ۹ درصد از اجرت ساخت در نظر گرفته می‌شود و
              کارمزد معامله عموما ۷ درصد است.
            </Typography>
          </Stack>
          <Stack direction={"column"} gap={2}>
            <Typography
              variant="h6"
              fontSize={22}
              fontWeight={"700"}
              sx={{ color: "text.title" }}
            >
              مثال
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              whiteSpace={"pre-line"}
              lineHeight={"32px"}
            >
              فرض کنید وزن طلای شما ۴ گرم است، اجرت ساخت آن ۳۰ هزار تومان و قیمت
              هر گرم طلا ۱۵۰ هزار تومان:
              <br />
              <Box component={"ul"} mt={1}>
                <Box component={"li"}>
                  <Box
                    component={"span"}
                    fontWeight={"bold"}
                    color={"text.title"}
                  >
                    کارمزد معامله
                  </Box>{" "}
                  = ۷٪ قیمت طلا + اجرت = ۱۲۶۰۰ تومان
                </Box>
                <Box component={"li"}>
                  <Box
                    component={"span"}
                    fontWeight={"bold"}
                    color={"text.title"}
                  >
                    مالیات بر ارزش افزوده
                  </Box>{" "}
                  (۹٪ اجرت) = ۳۸۳۴ تومان
                </Box>
                <Box component={"li"}>
                  <Box
                    component={"span"}
                    fontWeight={"bold"}
                    color={"text.title"}
                  >
                    قیمت نهایی هر گرم طلا
                  </Box>{" "}
                  = ۱۵۰۰۰۰ + ۱۲۶۰۰ + ۳۰۰۰۰ + ۳۸۳۴ = ۱۹۶۴۳۴ تومان
                </Box>
                <Box component={"li"}>
                  {" "}
                  <Box
                    component={"span"}
                    fontWeight={"bold"}
                    color={"text.title"}
                  >
                    قیمت کل
                  </Box>{" "}
                  = ۴ × ۱۹۶۴۳۴ = ۷۸۵۷۳۶ تومان
                </Box>
              </Box>
            </Typography>
          </Stack>
          <Stack direction={"column"} gap={2}>
            <Typography
              variant="h6"
              fontSize={22}
              fontWeight={"700"}
              sx={{ color: "text.title" }}
            >
              محاسبه آنلاین قیمت طلا ۱۸ عیار
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              whiteSpace={"pre-line"}
              lineHeight={"32px"}
            >
              محاسبه آنلاین قیمت طلا ۱۸ عیار در وب‌سایت‌ها و اپلیکیشن‌های معتبر
              مانند طلاسی، ساده و دقیق است. با وارد کردن وزن طلا و نرخ روز،
              ابزار به‌صورت خودکار قیمت نهایی را با در نظر گرفتن اجرت، مالیات و
              کارمزد محاسبه می‌کند. <br /> این ابزارها، همانند یک ماشین حساب طلا
              هوشمند عمل می‌کنند و کاربران را در تصمیم‌گیری دقیق برای خرید و
              فروش طلا یاری می‌دهند.
            </Typography>
          </Stack>
          <Stack direction={"column"} gap={2}>
            <Typography
              variant="h6"
              fontSize={22}
              fontWeight={"700"}
              sx={{ color: "text.title" }}
            >
              مزایای محاسبه آنلاین قیمت خرید طلا از مشتری
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              whiteSpace={"pre-line"}
              lineHeight={"32px"}
            >
              فرض کنید وزن طلای شما ۴ گرم است، اجرت ساخت آن ۳۰ هزار تومان و قیمت
              هر گرم طلا ۱۵۰ هزار تومان:
              <br />
              <Box component={"ul"} mt={1}>
                <Box component={"li"} fontWeight={"bold"} color={"text.title"}>
                  صرفه‌جویی در زمان
                </Box>
                <Box component={"li"} fontWeight={"bold"} color={"text.title"}>
                  افزایش دقت و شفافیت در محاسبه طلا
                </Box>
                <Box component={"li"} fontWeight={"bold"} color={"text.title"}>
                  دسترسی به قیمت لحظه‌ای و مقایسه بهتر
                </Box>
              </Box>
            </Typography>
          </Stack>
          <Stack direction={"column"} gap={2}>
            <Typography
              variant="h6"
              fontSize={22}
              fontWeight={"700"}
              sx={{ color: "text.title" }}
            >
              تفاوت محاسبه قیمت طلا برای خرید و فروش
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              whiteSpace={"pre-line"}
              lineHeight={"32px"}
            >
              قیمت خرید عموما پایین‌تر از قیمت فروش است. هنگام خرید، قیمت نهایی
              شامل اجرت، مالیات و کارمزد می‌شود. در حالی که هنگام فروش، طلافروش
              با کسر مواردی از جمله افت قیمت و سود خود، مبلغی را به مشتری پرداخت
              می‌کند.
            </Typography>
          </Stack>
          <Stack direction={"column"} gap={2}>
            <Typography
              variant="h6"
              fontSize={22}
              fontWeight={"700"}
              sx={{ color: "text.title" }}
            >
              تخمین‌زن طلا چیست؟
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              whiteSpace={"pre-line"}
              lineHeight={"32px"}
            >
              تخمین‌زن طلا ابزاری کاربردی برای محاسبه سریع و دقیق قیمت طلاست.
              این ابزار، مخصوصاً برای کسانی که فعالیت مداوم در بازار طلا دارند،
              مفید است و کمک می‌کند تا بهتر از نوسانات بازار استفاده کنند.
            </Typography>
          </Stack>
          <Stack direction={"column"} gap={2}>
            <Typography
              variant="h6"
              fontSize={22}
              fontWeight={"700"}
              sx={{ color: "text.title" }}
            >
              قیمت طلا با اجرت و مالیات امروز
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              whiteSpace={"pre-line"}
              lineHeight={"32px"}
            >
              برای مشاهده قیمت طلا با اجرت و مالیات امروز، می‌توانید به وب‌سایت
              طلاسی مراجعه کنید. این پلتفرم با ارائه محاسبه آنلاین قیمت طلای آب
              شده و سایر خدمات، اطلاعاتی دقیق و لحظه‌ای را در اختیار کاربران
              قرار می‌دهد.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={12}>
          <Faq faqData={faqData} titleStyle={{ mt: 3 }} />
        </Grid>
      </Container>
      <Divider sx={{mt:11.5}} />
    </>
  );
}
