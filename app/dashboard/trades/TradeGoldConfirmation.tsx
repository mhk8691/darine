import { useAssets } from '@/app/AssetsProvider'
import CustomModal from '@/app/Components/CustomModal/CustomModal'
import Loading from '@/app/Components/Loading/Loading'
import priceFormater from '@/app/core/PriceFormater'
import { Close } from '@mui/icons-material'
import { Divider, IconButton, Stack, Typography, Button } from '@mui/material'
import  { Dispatch, SetStateAction } from 'react'

interface Props{
    title:string,
    open:boolean,
    setOpen:Dispatch<SetStateAction<boolean>>
    data:{
        weight:number
        price:number
    }
    handleSubmit:() => Promise<void>
    isLoading:boolean
}

export default function TradeGoldConfirmation({open,setOpen,title,data,handleSubmit,isLoading}:Props) {
    const {assets} =  useAssets()
    const remainingBalance = assets.wallet_balance - data.price;

  return (
    <CustomModal open={open} setOpen={setOpen} modalStyle={{p:2}}>
<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="body1" fontSize={18}>
         {title}
        </Typography>
        <IconButton onClick={() => setOpen(false)}  >
          <Close />
        </IconButton>
      </Stack>
      <Typography variant="body2" sx={{mt:2}}>
        شما درحال {title.split(' ')[1]} {priceFormater(data.weight)} گرم طلا با حساب 1.00 درصد کارمزد معادل {priceFormater(data.price)} تومان هستید
      </Typography>
      <Stack direction={'row'} gap={1} alignItems={'center'} mt={2}>
   <Typography variant="body2" >
      {remainingBalance >= 0 ? 'موجودی باقی‌مانده:' : 'کسری موجودی:'}
    </Typography>
    <Typography 
      variant="body2" 
      sx={{ 
        color: remainingBalance >= 0 ? 'success.main' : 'error.main',
        fontWeight: 'bold'
      }}
    >
      {priceFormater(Math.abs(remainingBalance))} تومان
      {remainingBalance < 0 && ' (مقدار منفی)'} 
    </Typography>
      </Stack>
        <Stack direction={'column'} gap={1}  mt={3}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
                <Typography variant="body2" >
وزن طلا:
                </Typography>
                  <Typography variant="body2" >
                    {priceFormater(data.weight)} گرم
                </Typography>
            </Stack>
            <Divider/>
             <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
                <Typography variant="body2" >
مبلغ کل خرید:
                </Typography>
                  <Typography variant="body2" >
                     {priceFormater(data.price)} تومان
                </Typography>
            </Stack>
            <Divider/> <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
                <Typography variant="body2" >
موجودی کیف پول:
                </Typography>
                  <Typography variant="body2" >
                    {priceFormater(assets.wallet_balance)} تومان
                </Typography>
            </Stack>
        </Stack>
        <Button variant="contained" color="primary" disabled={isLoading} sx={{width:'100%',py:1.2,fontSize:18,borderRadius:2,mt:3}} onClick={()=>handleSubmit()}>
          {isLoading ? <Loading size={30}/>:'تایید'}
        </Button>
    </CustomModal>
  )
}
