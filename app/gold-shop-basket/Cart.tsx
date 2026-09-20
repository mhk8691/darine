'use client';
import { Close } from '@mui/icons-material';
import { Button, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CustomModal from '../Components/CustomModal/CustomModal';
import Delivery from './Delivery';
import DesktopCart from './DesktopCart';
import MobileCart from './MobileCart';
import OrderConfirmation from './OrderConfirmation';
import { getCart } from '@/lib/cart/cart';
import { CartItem } from '../core/Types';
import EmptyMessage from '../Components/EmptyMessage/EmptyMessage';

export interface DirectAddressesType {
  address: string;
  hourse: string;
  date: string;
}
export default function Cart() {
  const [directAddresses, setDirectAddresses] = useState<DirectAddressesType>(
    {} as DirectAddressesType,
  );
  const [deliveryType, setDeliveryType] = useState('HOME_DELIVERY');
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const theme = useTheme();
  const [cartData, setCartData] = useState<CartItem[]>(getCart());
  const [addressId, setAddressId] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
    noSsr: true,
  });
  const handleIncrease = () => {
    setStep((prev) => {
      if (prev === 1) {
        setOpen(true);
      } else {
        return prev < 1 ? prev + 1 : 0;
      }
      return prev;
    });
  };
  const handleDecrease = () => {
    if (step === 0) {
      router.back();
    } else {
      setStep((prev) => prev - 1);
    }
  };
  return (
    <>
      {step === 0 && (
        <>
          {!isMobile && (
            <Typography variant="h6" fontSize={30} fontWeight={'500'} sx={{ color: 'text.title' }}>
              سبد خرید شما
            </Typography>
          )}
          {cartData.length > 0 ? (
            isMobile ? (
              <MobileCart setCartData={setCartData} cartData={cartData} />
            ) : (
              <DesktopCart setCartData={setCartData} cartData={cartData} />
            )
          ) : (
            <EmptyMessage title="سبد خرید خالی است" />
          )}
        </>
      )}
      {step === 1 && (
        <Delivery
          addressId={addressId}
          setAddressId={setAddressId}
          deliveryType={deliveryType}
          setDirectAddresses={setDirectAddresses}
          setDeliveryType={setDeliveryType}
        />
      )}
      {cartData.length > 0 && (
        <Stack
          width={{
            xs: '100%',
            md: step === 0 ? '50%' : '62%',
          }}
          mt={3}
          direction={'row'}
          gap={2}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: {
                xs: step === 0 ? 20 : 14,
                md: 20,
              },
              py: 1.3,
              borderRadius: 2,
              width: {
                xs: step === 0 ? '70%' : '100%',
                md: '70%',
              },
              '&:hover': {
                bgcolor: 'primary.main',
              },
            }}
            onClick={handleIncrease}
          >
            {step === 0 ? 'ادامه' : 'ثبت سفارش'}
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              fontSize: 20,
              py: 1.3,
              borderRadius: 2,
              width: '30%',
              '&:hover': {
                bgcolor: 'background.default',
              },
              display: {
                xs: step === 0 ? 'block' : 'none',
                md: 'block',
              },
            }}
            onClick={handleDecrease}
          >
            بازگشت
          </Button>
        </Stack>
      )}
      <CustomModal
        setOpen={setOpen}
        open={open}
        modalStyle={{
          height: '45%',
          px: 2,
        }}
      >
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="body1" fontSize={16} fontWeight={500}>
            تایید سفارش
          </Typography>
          <IconButton
            onClick={() => {
              setStep(1);
              setOpen(false);
            }}
          >
            <Close />
          </IconButton>
        </Stack>
        <Stack mt={1} pr={1} pb={4}>
          <OrderConfirmation setOpen={setOpen} deliveryType={deliveryType} addressId={addressId} />
        </Stack>
      </CustomModal>
    </>
  );
}
