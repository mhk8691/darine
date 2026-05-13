import CircleAnimation from '@/app/Components/CircleAnimation/CircleAnimation';
import {
  default as Card,
  default as Container,
} from '@/app/Components/Containers/Container/Container';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import Wallet from '@/app/Components/Wallet/Wallet';
import priceFormater from '@/app/core/PriceFormater';
import { ToggleItemsType } from '@/app/core/Types';
import { Grid, Stack, Typography } from '@mui/material';
import { Metadata } from 'next';
import BackLink from '../BackLink';
import AllAssets from './AllAssets';
export const metadata: Metadata = {
  title: 'کیف پول | دارینه',
  description: '',
};
const items: ToggleItemsType[] = [
  {
    title: 'واریز',
    value: 'deposit',
    id: 1,
    emptyMessage: 'واریزی برای شما به ثبت نرسیده است',
  },
  {
    title: 'واریز مستقیم',
    value: 'directDeposit',
    id: 2,
    emptyMessage: 'واریز باشناسه ای برای شما به ثبت نرسیده است',
  },
  {
    title: 'واریز از نقره سی',
    value: 'silverDeposit',
    id: 3,
    emptyMessage: 'واریزی برای شما به ثبت نرسیده است',
  },
  {
    title: 'برداشت',
    value: 'withdraw',
    id: 4,
    emptyMessage: 'برداشتی برای شما به ثبت نرسیده است',
  },
  {
    title: 'برداشت به نقره سی',
    value: 'silverWithdraw',
    id: 5,
    emptyMessage: 'برداشتی برای شما به ثبت نرسیده است',
  },
];
export default async function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 1,
        lg: 3,
      }}
    >
      <BackLink title="کیف پول شما" />

      <Grid size={{ xs: 12, md: 6 }}>
        <Wallet type="wallet" />
        <Grid
          size={12}
          display={{
            xs: 'none',
            sm: 'block',
          }}
        >
          <AllAssets style={{
           
        mt: 3,
        minHeight: {
          xs: '200px',
          sm: '60px',
        },
          }} />
        </Grid>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Container
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: {
              xs: 1,
              lg: 3,
            },
            py: {
              sm: 2,
              lg: 3,
            },
            display: {
              xs: 'none',
              sm: 'flex',
            },
            px: {
              sm: 2,
              lg: 4,
            },
          }}
        >
          <Stack direction={'row'} gap={2} alignItems={'center'}>
            <CircleAnimation type="red" />
            <Typography variant="body2" sx={{ color: 'text.muted' }}>
              قیمت فعلی طلا ۱۸ عیار:
            </Typography>
          </Stack>
          <Stack direction={'row'} gap={0.5} alignItems={'center'}>
            <Typography variant="body1" fontSize={20} sx={{ color: 'text.title' }} fontWeight={500}>
              {priceFormater(17329000)}
            </Typography>
            <Typography variant="body1" fontSize={18} sx={{ color: 'text.title' }} fontWeight={500}>
              تومان
            </Typography>
          </Stack>
        </Container>
        <Card
          style={{
            mb: {
              xs: 4,
              sm: 3,
            },
            px: {
              xs: 2,
              lg: 4,
            },
            py: {
              xs: 2,
              lg: 3,
            },
          }}
        >
          <Typography
            variant="h2"
            fontSize={{
              xs: 12,
              sm: 20,
              lg: 22,
            }}
            sx={{ color: 'text.primary' }}
            fontWeight={'900'}
          >
            خلاصه فعالیت‌های شما
          </Typography>
          <Stack
            mt={{
              xs: 3,
              lg: 4.5,
            }}
            direction={'column'}
            gap={{
              xs: 2,
              sm: 2.5,
            }}
          >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                مجموع دارایی شما
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                *** تومان
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                سود شما
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'success.main' }}
              >
                *** تومان
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                طلا برداشت شده
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                *** گرم
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                کارت هدیه های خریداری شده
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                *** تومان
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                کارت هدیه های دریافت شده
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                *** تومان
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                تومان درانتظار پردازش
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                *** تومان
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                طلا درانتظار پردازش
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                *** گرم
              </Typography>
            </Stack>
          </Stack>
        </Card>
        <Grid
          display={{
            xs: 'block',
            sm: 'none',
          }}
          size={12}
        >
          <AllAssets style={{
         
        mt: 3,
        minHeight: {
          xs: '200px',
          sm: '60px',
        },
          }} />
        </Grid>
        <Stack mt={{ xs: 1, sm: 3 }}>
          <OrderDetail type="chip" title="لیست تراکنش‌‌های اخیر" toggleItems={items} tableBody={<></>} listLength={0} tableHead={[]} />
        </Stack>
      </Grid>
    </Grid>
  );
}
