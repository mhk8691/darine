import { clearCart, getCart } from '@/lib/cart/cart';
import { InfoOutlineRounded } from '@mui/icons-material';
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  SxProps,
  Typography,
} from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import priceFormater from '../core/PriceFormater';
import { useAssets } from '../AssetsProvider';
import { isAxiosError } from 'axios';
import { showSnackbar } from '../Components/Snackbar/Snackbar';
import { checkout } from '@/lib/checkout/checkout';
import { CheckoutDataType } from '../core/Types';
import { useRouter } from 'next/navigation';

const rowStyle: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  py: 1.5,
  alignItems: 'center',
  justifyContent: 'space-between',
};

const titleStyle: SxProps = {
  color: 'text.muted',
  fontWeight: 500,
};

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  deliveryType:string
  addressId:number
}

export default function OrderConfirmation({ setOpen,deliveryType,addressId }: Props) {
  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState('TOMAN');
  const router = useRouter()
  const { assets } = useAssets();

  const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setActive(event.target.value);
  };

  const handleChangeBox = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const getTotalPrice = (): number => {
    const cart = getCart();

    return cart.reduce((total, item) => {
      return total + item.total_price * item.quantity;
    }, 0);
  };

  const totalPrice = getTotalPrice();

  const balance = assets?.toman_balance ?? 0;

  const diff = balance - totalPrice;

  const isEnough = diff >= 0;
  const handleClick = async ()=>{
    const newData:CheckoutDataType = {
      products:getCart().map((item)=>{
        return {
          product_id:item.id,
          quantity:item.quantity
        }
      }),
      payment_method:active,
      delivery_type:deliveryType,
      address_id:addressId
    }
    try{
      const response = await checkout(newData)
      showSnackbar(response.data.message,'success')
      router.push('/dashboard/gold-receive')
      clearCart()
    }catch (error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)
      }
    }
  }
  return (
    <Stack direction="column">
      <Stack sx={rowStyle}>
        <Typography sx={titleStyle}>هزینه ارسال</Typography>
        <Typography fontSize={18}>100,000 تومان</Typography>
      </Stack>

      <Stack sx={rowStyle}>
        <Typography sx={titleStyle}>هزینه بیمه کالا</Typography>
        <Typography fontSize={18}>366,559 تومان</Typography>
      </Stack>

      <Stack sx={rowStyle}>
        <Typography sx={titleStyle}>مجموع سفارش</Typography>
        <Typography fontSize={18}>
          {priceFormater(totalPrice)} تومان
        </Typography>
      </Stack>

      <Divider />

      <Stack sx={rowStyle}>
        <Typography sx={titleStyle}>موجودی کیف پول</Typography>
        <Typography fontSize={18}>
          {priceFormater(balance) || 0} تومان
        </Typography>
      </Stack>

      <Divider />

      <Stack sx={rowStyle}>
        <Typography sx={titleStyle}>
          {isEnough ? 'موجودی باقی‌مانده' : 'کمبود موجودی'}
        </Typography>

        <Typography
          fontSize={18}
          color={isEnough ? 'success.main' : 'error.main'}
        >
          {priceFormater(Math.abs(diff))} تومان
        </Typography>
      </Stack>

      <Stack
        bgcolor="background.paper"
        borderRadius={2}
        p={2}
        direction="row"
        gap={1}
        mt={2}
      >
        <InfoOutlineRounded sx={{ color: '#D89654' }} />
        <Typography variant="body2" fontWeight={500} sx={{ color: 'text.secondary' }}>
          لطفاً پیش از تأیید، اطلاعات وارد شده و آدرس انتخابی را به دقت بررسی کنید.
        </Typography>
      </Stack>

      <FormControl sx={{ mt: 2 }}>
        <RadioGroup
          value={active}
          onChange={handleChangeRadio}
          sx={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <FormControlLabel
            value="TOMAN"
            control={<Radio disableTouchRipple />}
            label="پرداخت نقدی"
            sx={{ '& .MuiTypography-root': { fontSize: 18 } }}
          />
          <FormControlLabel
            value="GOLD"
            control={<Radio disableTouchRipple />}
            label="پرداخت اعتباری"
            sx={{ '& .MuiTypography-root': { fontSize: 18 } }}
          />
        </RadioGroup>
      </FormControl>

      <FormControlLabel
        sx={{ mt: 2 }}
        label="تحویل فیزیکی شمش تنها با ارائه کارت ملی هوشمند یا شناسنامه جدید امکان‌پذیر می‌باشد."
        control={
          <Checkbox
            checked={checked}
            onChange={handleChangeBox}
            sx={{
              '&.Mui-checked': {
                color: 'primary.main',
              },
            }}
          />
        }
      />

      <Stack mt={3} direction="row" gap={2}>
        <Button
          variant="contained"
          color="primary"
          disabled={!checked}
          sx={{
            fontSize: 20,
            py: 1.3,
            borderRadius: 2,
            width: '70%',
            '&:hover': { bgcolor: 'primary.main' },
          }}
          onClick={handleClick}
        >
          تایید سفارش
        </Button>

        <Button
          variant="outlined"
          color="inherit"
          onClick={() => setOpen(false)}
          sx={{
            fontSize: 16,
            py: 1.3,
            borderRadius: 2,
            width: '30%',
            '&:hover': { bgcolor: 'background.default' },
          }}
        >
          انصراف
        </Button>
      </Stack>
    </Stack>
  );
}