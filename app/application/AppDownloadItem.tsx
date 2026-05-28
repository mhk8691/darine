'use client'
import { Box, Link, Stack, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import QRCode from "react-qr-code";

interface Props {
  url: string
  image: string
}

export default function AppDownloadItem({ image, url }: Props) {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'
  const [isHover, setIsHover] = useState(false)

  return (
    <Stack
      component={'div'}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={{ 
        position: 'relative', 
        width: 'fit-content',
        // نکته کلیدی: وقتی هوور شد، z-index کل این آیتم از بقیه دکمه‌ها بالاتر می‌آید
        zIndex: isHover ? 99 : 1 
      }} 
    >
      <Link
        sx={{
          display: 'block',
          borderColor: isHover ? 'background.border' : 'transparent',
          bgcolor: isHover ? 'background.default' : 'transparent',
          borderRadius: 2,
          transition: 'all 0.2s ease-in-out', 
          position: 'relative',
          zIndex: 3 
        }}
        href={url}
      >
        <Image
          src={`/images/application-download/application/${image}.webp`}
          width={200}
          height={56}
          style={{
            border: isDarkMode ? 'none' : '1px solid black',
            borderRadius: 8,
            display: 'block',
          }}
          alt=''
        />
      </Link>

      {isHover && (
        <Stack
          p={1.5}
          pb={11} 
          pt={2} 
          borderRadius={2}
          position={'absolute'}
          bgcolor={'background.default'}
          bottom={'-5px'} 
          left={'50%'}
          width={'105%'}
          border={1}
          borderColor={'background.border'}
          direction={'row'} 
          justifyContent={'center'}
          sx={{
            transform: 'translateX(-50%)', 
            zIndex: 2, 
          }}
        >
          <QRCode
            bgColor={isDarkMode ? "#ffffff":'#000000'}
            fgColor={isDarkMode ? "#000000":'#ffffff'}
            size={120}
            style={{ height: "auto", maxWidth: "100%", width: "80%" }}
            value={url}
          />
        </Stack>
      )}
    </Stack>
  )
}