import { useAssets } from '@/app/AssetsProvider'
import Container from '@/app/Components/Containers/Container/Container'
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker'
import FilterToggleButton from '@/app/Components/FilterToggleButton/FilterToggleButton'
import InputField from '@/app/Components/InputField/InputField'
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar'
import { BuyCalculateType, ToggleItemsType, TradeTableDataType } from '@/app/core/Types'
import { getReports } from '@/lib/getReports/getReports'
import { goldBuy } from '@/lib/gold/goldBuy'
import { goldSell } from '@/lib/gold/goldSell'
import { Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { isAxiosError } from 'axios'
import React, { Dispatch, SetStateAction,  useState } from 'react'
import TradeGuide from './TradeGuide'
import priceFormater from '@/app/core/PriceFormater'
import { buyCalculate, sellCalculate } from '@/lib/calculate/calculate'
import CustomOrderConfirmation, { OrderListType } from '@/app/Components/CustomOrderConfirmation/CustomOrderConfirmation'



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
          const [calculateData,setCalculateData] = useState<BuyCalculateType>({} as BuyCalculateType)
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

    const getDataBuy = async ()=>{
        try{
          const response = await buyCalculate(price)
          setCalculateData(response.data)
          setOpen(true)
        }
        catch(error:unknown){
          if (isAxiosError(error)){
            showSnackbar(error.response?.data.message,'error')
          }
        }
      }
       const getDataSell = async ()=>{
        try{
          const response = await sellCalculate(gold)
          setCalculateData(response.data)
          setOpen(true)
        }
        catch(error:unknown){
          if (isAxiosError(error)){
            showSnackbar(error.response?.data.message,'error')
          }
        }
      }

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
  const title = select === 'buy' ? 'تایید خرید طلا':'تایید فروش طلا'
  const tradeDataList: OrderListType[] = [
  {
    title: 'وزن طلا:',
    value: `${priceFormater(calculateData.gold_weight)} گرم`,
  },
  {
    title: 'قیمت لحظه ای هر گرم طلا:',
    value: `${priceFormater(calculateData.gold_price)} تومان`,
  },
  {
    title: `مبلغ کل ${select === 'buy' ? 'خرید' : 'فروش'}:`,
    value: `${priceFormater(calculateData.total_toman)} تومان`,
  },
];
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
          onClick={() => select === 'buy' ? getDataBuy():getDataSell()}
          sx={{ borderRadius: 2, fontSize: 16, height:60 }}
        >
          {select === 'buy' ? 'خرید' : 'فروش'}
        </Button>
      </Container>
       <CustomOrderConfirmation
        handleSubmit={select === 'buy' ? handleBuyGold : handleSellGold}
        isEnoughBalance={calculateData.enough_balance}
        isLoading={isLoading}
        open={open}
        setOpen={setOpen}
        title={title}
        data={tradeDataList}
        >
          <Typography variant="body2" sx={{mt:2}}>
                  شما درحال {title.split(' ')[1]} {priceFormater(calculateData.gold_weight)} گرم طلا با حساب {calculateData.fee_rate} درصد کارمزد معادل {priceFormater(calculateData.total_toman)} تومان هستید
          </Typography>
          <Stack direction={'row'} gap={1} alignItems={'center'} mt={2}>
             <Typography variant="body2" >
               {select === 'buy' ? ' موجودی کیف پول:':'موجودی طلا:'}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 'bold',
                          color:select === 'buy' ?calculateData?.wallet?.accessible_toman >=0?'success.main':'error.main':  assets.gold_accessible >= 0 ? 'success.main':'error.main'
          
                }}
              >
                {priceFormater(select === 'buy'?calculateData.wallet?.accessible_toman:assets.gold_accessible)} {select === 'buy' ? 'تومان':'گرم'} 
              </Typography>
          </Stack>
        </CustomOrderConfirmation>
       <TradeGuide open={openModal} setOpen={setOpenModal} />
      </>
  )
}
