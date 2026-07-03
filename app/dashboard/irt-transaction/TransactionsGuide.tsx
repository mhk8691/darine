'use client'

import CustomModal from "@/app/Components/CustomModal/CustomModal"
import { Close } from "@mui/icons-material"
import { IconButton, Stack, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface Props{
    open:boolean
    setOpen:Dispatch<SetStateAction<boolean>>
}
export default function TransactionsGuide({open,setOpen}:Props) {
  return (
    <CustomModal open={open} setOpen={setOpen} modalStyle={{p:2.5, height: '80%',
        overflow: 'auto',}}>
             <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant="body1" fontSize={16} fontWeight={'500'}>
          آموزش واریز و برداشت

          </Typography>
          <IconButton onClick={() => setOpen(false)}  >
            <Close />
          </IconButton>
        </Stack>

        <Stack direction={'column'} gap={1} mt={2}>
            <Typography variant="body1" lineHeight={1.5} textAlign={'justify'}>
               فرآیند واریز و برداشت پول در دارینه از بخش «واریز و برداشت» اپلیکیشن قابل انجام است.
            </Typography>
            <Stack component={'ul'} direction={'column'} gap={1} px={2}>
                <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
اول مطمئن شوید که در بخش «واریز» گزینه «درگاه پرداخت» فعال است.
                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
مبلغ دلخواه خود را وارد کنید و روی «واریز» بزنید.
             </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
توجه داشته باشید که حداقل میزان واریز از درگاه ۵ هزار تومان است.
    
   </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
در سایت بانک، مشخصات کارت و رمز پویای خود را وارد کنید و مراحل خرید را تکمیل کنید.

                </Typography>
                 
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
پرداخت حتماً باید از حساب بانکی که به نام خودتان است، انجام شود. در غیر این صورت مبلغ واریزی در حالت انتظار قرار می‌گیرد و بعد از پیگیری شما طی ۳ روز کاری به حساب‌تان برگشت داده می‌شود.
                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
بعد از تکمیل این مراحل، کیف پول شما شارژ می‌شود و می‌توانید طلا بخرید.
                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
برای مبالغ کمتر از ۴۰۰ میلیون تومان استفاده از واریز اینترنتی پیشنهاد می‌شود زیرا واریز مستقیم براساس سیکل پایا پردازش می‌شود و ممکن است مبلغ واریزی با تاخیر چند ساعته در حساب شما اعمال شود.

                </Typography>
            </Stack>
             <Typography variant="body1" lineHeight={1.5} textAlign={'justify'} mt={1}>
              برای واریز مستقیم با شماره شبا (مناسب مبالغ بالاتر):
            </Typography>
              <Stack component={'ul'} direction={'column'} gap={1} px={2}>
                <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
در همین بخش گزینه «واریز مستقیم» را انتخاب کنید.
                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
اگر قبلاً کارت بانکی خود را ثبت نکرده‌اید، روی «افزودن کارت» بزنید و شماره کارت بانکی خودتان را وارد کنید.
             </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
واریز حتماً باید از حساب بانکی که به نام خودتان است، انجام شود. در غیر این صورت مبلغ واریزی در حالت انتظار قرار می‌گیرد و بعد از پیگیری شما طی ۳ روز کاری به حساب‌تان برگشت داده می‌شود.
    
   </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
روی «نمایش اطلاعات حساب مقصد» بزنید.

                </Typography>
                 
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
بعد از تأیید هشدارها، شماره شبای دارینه نمایش داده می‌شود و می‌توانید مبلغ مورد نظرتان را به این شماره واریز کنید.
                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
واریز مستقیم مناسب مبالغ بالاتر از ۴۰۰ میلیون تومان است. اگر مبلغ شما از این عدد کمتر است استفاده از واریز اینترنتی پیشنهاد می‌شود. سقف واریز مستقیم نیز به بانک شما بستگی دارد.
                </Typography>
              
            </Stack>
              <Typography variant="body1" lineHeight={1.5} textAlign={'justify'} mt={1}>
برای برداشت پول:
            </Typography>
              <Stack component={'ul'} direction={'column'} gap={1} px={2}>
                <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
از همین بخش گزینه «برداشت» را انتخاب کنید.
                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
اگر می‌خواهید مبلغ به حساب بانکی‌تان واریز شود، در قسمت «به حساب بانکی» مبلغ را وارد کرده و یکی از کارت‌های ثبت‌شده را انتخاب کنید.
             </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
اگر هنوز هیچ کارتی ثبت نکرده‌اید، با استفاده از گزینه «افزودن کارت» یک کارت بانکی که به نام خودتان است، وارد کنید.
    
   </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
در نهایت با زدن گزینه «برداشت» و تأیید، درخواست شما ثبت شده و مطابق سیکل پایا به حسابتان واریز می‌شود.

                </Typography>
                 
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
برای پیگیری وضعیت برداشت‌ها می‌توانید از پایین صفحه درخواست‌های قبلی خود را ببینید یا در صورت نیاز آن‌ها را لغو کنید.
                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
حداقل میزان برداشت پول ۵۰ هزار تومان است.
                </Typography>
              
            </Stack>
             <Typography variant="body1" lineHeight={1.5} textAlign={'justify'} mt={1}>
برای انتقال موجودی تومانی از دارینه به نقرینه:

            </Typography>

            <Stack component={'ul'} direction={'column'} gap={1} px={2}>
                <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
در قسمت «برداشت» گزینه «به نقرینه» را انتخاب کنید.
                </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
مبلغ مورد نظر را وارد کنید.
             </Typography>
                 <Typography component={'li'} variant="body1" lineHeight={1.5} textAlign={'justify'} fontWeight={'bold'}>
روی «برداشت» بزنید تا پول شما از کیف پول دارینه به کیف پول نقرینه انتقال داده شود.
    
   </Typography>
           
              
            </Stack>
        </Stack>
    </CustomModal>
  )
}
