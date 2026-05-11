import { Box, Container, Grid, Typography, Button, Stack } from '@mui/material';
import Gift from './Gift';
import RequestForm from './RequestForm';
import Description from './Description';
import Faq from '../Components/Faq/Faq';
import { FaqItem } from '../core/Types';
import { Metadata } from 'next';
import '@/app/Components/Tables/ProductTable/video-style.css';
export const metadata: Metadata = {
  title: 'کارت هدیه سازمانی دارینه | بهترین هدیه برای پرسنل',
  description: '',
};
const faqData: FaqItem[] = [
  {
    id: '1',
    question: 'کارت هدیه سازمانی طلاسی چیست و چه مزایایی دارد؟',
    answer:
      'کارت هدیه سازمانی طلاسی یک هدیه لوکس و ماندگار است که نه تنها به عنوان پاداش برای عملکرد شایسته کارمندان و شرکای تجاری استفاده می‌شود، بلکه به عنوان یک سرمایه‌گذاری بلندمدت نیز ارزش خود را حفظ می‌کند.',
  },
  {
    id: '2',
    question: 'چگونه می‌توانم کارت هدیه سازمانی طلاسی خریداری کنم؟',
    answer:
      'برای خرید کارت هدیه سازمانی طلاسی، کافی است وارد پلتفرم طلاسی شوید و از طریق گزینه‌های موجود، کارت هدیه با ارزش دلخواه خود را سفارش دهید. شما می‌توانید هدیه‌ها را به راحتی مدیریت کرده و به کارکنان و شرکای تجاری خود ارسال کنید. همچنین، پلتفرم طلاسی امکان خرید طلای آب شده یا خرید طلا قسطی را نیز فراهم می‌کند.',
  },
  {
    id: '3',
    question: 'آیا کارت هدیه طلاسی به عنوان پاداش عملکرد کارمندان مناسب است؟',
    answer:
      'بله، کارت هدیه طلاسی گزینه‌ای عالی برای پاداش عملکرد کارمندان است. این کارت‌ها به عنوان یک هدیه فاخر و ماندگار می‌توانند انگیزه بیشتری برای کارکنان ایجاد کنند و به عنوان سرمایه‌گذاری بلندمدت برای آنها عمل کنند.',
  },
  {
    id: '4',
    question: 'آیا امکان سفارشی‌سازی کارت‌های هدیه طلاسی وجود دارد؟',
    answer:
      'بله، شما می‌توانید کارت‌های هدیه سازمانی طلاسی را با طراحی‌های مختلف و مطابق با سلیقه سازمان خود سفارشی‌سازی کنید. این امکان به شما این اجازه را می‌دهد که هدیه‌ای منحصر به فرد و خاص به کارکنان و شرکای تجاری خود ارائه دهید.',
  },
];

export default function page() {
  return (
    <Container
      maxWidth={'xl'}
      sx={{
        px: {
          xs: '16px !important',
          md: '24px !important',
          lg: '40px !important',
        },
        mt: {
          xs: 3,
          sm: 7,
        },
      }}
    >
      <Grid
        container
        spacing={{
          xs: 7,
          sm: 10,
          md: 22,
        }}
      >
        <Grid
          size={12}
          container
          spacing={{
            xs: 5,
            md: 3,
          }}
        >
          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >
            <Stack
              direction={'column'}
              gap={{
                xs: 2,
                md: 5,
              }}
              alignItems={{
                xs: 'center',
                md: 'flex-start',
              }}
            >
              <Typography
                variant="h1"
                fontSize={{
                  xs: 18,
                  sm: 30,
                  md: 38,
                }}
                fontWeight={'500'}
                sx={{ color: 'text.title' }}
              >
                <Box component={'span'}> کــــــارت هـدیــــــــه</Box>
                <br />
                <Box component={'span'}>سازمانـی طـلاســــــی</Box>
              </Typography>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 12,
                  sm: 16,
                  md: 18,
                }}
                sx={{
                  width: {
                    xs: '100%',
                    sm: '540px',
                    md: '100%',
                  },
                }}
                textAlign={{
                  xs: 'center',
                  md: 'start',
                }}
              >
                با استفاده از کارت هدیه طلاسی به همکاران، مشتریان و شرکای تجاری خود نشان دهید که
                برای شما ارزشمند و گرانبها هستند.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: {
                    xs: 12,
                    sm: 18,
                  },
                  borderRadius: 2,
                  py: 1.5,
                  width: {
                    xs: '50%',
                    sm: '30%',
                    md: '50%',
                  },
                }}
              >
                ثبت درخواست
              </Button>
            </Stack>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
          >
            <Box
              className="h_iframe-aparat_embed_frame"
              maxWidth={{
                xs: '85%',
                sm: '55%',
                md: '80%',
              }}
              position={'relative'}
            >
              <Stack
                position={'absolute'}
                bgcolor={'background.paper'}
                width={'110%'}
                height={'100%'}
                borderRadius={2}
                left={'50%'}
                sx={{ transform: 'translateX(-50%) rotate(-8deg)' }}
              ></Stack>
              <span style={{ display: 'block', paddingTop: '57%' }}></span>
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/vtk22d6/vt/frame"
                allowFullScreen
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
          <Faq faqData={faqData} titleStyle={{ fontSize: '30px', mt: 4, mb: 8 }} />
        </Grid>
      </Grid>
    </Container>
  );
}
