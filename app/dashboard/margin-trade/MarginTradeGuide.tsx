import React, { Dispatch, SetStateAction } from 'react'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import CustomModal from '@/app/Components/CustomModal/CustomModal';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MarginTradeGuide({open,setOpen}:Props) {
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
             ضریب
          </Typography>
          <IconButton onClick={() => setOpen(false)}  >
            <Close />
          </IconButton>
        </Stack>
        <Typography variant="body1" fontSize={15} fontWeight={'500'} textAlign={'justify'} lineHeight={'25.6px'} sx={{ mt: 3 }}>
ضریب در معاملات تعهدی این امکان را فراهم می‌سازد تا با سرمایه‌ای کمتر، حجم بزرگ‌تری از معاملات را انجام دهید. در صورت موفقیت، سود بیشتری حاصل خواهد شد، اما توجه داشته باشید که افزایش ضریب با ریسک بالاتری همراه است و ممکن است میزان زیان شما نیز به همان نسبت افزایش یابد.
به عنوان مثال، با سرمایه ۱ میلیون تومانی و ضریب ۳، می‌توانید معامله‌ای به ارزش ۳ میلیون تومان انجام دهید. در این حالت، هرگونه نوسان قیمتی سه‌برابر روی سود یا زیان شما تأثیر خواهد داشت.        </Typography>
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
بستن
          </Button>
     
      </CustomModal>
  )
}
