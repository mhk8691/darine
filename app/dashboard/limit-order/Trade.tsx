'use client';

import { useAssets } from '@/app/AssetsProvider';
import Card from '@/app/Components/Containers/Container/Container';
import { TransferIcon } from '@/app/Components/CustomIcons/CustomIcons';
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import Loading from '@/app/Components/Loading/Loading';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { ToggleItemsType } from '@/app/core/Types';
import { limitOrder } from '@/lib/limit-order/limitOrder';
import { Button, Stack } from '@mui/material';
import { isAxiosError } from 'axios';
import { useState } from 'react';

interface Props {
  type: 'BUY' | 'SELL';
  getData:() => Promise<void>
}

const buyItems: ToggleItemsType[] = [
  { title: 'در قیمت پایین تر', value: 'min', id: 1 },
];
const sellItems: ToggleItemsType[] = [
  { title: 'در قیمت بالاتر', value: 'max', id: 1 },
];

export default function Trade({ type,getData }: Props) {
  const [isLoading,setIsLoading] = useState(false)
  const [price, setPrice] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [select, setSelect] = useState(type === 'SELL' ? sellItems[0].value : buyItems[0].value);
  const [gold,setGold] = useState('')
  const{assets} = useAssets()
      const handlePriceChange =  async (val: string) => {
    setPrice(val);
    const num = Number(val);
    if (!isNaN(num)) {
      setGold(String(num / assets?.gold_price));
    } else {
      setGold('');
    }
  };

  const handleGoldChange =async (val: string) => {
    setGold(val);
    const num = Number(val);
    if (!isNaN(num)) {
      setPrice(String(num * assets?.gold_price));
    } else {
      setPrice('');
    }
  };
  const handleClick = async ()=>{
    setIsLoading(true)
    try{
      const response = await limitOrder(type,targetPrice,type==='BUY' ? price:gold)
      showSnackbar(response.data.message,'success')
      getData()
      setPrice('')
      setGold('')
      setTargetPrice('')
    }catch(error:unknown){
      if (isAxiosError(error)){
        showSnackbar(error.response?.data.message)
      }
    }finally{
      setIsLoading(false)
    }
  }

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
        type === 'BUY' ? <FilterToggleButton style={{py:1.5}} items={buyItems} active={select} setActive={setSelect} /> : <FilterToggleButton style={{py:1.5}} items={sellItems} active={select} setActive={setSelect} />
      }
      
      

      <Stack gap={3.5}>
        <InputField type='number'
          placeholder={type === 'BUY' ? 'قیمت مد نظر خرید' : 'قیمت مد نظر فروش'}
          title="تومان"
          value={targetPrice}
          setValue={setTargetPrice}
        />

        <Stack gap={1.5}>
          <InputField type='number' placeholder="مبلغ به تومان" title="تومان" value={price} setValue={handlePriceChange} />
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

          <InputField type='number' placeholder="وزن طلا" title="گرم" value={gold} setValue={handleGoldChange} />
        </Stack>
      </Stack>

      <Button variant="contained" disabled={isLoading} onClick={handleClick} color="primary" sx={{ borderRadius: 2, fontSize: 16, py: 1.4 }}>
       {isLoading ? <Loading size={30} />:' ثبت سفارش'}
      </Button>
    </Card>
  );
}
