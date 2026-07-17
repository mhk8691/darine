import { useAssets } from '@/app/AssetsProvider'
import CustomModal from '@/app/Components/CustomModal/CustomModal'
import Loading from '@/app/Components/Loading/Loading'
import priceFormater from '@/app/core/PriceFormater'
import { LimitOrderCalculateType } from '@/app/core/Types'
import { Close } from '@mui/icons-material'
import { Divider, IconButton, Stack, Typography, Button } from '@mui/material'
import { Dispatch, SetStateAction} from 'react'

interface Props {
  title: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>

  handleSubmit: () => Promise<void>
  isLoading: boolean
  select: string
  data:LimitOrderCalculateType
}



export default function LimitOrderConfirmation({ data,select, open, setOpen, title, handleSubmit, isLoading}: Props) {
  const { assets } = useAssets()



  const accessibleAmount = select === 'min'
    ? data.wallet?.accessible_toman
    : (data.inventory?.accessible_balance ?? assets.gold_accessible)

  return (
    <CustomModal open={open} setOpen={setOpen} modalStyle={{ p: 2 }}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="body1" fontSize={18}>
          {title}
        </Typography>
        <IconButton onClick={() => setOpen(false)}>
          <Close />
        </IconButton>
      </Stack>

      <Typography variant="body2" sx={{ mt: 2 }}>
        شما درحال {title.split(' ')[1]} {priceFormater(data.gold_weight)} گرم طلا با حساب {data.fee_rate} درصد کارمزد معادل {priceFormater(data.total_price)} تومان هستید
      </Typography>

      <Stack direction={'row'} gap={1} alignItems={'center'} mt={2}>
        <Typography variant="body2">
          {select === 'min' ? 'موجودی کیف پول:' : 'موجودی طلا:'}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 'bold',
            color: (accessibleAmount ?? 0) >= 0 ? 'success.main' : 'error.main'
          }}
        >
          {priceFormater(accessibleAmount)} {select === 'min' ? 'تومان' : 'گرم'}
        </Typography>
      </Stack>

      {data.enough_balance === false && (
        <Typography variant="body2" color="error.main" mt={1}>
          موجودی شما برای این تراکنش کافی نیست
        </Typography>
      )}

      <Stack direction={'column'} gap={1} mt={3}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
          <Typography variant="body2">وزن طلا:</Typography>
          <Typography variant="body2">{priceFormater(data.gold_weight)} گرم</Typography>
        </Stack>
        <Divider />

        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
          <Typography variant="body2">قیمت لحظه ای هر گرم طلا:</Typography>
          <Typography variant="body2">{priceFormater(data.current_price)} تومان</Typography>
        </Stack>
        <Divider />

        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
          <Typography variant="body2">قیمت هدف (سفارش):</Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{priceFormater(data.target_price)} تومان</Typography>
        </Stack>
        <Divider />

        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
          <Typography variant="body2">قیمت خالص:</Typography>
          <Typography variant="body2">{priceFormater(data.pure_price)} تومان</Typography>
        </Stack>
        <Divider />

        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
          <Typography variant="body2">کارمزد:</Typography>
          <Typography variant="body2">{priceFormater(data.fee)} تومان</Typography>
        </Stack>
        <Divider />

        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} py={.75}>
          <Typography variant="body2">مبلغ کل {select === 'min' ? 'خرید' : 'فروش'}:</Typography>
          <Typography variant="body2">{priceFormater(data.total_price)} تومان</Typography>
        </Stack>
      </Stack>

      <Button
        variant="contained"
        color="primary"
        disabled={isLoading || data.enough_balance === false}
        sx={{ width: '100%', py: 1.2, fontSize: 18, borderRadius: 2, mt: 3 }}
        onClick={() => handleSubmit()}
      >
        {isLoading ? <Loading size={30} /> : 'تایید'}
      </Button>
    </CustomModal>
  )
}