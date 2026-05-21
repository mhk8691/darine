'use client';
import Card from '@/app/Components/Containers/Container/Container';
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import {  BuyGoldDataType, ToggleItemsType } from '@/app/core/Types';
import { getAssets } from '@/lib/getAssets/getAssets';
import { goldBuy } from '@/lib/gold/goldBuy';
import { goldSell } from '@/lib/gold/goldSell';
import { Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
// import TradeGoldConfirmation from './TradeGoldConfirmation';

const items: ToggleItemsType[] = [
  { title: 'خرید', value: 'buy', id: 1 },
  { title: 'فروش', value: 'sell', id: 2 },
];
export default function Trading() {
  const [price, setPrice] = useState('');
  const [gold, setGold] = useState('');
  const [select, setSelect] = useState(items[0].value);
  const [livePrice,setLivePrice] = useState(0)
  const [walletBalance,setWalletBalance] = useState(0)
  const [open, setOpen] = useState(false);
  const [buyInfo, setBuyInfo] = useState<BuyGoldDataType>({} as BuyGoldDataType);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));


     useEffect(() => {
    const handleLivePrice = async ()=>{
    try{
      const response = await getAssets()
      setLivePrice(response.current_gold_price)
      setWalletBalance(response.toman_balance)
    }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)
      }
    }
  }
handleLivePrice()
    
    const interval = setInterval(() => {
      handleLivePrice();
    }, 45 * 1000);

    return () => clearInterval(interval);
  }, []);
    useEffect(() => {
  if (!livePrice) return;

  if (price) {
    const num = Number(price);
    if (!isNaN(num)) {
      setGold(String(num / livePrice));
    }
  }

  if (gold) {
    const num = Number(gold);
    if (!isNaN(num)) {
      setPrice(String(num * livePrice));
    }
  }
}, [livePrice]);
  const handlePriceChange =  async (val: string) => {
    setPrice(val);
    const num = Number(val);
    if (!isNaN(num)) {
      setGold(String(num / livePrice));
    } else {
      setGold('');
    }
  };

  const handleGoldChange =async (val: string) => {
    setGold(val);
    const num = Number(val);
    if (!isNaN(num)) {
      setPrice(String(num * livePrice));
    } else {
      setPrice('');
    }
  };

  const handleBuyGold = async () => {
    const methood = walletBalance > 0 ? 'WALLET':'GATEWAY'
    try {
      const response = await goldBuy(price,methood,gold);
      showSnackbar(response.data.message,true)
      setGold('')
      setPrice('')
      // setBuyInfo(response.data.details)
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }
  };
  const handleSellGold = async () => {
    try {
      const response = await goldSell(gold);
      showSnackbar(response.data.message,true)
      setOpen(true);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }
  };
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => (select === 'buy' ? handleBuyGold() : handleSellGold())}
          sx={{ borderRadius: 2, fontSize: 16, py: 1.4 }}
        >
          {select === 'buy' ? 'خرید' : 'فروش'}
        </Button>
      </Card>
      {/* <TradeGoldConfirmation title={select === 'buy' ? 'تایید خرید طلا':'تایید فروش طلا'} open={open} setOpen={setOpen} data={buyInfo} /> */}
    </>
  );
}
