'use client'

import CustomModal from "@/app/Components/CustomModal/CustomModal"
import { Close } from "@mui/icons-material"
import { IconButton, Stack, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface Props{
    open:boolean
    setOpen:Dispatch<SetStateAction<boolean>>
}
export default function LimitOrderGuide({open,setOpen}:Props) {
  return (
    <CustomModal open={open} setOpen={setOpen} modalStyle={{p:2.5,
        overflow: 'auto',}}>
             <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="body1" fontSize={16} fontWeight={'700'}>
           آموزش سفارش با قیمت
          </Typography>
          <IconButton onClick={() => setOpen(false)}  >
            <Close />
          </IconButton>
        </Stack>

        <Stack direction={'column'} gap={1} mt={2}>
            <Typography variant="body1" lineHeight={1.5} textAlign={'justify'}>
          ویژگی «سفارش با قیمت» در دارینه به شما اجازه می‌دهد تا سفارش خرید یا فروش طلا را با قیمت دلخواه خود ثبت کنید تا به محض رسیدن قیمت طلا به این عدد، سفارش به‌صورت خودکار انجام شود.
            </Typography>
            <Stack component={'ul'} direction={'column'} gap={1} px={2}>
                <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
این گزینه از صفحه اصلی پنل کاربری قابل انتخاب است.
                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
برای اینکه خرید انجام شود باید به اندازه کافی پول در کیف پول شما موجود باشد.
          </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
اگر قیمت طلا به عدد انتخابی شما نرسد، سفارش اجرا نخواهد شد و در حالت انتظار برای قیمت درخواستی باقی می‌ماند.
           </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
معامله لزوماً در قیمت انتخابی شما انجام نمی‌شود و این عدد تنها شرط فعال شدن معامله است. سفارش نهایی با اولین قیمت بازار انجام خواهد شد که می‌تواند کمی از عدد انتخابی شما بالاتر یا پایین‌تر باشد.
                </Typography>
                
            </Stack>
            
        </Stack>
    </CustomModal>
  )
}
