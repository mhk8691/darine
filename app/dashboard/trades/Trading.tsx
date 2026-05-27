'use client';
import Card from '@/app/Components/Containers/Container/Container';
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton';
import InputField from '@/app/Components/InputField/InputField';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import {  ToggleItemsType, TradeTableDataType } from '@/app/core/Types';
import { goldBuy } from '@/lib/gold/goldBuy';
import { goldSell } from '@/lib/gold/goldSell';
import { Button, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { isAxiosError } from 'axios';
import {  useState } from 'react';
import { useAssets } from '../AssetsProvider';
import Loading from '@/app/Components/Loading/Loading';
import ChartGold from '@/app/Components/Chart/ChartGold';
import TradesTableContainer from './TradesTableContainer';
import { getReports } from '@/lib/getReports/getReports';
// import TradeGoldConfirmation from './TradeGoldConfirmation';

const items: ToggleItemsType[] = [
  { title: 'خرید', value: 'buy', id: 1 },
  { title: 'فروش', value: 'sell', id: 2 },
];
export default function Trading() {
  const [price, setPrice] = useState('');
  const [gold, setGold] = useState('');
  const [select, setSelect] = useState(items[0].value);
  const [open, setOpen] = useState(false);
  const [isLoading,setIsLoading] = useState(false)
   const [data,setData] = useState<TradeTableDataType[]>([] as TradeTableDataType[])
   const [reportsParams,setReportsParams] = useState('')
  // const [buyInfo, setBuyInfo] = useState<BuyGoldDataType>({} as BuyGoldDataType);
  const {assets,refetch} = useAssets()
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  
  const handlePriceChange =  async (val: string) => {
    setPrice(val);
    const num = Number(val);
    if (!isNaN(num)) {
      setGold(String(num / assets?.current_gold_price));
    } else {
      setGold('');
    }
  };

  const handleGoldChange =async (val: string) => {
    setGold(val);
    const num = Number(val);
    if (!isNaN(num)) {
      setPrice(String(num * assets?.current_gold_price));
    } else {
      setPrice('');
    }
  };

  const handleBuyGold = async () => {
    const methood = assets?.toman_balance > 0 ? 'WALLET':'GATEWAY'
    try {
      setIsLoading(true)
      const response = await goldBuy(price,methood,gold);
      const newData = await getReports('gold',reportsParams)
      setData(newData)
      showSnackbar(response.data.message,true)
      setGold('')
      setPrice('')
      refetch()
      // setBuyInfo(response.data.details)
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }finally{
      setIsLoading(false)
    }
  };
  const handleSellGold = async () => {
    try {
      setIsLoading(true)
      const response = await goldSell(gold);
      const newData = await getReports('gold',reportsParams)
      setData(newData)
      showSnackbar(response.data.message,true)
      setOpen(true);
           setGold('')
      setPrice('')
      refetch()
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }finally{
      setIsLoading(false)
    }
  };
  return (
    <>
       <Grid size={12} container  spacing={{
        xs: 2,
        lg: 3,
      }} direction={'row'}>
        
      
     <Grid size={{ xs: 12, md: 4.8 }}>
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
            type='number'
              placeholder={'ملبغ به تومان'}
              title={'تومان'}
              value={price}
              setValue={handlePriceChange}
            />
          </Stack>
          <Stack>
            <InputField
            type='number'
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
          sx={{ borderRadius: 2, fontSize: 16, height:60 }}
          disabled={isLoading}
        >
          {isLoading ? <Loading size={30}/>:select === 'buy' ? 'خرید' : 'فروش'}
        </Button>
      </Card>
      {/* <TradeGoldConfirmation title={select === 'buy' ? 'تایید خرید طلا':'تایید فروش طلا'} open={open} setOpen={setOpen} data={buyInfo} /> */}
   </Grid>
   <Grid size={{ xs: 12, md: 7.2 }} height={'100%'}>
          <ChartGold
            positionPrice="bottom"
            priceStyle={{
              mt: {
                xs: 2,
                sm: 2.5,
              },
            }}
            cardStyle={{
              py: {
                xs: 2,
                sm: 2.7,
              },
            }}
          />
        </Grid>
        </Grid>
          <Grid size={12}>
        <TradesTableContainer data={data} reportsParams={reportsParams} setData={setData} setReportsParams={setReportsParams} />
      </Grid>
    </>
  );
}
