'use client'
import { Divider, Grid, Stack, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RefralButton from './RefralButton'
import Container from '@/app/Components/Containers/Container/Container'
import priceFormater from '@/app/core/PriceFormater'
import { RefrraDataType } from '@/app/core/Types'
import { getreferral } from '@/lib/getRefrral/getRefrral'
import QRCode from 'react-qr-code'

export default function Invite() {
      const [referralData, setreferralData] = useState<RefrraDataType>({} as RefrraDataType);
      const theme = useTheme()
      const isDarkMode = theme.palette.mode === 'dark'
      useEffect(() => {
        const getData = async () => {
          const response = await getreferral();
          setreferralData(response || ({} as RefrraDataType));
        };
        getData();
      }, []);
  return (
     <Grid
          size={{
            xs: 12,
            md: 7,
            lg: 7,
          }}
          order={{
            xs: 2,
            md: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'text.title',
              display: {
                xs: 'none',
                md: 'block',
              },
            }}
            fontSize={{
              xs: 16,
              sm: 22,
            }}
          >
           طلا فروش شو
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              mt: {
                xs: 0,
                sm: 2.5,
              },
            }}
            fontSize={{
              xs: 12,
              sm: 18,
            }}
          >
            با دعوت از دوستان خود {referralData.referral_percent}% از کارمزد هر خرید آن‌ها، برای شما
            واریز خواهد شد.
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: 'text.title', mt: 3 }}
            fontSize={{
              xs: 16,
              sm: 20,
            }}
            fontWeight={500}
          >
            کد نمایندگی شما
          </Typography>
          
            <RefralButton referralData={referralData} />
          <Container
            style={{
              px: {
                xs: 2,
                sm: 4,
              },
              py: {
                xs: 1.5,
                sm: 3,
              },
              mt: 3.5,
            }}
          >
            <Typography
              variant="h6"
              fontSize={{
                xs: 12,
                sm: 14,
              }}
              sx={{ color: 'text.title' }}
            >
              خلاصه فعالیت شما
            </Typography>
            <Stack direction={'row'} justifyContent={'space-between'} mt={2.5}>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: 'text.muted' }}
              >
                مجموع کاربران دعوت شده توسط شما:
              </Typography>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                sx={{ color: 'text.title' }}
              >
                {priceFormater(referralData.referrals_count)} نفر
              </Typography>
            </Stack>
            <Divider sx={{ my: 1.5 }} />
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: 'text.muted' }}
              >
               مجموع دریافتی شما از طلا فروش شو:
              </Typography>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                sx={{ color: 'text.title' }}
              >
                {priceFormater(referralData.total_earnings)} تومان
              </Typography>
            </Stack>
               <Divider sx={{ my: 1.5 }} />
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 10,
                  sm: 12,
                }}
                sx={{ color: 'text.muted' }}
              >
              مجموع فروش طلا:
              </Typography>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                sx={{ color: 'text.title' }}
              >
                {priceFormater(referralData.total_gold_sales)} تومان
              </Typography>
            </Stack>
              <Stack width={'100%'} mt={5} direction={'column'} justifyContent={'center'} alignItems={'center'} gap={3}>
                <Typography variant="body2" >
                  برای دعوت دوستان، لطفا کیو  آر کد  زیر را اسکن کنید.
                </Typography>
                 <QRCode
                  bgColor={isDarkMode ? "#ffffff" : '#000000'}
                  fgColor={isDarkMode ? "#000000" : '#ffffff'}
                  size={120}
                  style={{ height: "auto", maxWidth: "100%", width: "30%" }}
                  value={referralData.referral_link}
                />
              </Stack>
          </Container>
        </Grid>
  )
}
