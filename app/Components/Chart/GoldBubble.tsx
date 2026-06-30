import React, { Dispatch, SetStateAction } from 'react'
import CustomModal from '../CustomModal/CustomModal'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function GoldBubble({open,setOpen}:Props) {
  return (
   <CustomModal
        open={open}
        setOpen={setOpen}
        modalStyle={{
          px: 2,
          pb: 2,
        }}
      >
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="body1" fontSize={16} fontWeight={'500'}>
            حباب قیمت
          </Typography>
          <IconButton onClick={() => setOpen(false)}  >
            <Close />
          </IconButton>
        </Stack>
        <Typography variant="body1" fontSize={15} fontWeight={'500'} textAlign={'justify'} lineHeight={'25.6px'} sx={{ mt: 3 }}>
            حباب طلا به تفاوت بین قیمتی که در بازار برای طلا پرداخت می‌شود و ارزش واقعی آن گفته می‌شود؛ ارزشی که بر اساس قیمت اونس جهانی و نرخ دلار به‌دست می‌آید. در صورتی که قیمت بازار بالاتر از این مقدار باشد، حباب مثبت شکل می‌گیرد و اگر پایین‌تر باشد، حباب منفی در نظر گرفته می‌شود.
        </Typography>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              height:60,
              lineHeight:'25.6px',
              textAlign:'justify',
              fontSize: 16,
              borderRadius: 2,
              width: '100%',
              mt:3
            }}
            onClick={()=>setOpen(false)}
          >
            متوجه شدم
          </Button>
     
      </CustomModal>
  )
}
