'use client';
import Container from '@/app/Components/Containers/Container/Container';
import { CartIcon, WarrantyIcon } from '@/app/Components/CustomIcons/CustomIcons';
import priceFormater from '@/app/core/PriceFormater';
import {   CartItem } from '@/app/core/Types';
import { Button, Divider, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { useAssets } from '../../AssetsProvider';

export default function Cart({cart}:{cart:CartItem[]}) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const router = useRouter();
  const {assets,isVisible} = useAssets()

  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <>
      {isMd && (
        <Grid size={4}>
          <Container style={{ px: 0 }}>
            <Stack direction={'row'} gap={1} alignItems={'flex-start'} px={1.5}>
              <Stack sx={{ mt: 0.3 }}>
                <WarrantyIcon />
              </Stack>
              <Typography variant="body1" fontSize={16} sx={{ color: 'text.muted' }}>
                همه محصولات دارای ضمانت اصالت و سلامت کالا می‌باشند.
              </Typography>
            </Stack>
            <Divider sx={{ mt: 2 }} />
            <Stack direction={'column'} gap={2} mt={1} px={1.5}>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1" fontSize={16} sx={{ color: 'text.muted' }}>
                  موجودی طلای شما
                </Typography>
                <Typography variant="body1" fontSize={18}>
                  {isVisible ? `${priceFormater(assets?.gold_balance )} گرم` :'***'}
                </Typography>
              </Stack>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1" fontSize={16} sx={{ color: 'text.muted' }}>
                  موجودی تومان شما
                </Typography>
                <Typography variant="body1" fontSize={18}>
                  {isVisible ? `${priceFormater(assets.wallet_balance)} تومان` :'***'}
                </Typography>
              </Stack>
              <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant="body1" fontSize={16} sx={{ color: 'text.muted' }}>
                  تعداد محصول
                </Typography>
                <Typography variant="body1" fontSize={18}>
                  {priceFormater(totalQuantity)}
                </Typography>
              </Stack>
            </Stack>
            <Stack px={1.5}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: 16,
                  py: 1.5,
                  fontWeight: '600',
                  borderRadius: 2,
                  mt: 2,
                  '&:hover': {
                    bgcolor: 'primary.main',
                  },
                }}
                onClick={() => router.push('/gold-shop-basket')}
                startIcon={<CartIcon />}
              >
                مشاهده سبد خرید
              </Button>
            </Stack>
          </Container>
        </Grid>
      )}
    </>
  );
}
