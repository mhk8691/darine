import { useAssets } from '@/app/AssetsProvider'
import Container from '@/app/Components/Containers/Container/Container'
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker'
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton'
import InputField from '@/app/Components/InputField/InputField'
import Loading from '@/app/Components/Loading/Loading'
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar'
import { ToggleItemsType, TradeTableDataType } from '@/app/core/Types'
import { getReports } from '@/lib/getReports/getReports'
import { goldBuy } from '@/lib/gold/goldBuy'
import { goldSell } from '@/lib/gold/goldSell'
import { Button, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { isAxiosError } from 'axios'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import TradeGoldConfirmation from './TradeGoldConfirmation'
import TradeGuide from './TradeGuide'
import priceFormater from '@/app/core/PriceFormater'



const items: ToggleItemsType[] = [
  { title: 'خرید', value: 'buy', id: 1 },
  { title: 'فروش', value: 'sell', id: 2 },
];
interface Props{
    setData?: Dispatch<SetStateAction<TradeTableDataType[]>>
    reportsParams?:string
dateRange?:DatePickerValue | null
filter?:string
}
export default function Trading({setData,reportsParams,filter,dateRange}:Props) {
      const [price, setPrice] = useState('');
      const [gold, setGold] = useState('');
      const [select, setSelect] = useState(items[0].value);
      const [open, setOpen] = useState(false);
      const [isLoading,setIsLoading] = useState(false)
  const {assets,refetch} = useAssets()
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [openModal,setOpenModal] = useState(false)
      const handlePriceChange =  async (val: string) => {
    setPrice(val);
    const num = Number(val);
    if (!isNaN(num)) {
      if (select === 'buy'){
      setGold(String(num / assets?.gold_price_with_fees.buy));

      }else{
      setGold(String(num / assets?.gold_price_with_fees.sell));

      }
    } else {
      setGold('');
    }
  };

  const handleGoldChange =async (val: string) => {
    setGold(val);
    const num = Number(val);
    if (!isNaN(num)) {
      if (select === 'buy'){
        setPrice(String(num * assets?.gold_price_with_fees.buy));

      }else{
      setPrice(String(num * assets?.gold_price_with_fees.sell));

      }
    } else {
      setPrice('');
    }
  };

  const handleBuyGold = async () => {
    const methood = assets?.wallet_balance > 0 ? 'WALLET':'GATEWAY'
    try {
      setIsLoading(true)
      const response = await goldBuy(methood,gold);
      const newData = await getReports('gold',reportsParams||'',dateRange,filter)
      
      setData&&setData(newData)
      showSnackbar(response.data.message,'success')
      setGold('')
      setPrice('')
      refetch()
      setOpen(false)
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
      const newData = await getReports('gold',reportsParams || '',dateRange,filter)
      setData&&setData(newData)
      showSnackbar(response.data.message,'success')
      setGold('')
      setPrice('')
      refetch()
      setOpen(false);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        showSnackbar(error.response?.data.message);
      }
    }finally{
      setIsLoading(false)
    }
  };
    const handleClearInput = ()=>{
    setPrice('')
    setGold('')
  }
  return (
      <>
      <Container
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
         <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
           <Typography variant="h2" fontSize={22}>
            خرید و فروش طلا
          </Typography>
           <Typography component={'div'} onClick={()=>setOpenModal(true)} variant="h2" fontSize={22} sx={{cursor:'pointer',textDecoration:'underline',color:'#0091F8'}}>
           راهنما
          </Typography>
         </Stack>
        )}
        <FilterToggleButton
        handleClick={handleClearInput}
          items={items}
          active={select}
          setActive={setSelect}
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
        {
          select === 'buy' && <Typography
  variant="body2"
  color="primary"
  component="div"
  sx={{
    display: 'inline-flex',
    width: 'fit-content',
    mt: 1,
    ml: 1,
    cursor: 'pointer',
  }}
  onClick={() => {    setPrice(assets.wallet_balance.toString())
  handlePriceChange(assets.wallet_balance.toString())
  }}
>
  موجودی تومان دردسترس: {priceFormater(assets.wallet_balance)} تومان
</Typography>
        }
          </Stack>
          <Stack>
            <InputField
            type='number'
              placeholder={'وزن طلا'}
              title={'گرم'}
              value={gold}
              setValue={handleGoldChange}
            />
             {
              select === 'sell' &&  <Typography
  variant="body2"
  color="primary"
  component="div"
  sx={{
    display: 'inline-flex',
    width: 'fit-content',
    mt: 1,
    ml: 1,
    cursor: 'pointer',
  }}
  onClick={() => {    setPrice(assets.gold_accessible.toString())
  handleGoldChange(assets.gold_accessible.toString())
  }}
>
  موجودی طلای در دسترس: {priceFormater(assets.gold_accessible)} گرم
</Typography>
             }
          </Stack>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
          sx={{ borderRadius: 2, fontSize: 16, height:60 }}
        >
          {select === 'buy' ? 'خرید' : 'فروش'}
        </Button>
      </Container>
       <TradeGoldConfirmation select={select} title={select === 'buy' ? 'تایید خرید طلا':'تایید فروش طلا'} isLoading={isLoading} handleSubmit={select === 'buy' ? handleBuyGold : handleSellGold} open={open} setOpen={setOpen} tradeData={{
         weight:gold,
        price:+price,
       }} /> 
       <TradeGuide open={openModal} setOpen={setOpenModal} />
      </>
  )
}
