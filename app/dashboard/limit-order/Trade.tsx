'use client';

import { useAssets } from '@/app/AssetsProvider';
import Card from '@/app/Components/Containers/Container/Container';
import { TransferIcon } from '@/app/Components/CustomIcons/CustomIcons';
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import Loading from '@/app/Components/Loading/Loading';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import priceFormater from '@/app/core/PriceFormater';
import { editLimitOrder, limitOrder } from '@/lib/limit-order/limitOrder';
import { Button, Stack, Typography } from '@mui/material';
import { isAxiosError } from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { buyItems, sellItems } from './LimitOrder';
import LimitOrderConfirmation from './LimitOrderConfirmation';

interface Props {
  type: 'BUY' | 'SELL';
  getData: () => Promise<void>;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
  targetPrice: string;
  setTargetPrice: Dispatch<SetStateAction<string>>;
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  gold: string;
  setGold: Dispatch<SetStateAction<string>>;
  select: string;
  setSelect: Dispatch<SetStateAction<string>>;
  tab: number; // تب فعال والد - برای تشخیص اینکه این Trade خودش الان دیده می‌شه یا نه
}

export default function Trade({
  id,
  setId,
  editMode,
  setEditMode,
  type,
  getData,
  gold,
  price,
  select,
  setGold,
  setPrice,
  setSelect,
  setTargetPrice,
  targetPrice,
  tab,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [open,setOpen] = useState(false)
  const { assets } = useAssets();
const handlePriceChange = (val: string) => {
  setPrice(val);

  const total = Number(val);
  const price = Number(targetPrice);
  const fee = 1 + Number(assets.fees.gold_buy_fee);

  if (!isNaN(total) && !isNaN(price) && price > 0) {
    setGold((total / (fee * price)).toString());
  } else {
    setGold('');
  }
};

const handleGoldChange = (val: string) => {
  setGold(val);

  const weight = Number(val);
  const price = Number(targetPrice);
  const fee = 1 + Number(assets.fees.gold_buy_fee);

  if (!isNaN(weight) && !isNaN(price) && price > 0) {
    setPrice((weight * price * fee).toString());
  } else {
    setPrice('');
  }
};
useEffect(() => {
  const target = Number(targetPrice);

  if (!target || target <= 0) {
    return;
  }

  if (type === 'BUY') {
    const total = Number(price);

    if (total > 0) {
      const fee = 1 + Number(assets.fees.gold_buy_fee);
      setGold((total / (fee * target)).toString());
    }
  } else {
    const weight = Number(gold);

    if (weight > 0) {
      const fee = 1 + Number(assets.fees.gold_buy_fee);
      setPrice((weight * target * fee).toString());
    }
  }
}, [targetPrice]);useEffect(() => {
  const target = Number(targetPrice);

  if (!target || target <= 0) {
    return;
  }

  if (type === 'BUY') {
    const total = Number(price);

    if (total > 0) {
      const fee = 1 + Number(assets.fees.gold_buy_fee);
      setGold((total / (fee * target)).toString());
    }
  } else {
    const weight = Number(gold);

    if (weight > 0) {
      const fee = 1 + Number(assets.fees.gold_buy_fee);
      setPrice((weight * target * fee).toString());
    }
  }
}, [targetPrice]);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      if (editMode) {
        const response = await editLimitOrder(id, targetPrice, gold, price);
        showSnackbar( response?.message, 'success');
        setEditMode(false);
        setId(0);
      } else {
        const response = await limitOrder(type, targetPrice, type === 'BUY' ? price : gold);
        showSnackbar(response.data.message, 'success');
      }

      getData();
      setPrice('');
      setGold('');
      setTargetPrice('');
      setOpen(false)
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    handleClearInput()
    const isActive = (type === 'BUY' && tab === 0) || (type === 'SELL' && tab === 1);
    if (isActive && !editMode) {
      setSelect(type === 'BUY' ? 'min' : 'max');
    }
  }, [tab]);

    const handleClearInput = ()=>{
    setPrice('')
    setGold('')
  }

  return (
    <>
    <Stack component={'div'} id="trade">
      <Card
        style={{
          gap: 3.5,
          border: 'none',
          py: 1,
          px: { xs: 0, sm: 1 },
        }}
      >
        {type === 'BUY' ? (
          <FilterToggleButton style={{ py: 1.5 }} items={buyItems} active={select} setActive={setSelect} />
        ) : (
          <FilterToggleButton style={{ py: 1.5 }} items={sellItems} active={select} setActive={setSelect} />
        )}

        <Stack gap={3.5} component={'div'}>
          <InputField
            type="number"
            placeholder={type === 'BUY' ? 'قیمت مد نظر خرید' : 'قیمت مد نظر فروش'}
            title="تومان"
            value={targetPrice}
            setValue={setTargetPrice}
          />

          <Stack gap={1.5}>
            <InputField type="number" placeholder="مبلغ به تومان" title="تومان" value={price} setValue={handlePriceChange} />
            {type === 'BUY' ? (
              <Typography
                variant="body2"
                color="primary"
                component="div"
                sx={{
                  display: 'inline-flex',
                  width: 'fit-content',
                  ml: 1,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  handlePriceChange(assets.wallet_balance.toString());
                }}
              >
                موجودی تومان دردسترس: {priceFormater(assets.wallet_balance)} تومان
              </Typography>
            ) : (
              <Typography
                variant="body2"
                color="primary"
                component="div"
                sx={{
                  display: 'inline-flex',
                  width: 'fit-content',
                  ml: 1,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  handleGoldChange(assets.gold_accessible.toString());
                }}
              >
                موجودی طلای در دسترس: {priceFormater(assets.gold_accessible)} گرم
              </Typography>
            )}
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

            <InputField type="number" placeholder="وزن طلا" title="گرم" value={gold} setValue={handleGoldChange} />
          </Stack>
        </Stack>

        <Button variant="contained" onClick={()=>setOpen(true)} color="primary" sx={{ borderRadius: 2, fontSize: 16, py: 1.4 }}>
          ثبت سفارش
        </Button>
      </Card>
    </Stack>
      <LimitOrderConfirmation select={select} title={select === 'min' ? 'تایید خرید طلا':'تایید فروش طلا'} isLoading={isLoading} handleSubmit={handleClick} open={open} setOpen={setOpen} tradeData={{
             weight:gold,
            price:+price,
           }} targetPrice={targetPrice} /> 
    </>
  );
}