import {
  Container,
  Divider,
  Stack,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import Image from "next/image";
import Form from "./Form";
const partnerItems = [
  {
    title: "API - دریافت‌کنندگان سرویس خرید و فروش طلا",
    description: `با سرویس‌های API طلاسی، معاملات خرید و فروش طلا به صورت یکپارچه، امن و قابل اعتماد در پلتفرم شما مدیریت می‌شود و کاربران تجربه‌ای سریع، ساده و حرفه‌ای خواهند داشت. این ابزار به شما کمک می‌کند خدمات خود را به سرعت گسترش دهید، تعامل کاربران را افزایش دهید و با ارائه تجربه‌ای متمایز، جایگاه برند خود را در بازار تثبیت کنید.`,
    images: [
      { title: "اسنپ پی", src: "snapp-pay.svg" },
      { title: "بله", src: "Bale.svg" },
      { title: "بانکت", src: "banket.svg" },
      { title: "آپ", src: "asan-pardakht.svg" },
      { title: "ستاره اول", src: "setare-aval.svg" },
      { title: "تارا", src: "tara.svg" },
      { title: "علی بابا", src: "alibaba.svg" },
    ],
  },
  {
    title: "White Label – دریافت‌کنندگان نسخه اختصاصی",
    description: `نسخه اختصاصی طلاسی به شما امکان می‌دهد تجربه طلای دیجیتال را کاملاً با برند و رابط کاربری خود سفارشی کنید و خدماتی امن، حرفه‌ای و منحصر به فرد به کاربران ارائه دهید. این راهکار شما را قادر می‌سازد برند خود را به سطح جدیدی از اعتماد و اعتبار برسانید، خدمات متمایزی ارائه کنید و جایگاه خود را به عنوان یک پیشرو در بازار طلا تثبیت نمایید.`,
    images: [
      { title: "اوانو", src: "evano.svg" },
      { title: "خانومی", src: "khanoumi.svg" },
      { title: "ازکی‌سرمایه", src: "azki-sarmayeh.svg" },
      { title: "پات لایف", src: "pot-life.svg" },
      { title: "یکتانت", src: "yektanet.svg" },
      { title: "کیپا", src: "keepa.svg" },
    ],
  },
  {
    title: "ارائه‌دهندگان تسهیلات خرید اقساطی",
    description: `با همکاری با طلاسی، می‌توانید به مشتریان خود امکان خرید طلا با شرایط اقساطی آسان و امن بدهید و تجربه‌ای راحت، منعطف و جذاب از خرید طلا برای آن‌ها فراهم کنید. این همکاری نه تنها وفاداری مشتریان را افزایش می‌دهد، بلکه به برند شما قدرت رقابتی و تصویری حرفه‌ای در بازار می‌بخشد و نشان می‌دهد که شما همیشه راهکارهای نوآورانه و مشتری‌محور ارائه می‌دهید.`,
    images: [
      { title: " دیجی‌پی", src: "digi-pay.svg" },
      { title: "اسنپ پی", src: "snapp-pay.svg" },
      { title: "ازکی وام", src: "azki-sarmayeh.svg" },
      { title: "نسیبا", src: "nasiba.svg" },
      { title: "فیروزه", src: "firoozeh.svg" },
      { title: "کمان لند", src: "kamanlend.svg" },
    ],
  },
  {
    title: "ارائه‌دهندگان تسهیلات اعتبار خرید کالا",
    description: `با اتصال به شبکه طلاسی، اعتبار خرید کالا را به کاربران خود ارائه دهید و با راهکارهای پرداخت امن و متنوع، تجربه خریدی سریع، ساده و مطمئن برای مشتریانتان ایجاد کنید. این فرصت به شما اجازه می‌دهد خدمات خود را گسترده‌تر کنید، ارزش افزوده بیشتری برای مشتریان خلق کنید و برندتان را به عنوان یک شریک قابل اعتماد و پیشرو در بازار معرفی نمایید.`,
    images: [
      { title: " دیجی‌پی", src: "digi-pay.svg" },
      { title: "ازکی‌وام", src: "azki-sarmayeh.svg" },
      { title: "کیپا", src: "keepa.svg" },
      { title: "گرند بازار", src: "grand-bazaar.svg" },
    ],
  },
  {
    title: "ارائه‌دهندگان سرویس خدمات",
    description: `همکاری با طلاسی به شما امکان می‌دهد خدمات تخصصی مرتبط با بازار طلا — از خدمات مالی و پرداختی امن، تسویه و درگاه‌های عملیاتی تا لجستیک ارسال، پشتیبانی و سرویس‌های پشتیبانی مشتری — را در پلتفرم خود ارائه دهید. این مشارکت بستری کارآمد و ارزش‌آفرین برای توسعه کسب‌وکار و ارتقای تجربه‌ کاربری فراهم می‌کند.`,
    images: [
      { title: " جیبیت", src: "jibit.svg" },
      { title: "تومن", src: "toman.svg" },
      { title: "وندار", src: "vendar.svg" },
      { title: "دیجی‌اکسپرس", src: "digi-express.svg" },
    ],
  },
];
export default function page() {
  return (
    <>
      <Container maxWidth={"xl"} sx={{ px: "40px !important", mt: 5 }}>
        <Stack direction={"row"} alignItems={"center"}>
          <Stack direction={"column"} gap={3} width={"50%"}>
            <Typography variant="h6" fontSize={40} sx={{ color: "text.title" }}>
              همکــــاران دارینه
            </Typography>
            <Typography variant="h6" fontSize={30} sx={{ color: "text.title" }}>
              ما به همکاری با بیش از ۲۰ برندهای شناخته شده افتخار می‌کنیم!
            </Typography>
            <Typography
              variant="h6"
              fontSize={18}
              fontWeight={400}
              sx={{ color: "#D9D9D9" }}
              lineHeight={"25.6px"}
            >
              ما با انتخاب همکاری‌های حرفه‌ای و مبتنی بر اعتماد، کیفیت و نوآوری
              را در اولویت قرار داده‌ایم و در کنار شرکای خود برای خلق ارزش
              پایدار و رضایت مشتریان گام برمی‌داریم.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: 16,
                py: 2,
                width: "fit-content",
                px: 6,
                borderRadius: 2,
                mt: 2,
                fontWeight: "600",
              }}
            >
              درخواست همکاری
            </Button>
          </Stack>
          <Stack width={"50%"} direction={"row"} justifyContent={"flex-end"}>
            <Image
              src={"/images/partners-main.svg"}
              alt=""
              width={520}
              height={530}
              style={{
                width: "70%",
                height: "auto",
              }}
            />
          </Stack>
        </Stack>
        <Stack direction={"column"} gap={20} mt={15.5}>
          {partnerItems.map((item) => (
            <Stack direction={"column"} gap={5.5} key={item.title}>
              <Typography
                variant="h6"
                fontSize={30}
                sx={{ color: "text.title" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                fontSize={20}
                sx={{ color: "#D9D9D9" }}
              >
                {item.description}
              </Typography>
              <Grid
                container
                spacing={4}
                px={9}
                justifyContent={"center"}
                mt={5}
              >
                {item.images.map((image) => (
                  <Grid
                    size={2}
                    key={image.title}
                    border={1}
                    borderColor={"background.paper"}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    p={3}
                    borderRadius={2}
                  >
                    <Stack direction={"column"} gap={1} alignItems={"center"}>
                      <Image
                        alt=""
                        src={`/images/partners/${image.src}`}
                        width={110}
                        height={76}
                        style={{
                          width: "100%",
                        }}
                      />
                      <Typography
                        variant="body2"
                        fontSize={16}
                        sx={{ color: "#D9D9D9" }}
                      >
                        {image.title}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          ))}
        </Stack>
        <Form />
      </Container>
      <Divider sx={{ mt: 5 }} />
    </>
  );
}
