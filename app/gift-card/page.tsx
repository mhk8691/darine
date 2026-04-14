import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import "../Components/Tables/video-style.css";
import Gift from "./Gift";
import RequestForm from "./RequestForm";
import Description from "./Description";
import Faq from "../Components/Faq/Faq";
import { FaqItem } from "../core/Types";

const faqData: FaqItem[] = [
  {
    id: "1",
    question: "کارت هدیه سازمانی طلاسی چیست و چه مزایایی دارد؟",
    answer:
      "کارت هدیه سازمانی طلاسی یک هدیه لوکس و ماندگار است که نه تنها به عنوان پاداش برای عملکرد شایسته کارمندان و شرکای تجاری استفاده می‌شود، بلکه به عنوان یک سرمایه‌گذاری بلندمدت نیز ارزش خود را حفظ می‌کند.",
  },
  {
    id: "2",
    question: "چگونه می‌توانم کارت هدیه سازمانی طلاسی خریداری کنم؟",
    answer:
      "برای خرید کارت هدیه سازمانی طلاسی، کافی است وارد پلتفرم طلاسی شوید و از طریق گزینه‌های موجود، کارت هدیه با ارزش دلخواه خود را سفارش دهید. شما می‌توانید هدیه‌ها را به راحتی مدیریت کرده و به کارکنان و شرکای تجاری خود ارسال کنید. همچنین، پلتفرم طلاسی امکان خرید طلای آب شده یا خرید طلا قسطی را نیز فراهم می‌کند.",
  },
  {
    id: "3",
    question: "آیا کارت هدیه طلاسی به عنوان پاداش عملکرد کارمندان مناسب است؟",
    answer:
      "بله، کارت هدیه طلاسی گزینه‌ای عالی برای پاداش عملکرد کارمندان است. این کارت‌ها به عنوان یک هدیه فاخر و ماندگار می‌توانند انگیزه بیشتری برای کارکنان ایجاد کنند و به عنوان سرمایه‌گذاری بلندمدت برای آنها عمل کنند.",
  },
  {
    id: "4",
    question: "آیا امکان سفارشی‌سازی کارت‌های هدیه طلاسی وجود دارد؟",
    answer:
      "بله، شما می‌توانید کارت‌های هدیه سازمانی طلاسی را با طراحی‌های مختلف و مطابق با سلیقه سازمان خود سفارشی‌سازی کنید. این امکان به شما این اجازه را می‌دهد که هدیه‌ای منحصر به فرد و خاص به کارکنان و شرکای تجاری خود ارائه دهید.",
  },
];

export default function page() {
  return (
    <Container maxWidth={"xl"} sx={{ px: "40px !important", mt: 10 }}>
      <Grid container spacing={22}>
        <Grid size={12} container spacing={3}>
          <Grid size={5}>
            <Stack direction={"column"} gap={5}>
              <Typography
                variant="h1"
                fontSize={38}
                fontWeight={"500"}
                sx={{ color: "text.title" }}
              >
                <Box component={"span"}> کــــــارت هـدیــــــــه</Box>
                <br />
                <Box component={"span"}>سازمانـی طـلاســــــی</Box>
              </Typography>
              <Typography variant="h6" fontSize={18}>
                با استفاده از کارت هدیه طلاسی به همکاران، مشتریان و شرکای تجاری
                خود نشان دهید که برای شما ارزشمند و گرانبها هستند.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ fontSize: 18, borderRadius: 2, py: 1.5, width: "50%" }}
              >
                ثبت درخواست
              </Button>
            </Stack>
          </Grid>
          <Grid size={7}>
            <Box
              className="h_iframe-aparat_embed_frame"
              maxWidth={"80%"}
              position={"relative"}
            >
              <Stack
                position={"absolute"}
                bgcolor={"#1A1A18"}
                width={"110%"}
                height={"100%"}
                borderRadius={2}
                left={"50%"}
                sx={{ transform: "translateX(-50%) rotate(-8deg)" }}
              ></Stack>
              <span style={{ display: "block", paddingTop: "57%" }}></span>
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/vtk22d6/vt/frame"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Gift />
        </Grid>
        <Grid size={12}>
          <RequestForm />
        </Grid>
        <Grid size={12}>
          <Description />
          <Faq
            faqData={faqData}
            titleStyle={{ fontSize: "30px", mt: 4, mb: 8 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
