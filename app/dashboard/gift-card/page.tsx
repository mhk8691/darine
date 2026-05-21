import Container from '@/app/Components/Containers/Container/Container';
import { Grid } from '@mui/material';
import { Metadata } from 'next';
import GiftStepper from './GiftStepper';
import Title from './Title';
import BackLink from '../BackLink';
import GiftCardOrder from '../gift-cards/GiftCardOrder';
export const metadata: Metadata = {
  title: 'خرید کارت هدیه | دارینه',
  description: '',
};
export default  function page() {
  // const getData = async ()=>{
  //    try{
  //           const response = await getGiftCardList();
  //           console.log('=|',response)
  //           return response
  //         }catch(error:unknown){
  //           if (isAxiosError(error)){
  //             showSnackbar(error.response?.data.message)
  //           }
  //         }
  // }
  // const giftCardList =  getData()
  console.log('=|')
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
       <GiftCardOrder/>
      </Grid>
    </Grid>
  );
}
