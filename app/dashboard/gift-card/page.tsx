import Container from '@/app/Components/Containers/Container/Container';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import { Grid } from '@mui/material';
import { Metadata } from 'next';
import GiftStepper from './GiftStepper';
import Title from './Title';
import BackLink from '../BackLink';
import { getGiftCardList } from '@/lib/reports/getReports';
import { isAxiosError } from 'axios';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import GiftCardTable from '../gift-cards/GiftCardTable';
export const metadata: Metadata = {
  title: 'خرید کارت هدیه | دارینه',
  description: '',
};
export default async function page() {
  const getData = async ()=>{
     try{
            const response = await getGiftCardList();
            return response
          }catch(error:unknown){
            if (isAxiosError(error)){
              showSnackbar(error.response?.data.message)
            }
          }
  }
  const giftCardList = await getData()
  return (
    <Grid container spacing={3}>
      <BackLink title="سفارش کارت هدیه" />
      <Grid size={12}>
        <Container
          style={{
            pb: {
              xs: 0,
              sm: 8,
            },
            px: {
              xs: 0,
              sm: 4,
            },
            border: {
              xs: 0,
              sm: 1,
            },
            borderColor: {
              sm: 'background.paper',
            },
          }}
        >
          <Title />
          <GiftStepper />
        </Container>
      </Grid>
      <Grid size={12}>
        <OrderDetail
          title="لیست کارت‌های هدیه شما"
          toggleItems={[]}
          type="chip"
          emptyMessage="کارت هدیه‌ای توسط شما خریداری نشده است."
          listLength={0}
          tableBody={<GiftCardTable giftCardsList={giftCardList || []} />}
          tableHead={[]}
        />
      </Grid>
    </Grid>
  );
}
