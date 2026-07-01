'use client';

import priceFormater from '@/app/core/PriceFormater';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';

import { CartItem, ProductDateType } from '@/app/core/Types';
import { Close } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import CustomModal from '../CustomModal/CustomModal';
import Counter from '@/app/gold-shop/[productId]/Counter';
import { addToCart } from '@/lib/cart/cart';

export default function ProductCard({
  item,
  cart,
  setCart,
}: {
  item: ProductDateType;
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const inventoryCount = item.inventory_count ?? 0;

  const inventoryConfig = {
    color: inventoryCount > 10 ? '#43AB79' : inventoryCount > 0 ? '#F59E0B' : '#EF4444',
    label:
      inventoryCount > 10
        ? `موجود: ${inventoryCount} عدد`
        : inventoryCount > 0
        ? `تنها ${inventoryCount} عدد`
        : 'ناموجود',
  };

  return (
    <>
      <Card
        sx={{
          border: 1,
          borderColor: 'background.paper',
          bgcolor: 'background.default',
          py: 1.5,
          borderRadius: 1.5,
          boxShadow: 'none',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* نوار موجودی */}
        <Box
          sx={{
            position: 'absolute',
            top: 2,
            right: 2,
            zIndex: 1,
            bgcolor: inventoryConfig.color,
            color: '#fff',
            px: 1,
            py: 0.3,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0.3,
          }}
        >
          {inventoryConfig.label}
        </Box>

        <Stack px={1.5}>
          <Stack bgcolor={'background.default'} borderRadius={2}>
            <CardMedia
              sx={{
                height: {
                  xs: 150,
                  sm: 180,
                },
                width: '100%',
              }}
              image={item.image}
              title={item.name}
            />
          </Stack>
        </Stack>

        <CardContent sx={{ px: { xs: 1, sm: 1.5 } }}>
          <Stack direction={'row'} justifyContent={{ xs: 'flex-start', sm: 'center' }}>
            <Typography
              gutterBottom
              variant="h5"
              fontSize={{ xs: 14, sm: 18 }}
              sx={{ px: 0.5 }}
            >
              {item.name}
            </Typography>
          </Stack>
          <Stack direction={'column'} gap={1} sx={{ mt: 3.5 }}>
            <Stack
              direction={{ xs: 'column', sm: 'row', md: 'column', lg: 'row' }}
              alignItems={{ xs: 'flex-start', sm: 'center', md: 'flex-start', lg: 'center' }}
              justifyContent={'space-between'}
            >
              <Typography variant="body2" fontSize={{ xs: 10, sm: 12 }} sx={{ color: 'text.muted' }}>
                وزن خالص :
              </Typography>
              <Typography variant="body1" fontSize={{ xs: 14, sm: 16, lg: 14, xl: 16 }} sx={{ alignSelf: 'flex-end' }}>
                {priceFormater(+item.weight)}{' '}
                <Box component={'span'} fontSize={{ xs: 12, sm: 14 }}>گرم</Box>
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'row', md: 'column', lg: 'row' }}
              alignItems={{ xs: 'flex-start', sm: 'center', md: 'flex-start', lg: 'center' }}
              justifyContent={'space-between'}
            >
              <Typography variant="body2" fontSize={{ xs: 10, sm: 12 }} sx={{ color: 'text.muted' }}>
                مبلغ وزنی:
              </Typography>
              <Typography variant="body1" fontSize={{ xs: 14, sm: 16, lg: 14, xl: 16 }} sx={{ alignSelf: 'flex-end' }}>
                {priceFormater(item?.product_weight_with_fee)}{' '}
                <Box component={'span'} fontSize={{ xs: 12, sm: 14 }}>گرم</Box>
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'row', md: 'column', lg: 'row' }}
              alignItems={{ xs: 'flex-start', sm: 'center', md: 'flex-start', lg: 'center' }}
              justifyContent={'space-between'}
            >
              <Typography variant="body2" fontSize={{ xs: 10, sm: 12 }} sx={{ color: 'text.muted' }}>
                ارزش کل محصول:
              </Typography>
              <Typography variant="body1" fontSize={{ xs: 14, sm: 16, lg: 14, xl: 16 }} sx={{ alignSelf: 'flex-end' }}>
                {priceFormater(item.total_price)}{' '}
                <Box component={'span'} fontSize={{ xs: 12, sm: 14 }}>تومان</Box>
              </Typography>
            </Stack>
          </Stack>
        </CardContent>

        <Stack px={1.5} mt={3}>
          {!cart.find((productId) => productId.id == item.id) ? (
            <Button
              variant="outlined"
              color="inherit"
              disabled={inventoryCount === 0}
              sx={{
                borderRadius: 2,
                width: '100%',
                py: 1.5,
                '&:hover': { bgcolor: '#1C1C1B' },
              }}
              onClick={() => {
                setCart(
                  addToCart({
                    image: item.image,
                    id: item.id,
                    name: item.name,
                    product_weight_with_fee: item.product_weight_with_fee,
                    total_price: item.total_price,
                    weight: item.weight,
                  })
                );
                setOpen(true);
              }}
            >
              {inventoryCount === 0 ? 'ناموجود' : 'افزودن به سبد خرید'}
            </Button>
          ) : (
            <Counter cart={cart} productId={item.id} setCart={setCart} />
          )}
        </Stack>
      </Card>

      <CustomModal open={open} setOpen={setOpen} modalStyle={{ p: 2 }}>
        <Stack direction={'row'} justifyContent={'flex-end'}>
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Stack>
        <Typography variant="h6" fontSize={22} sx={{ color: '#43AB79', mb: 4 }}>
          این محصول به سبد خرید شما افزوده شد.
        </Typography>
        <Typography variant="body1" fontSize={16}>
          {item?.name}
        </Typography>
        <Stack direction={'row'} gap={2} mt={5}>
          <Button
            onClick={() => {
              router.push('/gold-shop-basket');
              setOpen(false);
            }}
            variant="contained"
            color="primary"
            sx={{
              width: '50%',
              color: 'background.default',
              py: 1.3,
              borderRadius: 2,
              fontSize: 16,
              fontWeight: 600,
              '&:hover': { bgcolor: 'primary.main' },
            }}
          >
            سبد خرید
          </Button>
          <Button
            onClick={() => setOpen(false)}
            variant="outlined"
            color="inherit"
            sx={{
              width: '50%',
              py: 1.3,
              borderRadius: 2,
              fontSize: 16,
              fontWeight: 600,
              '&:hover': { bgcolor: 'background.default' },
            }}
          >
            ادامه خرید
          </Button>
        </Stack>
      </CustomModal>
    </>
  );
}