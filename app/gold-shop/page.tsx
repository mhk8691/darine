import { Container, Divider, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Faq from '../Components/Faq/Faq';
import { FaqItem } from '../core/Types';
import ProductsContainer from './ProductsContainer';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'خرید شمش طلا 18 و 24 عیار ',
  description: '',
};
const faqData: FaqItem[] = [
  {
    id: '1',
    question: 'آیا خرید شمش طلا در دارینه امن است؟',
    answer:
      'بله. دارینه دارای مجوزهای قانونی و زیرساخت معاملاتی امن است و تمامی تراکنش‌ها به‌صورت شفاف انجام می‌شود.',
  },
  {
    id: '2',
    question: 'آیا خرید آنلاین شمش طلا اجرت دارد؟',
    answer:
      'خیر، تنها در زمان تحویل فیزیکی اجرت ساخت پرداخت می‌کنید. خرید و فروش آنلاین فقط شامل کارمزد ۱٪ است. (اپلیکیشن ۰.۵٪)',
  },
  {
    id: '3',
    question: 'حداقل موجودی برای تحویل شمش چقدر است؟',
    answer: 'حداقل موجودی مورد نیاز برای تحویل فیزیکی طلا، ۳۰ سوت (میلی گرم) است.',
  },
  {
    id: '4',
    question: 'آیا می‌توانم شمش را قسطی بخرم؟',
    answer:
      'بله. دارینه امکان خرید قسطی بدون ضامن و با چک صیادی یا سفته الکترونیک را فراهم کرده است.',
  },
  {
    id: '5',
    question: 'آیا می‌توانم قیمت دلخواه برای خرید مشخص کنم؟',
    answer: 'بله. با ابزار سفارش با قیمت در دارینه می‌توانید تعیین کنید در چه قیمتی خرید انجام شود.',
  },
];
export default function page() {
  return (
    <>

      <Container
        maxWidth={'xl'}
        sx={{
          mt: 5,
          px: {
            xs: '16px !important',
            md: '24px !important',
            lg: '40px !important',
          },
        }}
      >
        <Grid container gap={6}>
          <Grid size={12}>
            <Stack
              direction={'row'}
              gap={{
                xs: 2,
                sm: 3.5,
              }}
              alignItems={'center'}
            >
              <Stack
                width={{
                  xs: 48,
                  sm: 80,
                }}
                height={{
                  xs: 48,
                  sm: 80,
                }}
              >
                <Image
                  alt=""
                  src={'/images/titleImg.webp'}
                  width={80}
                  height={80}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Stack>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 16,
                  sm: 30,
                }}
                sx={{ color: 'text.title' }}
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
            <Faq
              faqData={faqData}
              titleStyle={{
                fontSize: {
                  xs: 18,
                  md: 30,
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ mt: 11.5 }} />
    </>
  );
}
