'use client'

import CustomModal from "@/app/Components/CustomModal/CustomModal"
import { Close } from "@mui/icons-material"
import { IconButton, Stack, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface Props{
    open:boolean
    setOpen:Dispatch<SetStateAction<boolean>>
}
export default function TradeGuide({open,setOpen}:Props) {
  return (
    <CustomModal open={open} setOpen={setOpen} modalStyle={{p:2.5, height: '80%',
        overflow: 'auto',}}>
             <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="body1" fontSize={16} fontWeight={'500'}>
           آموزش خرید و فروش
          </Typography>
          <IconButton onClick={() => setOpen(false)}  >
            <Close />
          </IconButton>
        </Stack>

        <Stack direction={'column'} gap={1} mt={2}>
            <Typography variant="body1" lineHeight={1.5} textAlign={'justify'}>
                حداقل میزان خرید و فروش طلا در دارینه ۱۰۰ هزار تومان است و سقفی ندارد. برای این کار از صفحه‌ی اصلی دارینه گزینه «خرید و فروش» یا از منوی پایین صفحه، گزینه «سفارش» رو انتخاب کنید.
برای خرید طلا، مطمئن شوید که برگه «خرید» فعال است و مراحل زیر را دنبال کنید:
            </Typography>
            <Stack component={'ul'} direction={'column'} gap={1} px={2}>
                <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
در کادر اول مبلغ خرید خود را به تومان وارد کنید تا معادل گرمی آن به‌صورت خودکار در کادر دوم نمایش داده شود.
                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
همچنین می‌توانید ابتدا وزن طلای مورد نظر خود را در کادر دوم بنویسید تا مبلغ تومانی آن به‌صورت خودکار در کادر اول نمایش داده شود.                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
اگر می‌خواهید با کل موجودی تومانی خودتان طلا بخرید، گزینه «انتخاب کل موجودی» را بزنید تا کادرها خودکار پر شوند.                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
روی گزینه «خرید» بزنید و در صفحه جدید، جزئیات سفارش خود را ببینید و آن را تایید کنید.
                </Typography>
                 
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
در نهایت با زدن «پرداخت» یا «تأیید» خرید شما نهایی می‌شود.
                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
اگر کیف پول‌ شما شارژ داشته باشد، مبلغ سفارش از آن کسر می‌شود. در غیر این صورت به درگاه پرداخت هدایت می‌شوید و باید خرید خود را تکمیل کنید.
                </Typography>
            </Stack>
             <Typography variant="body1" lineHeight={1.5} textAlign={'justify'}>
               برای فروش طلا نیز باید همین مراحل را دنبال کنید با این تفاوت که ابتدا باید از همین بخش، برگه «فروش» را انتخاب کرده و مبلغ تومانی یا وزن طلا را وارد کنید و روی «فروش» بزنید.
همچنین در پایین صفحه نمودار قیمت طلا و لیست معاملات اخیر شما قابل مشاهده است. با انتخاب هر سفارش قبلی می‌توانید جزئیات و فاکتور آن را هم ببینید.
            </Typography>
        </Stack>
    </CustomModal>
  )
}
