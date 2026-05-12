'use client';
import Card from '@/app/Components/Containers/Container/Container';
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { BuyGoldDataType, ToggleItemsType } from '@/app/core/Types';
import { goldBuy } from '@/lib/gold/goldBuy';
import { goldSell } from '@/lib/gold/goldSell';
import { Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { isAxiosError } from 'axios';
import { useState } from 'react';
import TradeGoldConfirmation from './TradeGoldConfirmation';

const items: ToggleItemsType[] = [
  { title: 'خرید', value: 'buy', id: 1 },
  { title: 'فروش', value: 'sell', id: 2 },
];
export default function Trading() {
  const [price, setPrice] = useState('');
  const [gold, setGold] = useState('');
  const [select, setSelect] = useState(items[0].value);
  const [open,setOpen] = useState(false)
  const  [buyInfo,setBuyInfo] = useState<BuyGoldDataType>({} as BuyGoldDataType)
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const handlePriceChange = (val: string) => {
    setPrice(val);

    const num = Number(val);
    if (!isNaN(num)) {
      setGold(String(num / 17999000));
    } else {
      setGold('');
    }
  };

  const handleGoldChange = (val: string) => {
    setGold(val);

    const num = Number(val);
    if (!isNaN(num)) {
      setPrice(String(num * 17999000));
    } else {
      setPrice('');
    }
  };

  const handleBuyGold = async ()=>{
    try{
      const response = await goldBuy(price)
      setOpen(true)
      setBuyInfo(response.data.data)
    }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.error)
      }
    }
  }
    const handleSellGold = async ()=>{
    try{
      const response = await goldSell(gold)
      setOpen(true)
      console.log(response.data.data)
    }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.error)
      }
    }
  }
  return (
    <>
    <Card
      style={{
        gap: 3.15,
        py: 3,
        px: {
          xs: 2,
          sm: 4,
          md: 2,
          lg: 4,
        },
      }}
    >
      {isDesktop && (
        <Typography variant="h2" fontSize={22}>
          خرید و فروش طلا
        </Typography>
      )}
      <FilterToggleButton
        items={items}
        select={select}
        setSelect={setSelect}
        style={{
          fontSize: {
            xs: 16,
            sm: 20,
          },
        }}
      />
      <Stack gap={3.5} flexDirection={select === 'buy' ? 'column' : 'column-reverse'}>
        <Stack>
          <InputField
            placeholder={'ملبغ به تومان'}
            title={'تومان'}
            value={price}
            setValue={handlePriceChange}
          />
        </Stack>
        <Stack>
          <InputField
            placeholder={'وزن طلا'}
            title={'گرم'}
            value={gold}
            setValue={handleGoldChange}
          />
        </Stack>
      </Stack>
      <Button variant="contained" color="primary" onClick={()=>select === 'buy' ? handleBuyGold():handleSellGold()} sx={{ borderRadius: 2, fontSize: 16, py: 1.4 }}>
        {select === 'buy' ? 'خرید' : 'فروش'}
      </Button>
    </Card>
    <TradeGoldConfirmation title={select === 'buy' ? 'تایید خرید طلا':'تایید فروش طلا'} open={open} setOpen={setOpen} data={buyInfo} />
    </>
  );
}
