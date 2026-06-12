'use client';
import { useAssets } from '@/app/AssetsProvider';
import Container from '@/app/Components/Containers/Container/Container';
import priceFormater from '@/app/core/PriceFormater';
import { Divider, Stack, SxProps, Typography } from '@mui/material';

export default function AllAssets({ style }: { style: SxProps }) {
  const {assets} = useAssets()
  return (
    <Container
      style={{
        alignItems: {
          sm: 'center',
          xs: 'flex-start',
        },
        justifyContent: 'center',
        flexDirection: 'row',
        px: {
          xs: 2,
          sm: 4,
        },
        py: {
          xs: 2,
          sm: 3,
        },
        ...style,
      }}
    >

      <Stack direction={'column'} gap={2} width={'100%'}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            ارزش دارایی
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {priceFormater(assets.total_asset_value)} تومان
          </Typography>
        </Stack>
        <Divider />
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            مقدار طلای خریداری شده
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
          {assets.gold_balance} گرم
          </Typography>
        </Stack>
        <Divider />
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            مقدار نقره خریداری شده
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
           {assets.silver_balance} گرم
          </Typography>
        </Stack>
        <Divider />
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            موجودی کیف پول
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {priceFormater(assets.wallet_balance)} تومان
          </Typography>
        </Stack>
        <Divider />
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            ارزش طلای خریداری شده
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {priceFormater(assets.gold_asset_value)} تومان
          </Typography>
        </Stack>
        <Divider />
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            ارزش نقره خریداری شده
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {priceFormater(assets.silver_asset_value)} تومان
          </Typography>
        </Stack>
        <Divider />
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            قیمت طلا
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {priceFormater(assets.gold_price)} تومان
          </Typography>
        </Stack>
        <Divider />
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            قیمت نقره
          </Typography>
          <Typography
            variant="body2"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
          >
            {priceFormater(assets.silver_price)} تومان
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
