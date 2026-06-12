'use client'
import { useAssets } from '@/app/AssetsProvider'
import Container from '@/app/Components/Containers/Container/Container'
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar'
import priceFormater from '@/app/core/PriceFormater'
import { StatisticsDataType } from '@/app/core/Types'
import { getStatistics } from '@/lib/getAssets/getAssets'
import {Stack, Typography } from '@mui/material'
import { isAxiosError } from 'axios'
import React, { useEffect, useState } from 'react'

export default function Statistics() {
    const {isVisible} = useAssets()
    const [statisticsData,setStatisticsData] = useState<StatisticsDataType>({} as StatisticsDataType)
    useEffect(()=>{
        const getData = async ()=>{
            try{
                const response = await getStatistics()
                setStatisticsData(response ?? {} as StatisticsDataType)
            }catch(error:unknown){
                if (isAxiosError(error)){
                    showSnackbar(error.response?.data.message,'error')
                }
            }
        }
        getData()
    },[])
  return (
       <Container
          style={{
            mb: {
              xs: 4,
              sm: 3,
            },
            px: {
              xs: 2,
              lg: 4,
            },
            py: {
              xs:3.5,
              lg:3
            },
          }}
        >
          <Typography
            variant="h2"
            fontSize={{
              xs: 12,
              sm: 20,
              lg: 22,
            }}
            sx={{ color: 'text.primary', }}
            fontWeight={'900'}
          >
            خلاصه فعالیت‌های شما
          </Typography>
          <Stack
            mt={3}
            direction={'column'}
            gap={{
              xs: 2,
              sm: 2.5,
            }}
          >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                مجموع دارایی شما
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                {isVisible ? `${priceFormater(statisticsData.total_assets) ?? 0} تومان` : '***'}
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                سود شما
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'success.main' }}
              >
                 {isVisible ? `${priceFormater(statisticsData.profit) || 0} تومان` : '***'}
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                طلا برداشت شده
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
                {isVisible ? `${priceFormater(statisticsData.withdrawn_gold) || 0} گرم` : '***'}
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                کارت هدیه های خریداری شده
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
               {isVisible ? `${priceFormater(statisticsData.purchased_giftcards) || 0}` : '***'}
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                کارت هدیه های دریافت شده
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
               {isVisible ? `${priceFormater(statisticsData.received_giftcards) || 0}` : '***'}
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                تومان درانتظار پردازش
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
               {isVisible ? `${priceFormater(statisticsData.pending_toman) || 0} تومان` : '***'}
              </Typography>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography
                variant="body1"
                sx={{ color: 'text.muted' }}
                fontSize={{ xs: 10, sm: 14, lg: 16 }}
              >
                طلا درانتظار پردازش
              </Typography>

              <Typography
                variant="h6"
                fontSize={{ xs: 12, sm: 18, lg: 20 }}
                sx={{ color: 'text.title' }}
              >
               {isVisible ? `${priceFormater(statisticsData.pending_gold) || 0} گرم` : '***'}
              </Typography>
            </Stack>
          </Stack>
        </Container>
       
  )
}
