'use client';

import Card from '@/app/Components/Containers/Container/Container';
import { TransferIcon } from '@/app/Components/CustomIcons/CustomIcons';
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import { ToggleItemsType } from '@/app/core/Types';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';

interface Props {
  type: 'buy' | 'sell';
}

const buyItems: ToggleItemsType[] = [
  { title: 'در قیمت پایین تر', value: 'min', id: 1 },
];
const sellItems: ToggleItemsType[] = [
  { title: 'در قیمت بالاتر', value: 'max', id: 1 },
];
const RATE = 17999000;

export default function Trade({ type }: Props) {
  const [price, setPrice] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [select, setSelect] = useState(type === 'sell' ? sellItems[0].value : buyItems[0].value);

  const gold = price ? String(Number(price) / RATE) : '';

  return (
    <Card
      style={{
        gap: 3.5,
        border: 'none',
        py: 1,
        px: { xs: 0, sm: 1 },
      }}
    >
      {
        type === 'buy' ? <FilterToggleButton style={{py:1.5}} items={buyItems} active={select} setActive={setSelect} /> : <FilterToggleButton style={{py:1.5}} items={sellItems} active={select} setActive={setSelect} />
      }
      
      

      <Stack gap={3.5}>
        <InputField type='number'
          placeholder={type === 'buy' ? 'قیمت مد نظر خرید' : 'قیمت مد نظر فروش'}
          title="تومان"
          value={targetPrice}
          setValue={setTargetPrice}
        />

        <Stack gap={1.5}>
          <InputField type='number' placeholder="مبلغ به تومان" title="تومان" value={price} setValue={setPrice} />
          <Stack direction="row" justifyContent="center">
            <Stack
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#FEF2C0',
                borderRadius: '50%',
                color: 'black',
                width: 35,
                height: 35,
              }}
            >
              <TransferIcon />
            </Stack>
          </Stack>

          <InputField type='number' placeholder="وزن طلا" title="گرم" value={gold} setValue={() => {}} />
        </Stack>
      </Stack>

      <Button variant="contained" color="primary" sx={{ borderRadius: 2, fontSize: 16, py: 1.4 }}>
        ثبت سفارش
      </Button>
    </Card>
  );
}
