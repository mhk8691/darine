import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Counter from '../gold-shop/[productId]/Counter';
import { Dispatch, SetStateAction } from 'react';
import { CartItem } from '../core/Types';
import priceFormater from '../core/PriceFormater';

interface Props{
  cartData:CartItem[]
  setCartData:Dispatch<SetStateAction<CartItem[]>>
}
export default function MobileCart({cartData,setCartData}:Props) {
  return (
    <Stack direction={'column'} gap={2}>
      {cartData?.map((item) => (
        <Stack
          key={item.id}
          border={1}
          borderColor={'background.paper'}
          px={2}
          pb={3}
          borderRadius={2}
          direction={'column'}
          gap={2}
        >
          <Stack direction={'row'} gap={1} alignItems={'center'}>
            <Image src={'/images/product.webp'} alt={item.name} width={120} height={120} />
            <Stack direction={'column'} gap={1}>
              <Typography variant="body2" sx={{ color: 'text.title' }} fontWeight={'bold'}>
                {item.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.title' }} fontSize={12}>
                {priceFormater(item.weight)} گرم
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.title' }} fontSize={12}>
                {priceFormater(item.total_price)} تومان
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Counter cart={cartData} setCart={setCartData} productId={item.id} style={{
              width: '120px',
            }} />
            <Typography variant="h6" fontSize={18}>
              {priceFormater(item.total_price * item.quantity)} تومان
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
