'use client'
import { Typography, useTheme } from '@mui/material'
import { Grid, Stack } from '@mui/system'
import Image from 'next/image'
import React from 'react'

export default function LoginBanner() {
    const theme = useTheme()
    const isDarkMode = theme.palette.mode === 'dark'
  return (
          <Grid
          order={{
            xs: 1,
            md: 2,
          }}
          size={{
            xs: 12,
            md: 5,
            lg: 6,
          }}
          p={{
            xs: 0,
            md: 8,
          }}
          sx={{
            background: {
              xs: "bakcground.default",
              md: `linear-gradient(
120deg,
            ${isDarkMode ?'#616055':'#d7d5cc'} 0%,
 ${isDarkMode ? '#DAC670':'#FDE378'} 100%
)`,
            },
            borderTopRightRadius: {
              xs: 0,
              md: 20,
            },
            borderBottomRightRadius: {
              xs: 0,
              md: 20,
            },
          }}
        >
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              width={{
                xs: 220,
                md: 365,
              }}
              height={{
                xs: 220,
                md: 290,
              }}
            >
              <Image
                src={"/images/login2.webp"}
                width={365}
                height={290}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Stack>
            <Stack
              direction={"column"}
              alignItems={"center"}
              gap={2.5}
              mt={10}
              display={{
                xs: "none",
                md: "flex",
              }}
            >
              <Typography
                variant="h6"
                fontSize={20}
                sx={{ color: "text.title" }}
                fontWeight={600}
              >
                طلاسی پلتفرم خرید و فروش طلا بدون اجرت
              </Typography>
              <Typography
                variant="h6"
                fontSize={16}
                sx={{ color: "text.primary" }}
              >
                طلاسی بستر آنلاین خرید و فروش طلا
              </Typography>
            </Stack>
          </Stack>
        </Grid>
  )
}
