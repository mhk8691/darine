import Card from '@/app/Components/Containers/Container/Container';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import WalletStatus from '@/app/Components/Wallet/WalletHeader';
import { ToggleItemsType } from '@/app/core/Types';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Metadata } from 'next';
import Link from 'next/link';
import BackLink from '../BackLink';
import EmptyTable from './EmptyTable';
export const metadata: Metadata = {
  title: 'پس انداز خودکار | دارینه',
  description: '',
};
const items: ToggleItemsType[] = [
  {
    title: 'کارت ها',
    value: 'cards',
    id: 2,
    emptyMessage: 'کارتی برای شما به ثبت نرسیده است',
  },
  {
    title: 'واریز ها',
    value: 'deposits',
    id: 1,
    emptyMessage: 'واریزی برای شما به ثبت نرسیده است',
  },
];
export default function page() {
  return (
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 1,
        lg: 3,
      }}
    >
      <BackLink title="پس انداز خودکار" />
      <Grid size={12}>
        <WalletHeader />
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 4.8,
        }}
        order={{
          xs: 2,
          md: 1,
        }}
      >
        <Card
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5,
            pb: 8,
          }}
        >
          <Link href={'/dashboard/bank-card'}>
            <Button
              disableRipple
              variant="contained"
              sx={{
                py: 1,
                px: 2,
                fontSize: 16,
                fontWeight: 'bold',
                borderRadius: 2,
                '&:hover': {
                  bgcolor: 'primary.main',
                },
              }}
            >
              افزودن کارت بانکی
            </Button>
          </Link>
          <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} gap={4}>
            <EmptyTable />
            <Typography variant="body2" fontSize={12} sx={{ color: 'text.muted' }}>
              متاسفانه کارت‌های ثبت شده در پنل شما جزو بانک‌های پشتیبانی شده نیست.
            </Typography>
          </Stack>
        </Card>
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 7.2,
        }}
        order={{
          xs: 1,
          md: 2,
        }}
      >
        <Card
          style={{
            color: '#EF8011',
            pb: 5,
          }}
        >
          <Stack direction={'row'} alignItems={'center'} gap={1}>
            <InfoOutlinedIcon />
            <Typography
              variant="h6"
              fontSize={{
                xs: 14,
                md: 22,
              }}
            >
              توجه
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mt: '10px',
              fontSize: {
                xs: 12,
                md: 16,
              },
            }}
          >
            در حال حاضر پس‌انداز خودکار فقط توسط بانک‌ کشاورزی و پارسیان و آینده پشتیبانی می‌شود.
          </Typography>
        </Card>
      </Grid>
      <Grid size={12} order={3}>
        <OrderDetail type="chip" title="لیست تراکنش‌‌های اخیر" toggleItems={items} />
      </Grid>
    </Grid>
  );
}
