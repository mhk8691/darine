'use client'
import { Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RefralButton from './RefralButton'
import Container from '@/app/Components/Containers/Container/Container'
import priceFormater from '@/app/core/PriceFormater'
import { RefrraDataType } from '@/app/core/Types'
import { getreferral } from '@/lib/getRefrral/getRefrral'

export default function Invite() {
      const [referralData, setreferralData] = useState<RefrraDataType>({} as RefrraDataType);
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
            دعوت از دوستان
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
            با دعوت از دوستان خود 20% از کارمزد هر خرید آن‌ها، برای شما
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
            کد دعوت شما
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
                {referralData.total_invited} نفر
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
               مجموع دریافتی شما از دعوت دوستان:
              </Typography>
              <Typography
                variant="h6"
                fontSize={{
                  xs: 12,
                  sm: 14,
                }}
                sx={{ color: 'text.title' }}
              >
                {priceFormater(referralData.total_earned) || 0} تومان
              </Typography>
            </Stack>
          </Container>
        </Grid>
  )
}
