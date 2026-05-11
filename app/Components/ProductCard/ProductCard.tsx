'use client';

import priceFormater from '@/app/core/PriceFormater';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
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
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { CartItem, Product } from '@/app/core/Types';
import { Close } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import CustomModal from '../CustomModal/CustomModal';
import { getCart, saveCart } from './cartStorage';

const product: Product = {
  id: 'gold-1',
  title: 'شمش طلاسی ۱ گرمی ۱۸ عیار',
  price: 19330693,
};
export default function ProductCard() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const item = cart.find((i) => i.id === product.id);
  const router = useRouter();
  useEffect(() => {
    setCart(getCart());
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    saveCart(newCart);
  };

  const addToCart = () => {
    const current = getCart();

    const exists = current.find((i) => i.id === product.id);

    let newCart: CartItem[];

    if (exists) {
      newCart = current.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      newCart = [...current, { ...product, quantity: 1 }];
    }

    updateCart(newCart);
  };

  const removeItem = () => {
    const current = getCart();
    const updated = current.filter((i) => i.id !== product.id);
    updateCart(updated);
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
        }}
      >
        <Stack px={1.5}>
          <Stack bgcolor={'background.default'} borderRadius={2}>
            <Link href={'/gold-shop/test/'}>
              <CardMedia
                sx={{
                  height: {
                    xs: 150,
                    sm: 180,
                  },
                  width: '100%',
                }}
                image="/images/product.webp"
                title="green iguana"
              />
            </Link>
          </Stack>
        </Stack>
        <CardContent
          sx={{
            px: {
              xs: 1,
              sm: 1.5,
            },
          }}
        >
          <Stack
            direction={'row'}
            justifyContent={{
              xs: 'flex-start',
              sm: 'center',
            }}
          >
            <Link href={'/gold-shop/test/'}>
              {' '}
              <Typography
                gutterBottom
                variant="h5"
                fontSize={{
                  xs: 14,
                  sm: 18,
                }}
                sx={{ px: 0.5 }}
              >
                {' '}
                شمش طلاسی ۱ گرمی ۱۸ عیار{' '}
              </Typography>{' '}
            </Link>{' '}
          </Stack>
          <Stack direction={'column'} gap={1} sx={{ mt: 3.5 }}>
            {' '}
            <Stack
              direction={{
                xs: 'column',
                sm: 'row',
                md: 'column',
                lg: 'row',
              }}
              alignItems={{
                xs: 'flex-start',
                sm: 'center',
                md: 'flex-start',
                lg: 'center',
              }}
              justifyContent={'space-between'}
            >
              {' '}
              <Typography
                variant="body2"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: 'text.muted' }}
              >
                {' '}
                وزن{' '}
                <Box
                  component={'span'}
                  fontSize={{
                    xs: 8,
                    sm: 10,
                  }}
                >
                  {' '}
                  (معادل ۱۸ عیار){' '}
                </Box>{' '}
                :{' '}
              </Typography>{' '}
              <Typography
                variant="body1"
                fontSize={{
                  xs: 14,
                  sm: 16,
                  lg: 14,
                  xl: 16,
                }}
                sx={{ alignSelf: 'flex-end' }}
              >
                {' '}
                ۲.۵{' '}
                <Box
                  component={'span'}
                  fontSize={{
                    xs: 12,
                    sm: 14,
                  }}
                >
                  {' '}
                  گرم{' '}
                </Box>{' '}
              </Typography>{' '}
            </Stack>{' '}
            <Stack
              direction={{
                xs: 'column',
                sm: 'row',
                md: 'column',
                lg: 'row',
              }}
              alignItems={{
                xs: 'flex-start',
                sm: 'center',
                md: 'flex-start',
                lg: 'center',
              }}
              justifyContent={'space-between'}
            >
              {' '}
              <Typography
                variant="body2"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: 'text.muted' }}
              >
                {' '}
                گرم طلا:{' '}
              </Typography>{' '}
              <Typography
                variant="body1"
                fontSize={{
                  xs: 14,
                  sm: 16,
                  lg: 14,
                  xl: 16,
                }}
                sx={{ alignSelf: 'flex-end' }}
              >
                {' '}
                ۱.۰۷۵{' '}
                <Box
                  component={'span'}
                  fontSize={{
                    xs: 12,
                    sm: 14,
                  }}
                >
                  {' '}
                  گرم{' '}
                </Box>{' '}
              </Typography>{' '}
            </Stack>{' '}
            <Stack
              direction={{
                xs: 'column',
                sm: 'row',
                md: 'column',
                lg: 'row',
              }}
              alignItems={{
                xs: 'flex-start',
                sm: 'center',
                md: 'flex-start',
                lg: 'center',
              }}
              justifyContent={'space-between'}
            >
              {' '}
              <Typography
                variant="body2"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: 'text.muted' }}
              >
                {' '}
                ارزش تومان:{' '}
              </Typography>{' '}
              <Typography
                variant="body1"
                fontSize={{
                  xs: 14,
                  sm: 16,
                  lg: 14,
                  xl: 16,
                }}
                sx={{ alignSelf: 'flex-end' }}
              >
                {' '}
                {priceFormater(19330693)}{' '}
                <Box
                  component={'span'}
                  fontSize={{
                    xs: 12,
                    sm: 14,
                  }}
                >
                  {' '}
                  تومان{' '}
                </Box>{' '}
              </Typography>{' '}
            </Stack>{' '}
          </Stack>{' '}
        </CardContent>
        {!item ? (
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              borderRadius: 2,
              width: '100%',
              mt: 3,
              py: 1.5,
              '&:hover': {
                bgcolor: '#1C1C1B',
              },
            }}
            onClick={() => {
              addToCart();
              setOpen(true);
            }}
            disableRipple
          >
            افزودن به سبد خرید
          </Button>
        ) : (
          <Stack
            sx={{
              px: {
                xs: 1,
                sm: 1.5,
              },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                border: '1px solid #FFD700',
                borderRadius: 2,
                mt: 3,
                px: 1,
                py: 0.5,
              }}
            >
              <IconButton onClick={addToCart} disableRipple>
                <AddIcon />
              </IconButton>
              <Typography fontWeight={600}>{item.quantity}</Typography>

              <IconButton onClick={removeItem} disableRipple>
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Stack>
        )}
      </Card>
      <CustomModal open={open} setOpen={setOpen} modalStyle={{ p: 2 }}>
        <Stack direction={'row'} justifyContent={'flex-end'}>
          <IconButton onClick={() => setOpen(false)} disableRipple>
            <Close />
          </IconButton>
        </Stack>
        <Typography variant="h6" fontSize={22} sx={{ color: '#43AB79', mb: 4 }}>
          این محصول به سبد خرید شما افزوده شد.
        </Typography>
        <Typography variant="body1" fontSize={16}>
          {item?.title}
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
              '&:hover': {
                bgcolor: 'primary.main',
              },
            }}
            disableRipple
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
              '&:hover': {
                bgcolor: 'background.default',
              },
            }}
            disableRipple
          >
            ادامه خرید
          </Button>
        </Stack>
      </CustomModal>
    </>
  );
}
