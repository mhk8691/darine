import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Counter from '../gold-shop/[productId]/Counter';
import { useState } from 'react';
import { CartDataType } from '../core/Types';

interface Props{
  cartData:CartDataType
}
export default function MobileCart({cartData}:Props) {
  const [count,setCount] = useState(1)
  return (
    <Stack direction={'column'} gap={2}>
      {cartData?.items?.map((item) => (
        <Stack
          key={item.id}
          border={1}
          borderColor={'background.paper'}
          p={2}
          borderRadius={2}
          direction={'column'}
          gap={2}
        >
          <Stack direction={'row'} gap={1} alignItems={'center'}>
            <Image src={item.porudct_details.image} alt={item.porudct_details.name} width={64} height={64} />
            <Stack direction={'column'} gap={1}>
              <Typography variant="body2" sx={{ color: 'text.title' }} fontWeight={'bold'}>
                {item.porudct_details.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.title' }} fontSize={12}>
                {item.porudct_details.weight}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.title' }} fontSize={12}>
                {item.porudct_details.total_price} تومان
              </Typography>
            </Stack>
          </Stack>
          {/* <Counter count={count}
setCount={setCount} /> */}
        </Stack>
      ))}
    </Stack>
  );
}
